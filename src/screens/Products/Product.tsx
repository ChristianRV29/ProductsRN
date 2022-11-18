import React from 'react';
import { Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ProductsStackParamsList } from '~src/@types';

type Props = NativeStackScreenProps<ProductsStackParamsList, 'Product'>;

export const Product = ({ route }: Props) => {
  const { product } = route.params;
  return (
    <View>
      <Text>Welcome to product screen</Text>
      <Text>{JSON.stringify(product)}</Text>
    </View>
  );
};
