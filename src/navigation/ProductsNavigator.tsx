import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Products } from '~src/screens/Products/Products';
import { Product } from '~src/screens/Products/Product';

export type ProductsStackParamsList = {
  Products: undefined;
  Product: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<ProductsStackParamsList>();

export const ProductsNavigator = () => {
  return (
    <Navigator>
      <Screen name="Products" component={Products} />
      <Screen name="Product" component={Product} />
    </Navigator>
  );
};
