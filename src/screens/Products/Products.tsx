import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from '@emotion/native';

import { ProductsContext } from '~src/context/products/ProductContext';
import { Product, ProductsStackParamsList } from '~src/@types';

type Props = NativeStackScreenProps<ProductsStackParamsList, 'Products'>;

export const Products = ({ navigation }: Props) => {
  const { products } = useContext(ProductsContext);

  // TODO: Make a pull to refresh for showing new products
  const renderProductItem = (product: Product): JSX.Element => {
    const { nombre: name } = product;
    return (
      <ProductContainer
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Product', { product })}>
        <ProductName>{name}</ProductName>
      </ProductContainer>
    );
  };

  return (
    <Wrapper>
      <HeadlineContainer>
        <Headline>Products</Headline>
      </HeadlineContainer>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({ item }) => renderProductItem(item)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: #2ca3da;
  display: flex;
  height: 100%;
  width: 100%;
`;

const HeadlineContainer = styled.View`
  align-items: center;
  background-color: #b4b0b0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
  border: 1px solid white;
  display: flex;
  height: 45px;
  justify-content: center;
`;

const Headline = styled.Text`
  font-size: 20px;
  color: white;
`;

const ItemSeparator = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
`;

const ProductContainer = styled.TouchableOpacity`
  align-items: flex-start;
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 10px;
`;

const ProductName = styled.Text`
  color: white;
  font-size: 18px;
`;
