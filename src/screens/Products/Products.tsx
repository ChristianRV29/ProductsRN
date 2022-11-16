import React, { useContext, useEffect, useMemo } from 'react';
import { Text, View } from 'react-native';

import { ProductsContext } from '~src/context/products/ProductContext';

export const Products = () => {
  const { products } = useContext(ProductsContext);

  const allProducts = useMemo(() => {
    console.log('Products: ', products);
  }, [products]);

  return (
    <View>
      <Text>Welcome to Products Screen</Text>
    </View>
  );
};
