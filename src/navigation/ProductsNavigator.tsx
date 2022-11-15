import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Product, Products } from '~src/screens';
import { ProductsStackParamsList } from '~src/@types';

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
