/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';

import { Product, ProductsContextProps, ProductsResponse } from '~src/@types';
import cafeApi from '~src/api';

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [gettingProducts, setGettingProducts] = useState<boolean>(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const addProduct = async (categoryId: string, productName: string) => {};

  const loadProducts = async (limit: number = 10) => {
    try {
      const { data } = await cafeApi.get<ProductsResponse>(
        `/productos?limite=${limit}`,
      );
      if (data && data.productos.length > 1) {
        setGettingProducts(false);
        setProducts([...products, ...data.productos]);
      }
    } catch (err: any) {
      setGettingProducts(false);
      console.log('loadProducts ~ It happened a problem: ', err.message || err);
    }
  };

  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {};

  const deleteProduct = async (productId: string) => {};

  const loadProductById = async (productId: string) => {
    throw new Error('Not implemented yet');
  };

  const updloadProductImage = async (data: any, productId: string) => {};

  return (
    <ProductsContext.Provider
      value={{
        isGetting: gettingProducts,
        products,
        addProduct,
        loadProducts,
        updateProduct,
        deleteProduct,
        loadProductById,
        updloadProductImage,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
