import React, { createContext, useState } from 'react';

import { Producto, ProductsContextProps } from '~src/@types';

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  const addProduct = async (categoryId: string, productName: string) => {};

  const loadProducts = async () => {};

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
