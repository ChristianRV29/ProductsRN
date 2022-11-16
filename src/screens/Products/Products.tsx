import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import styled from '@emotion/native';

import { ProductsContext } from '~src/context/products/ProductContext';

export const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Wrapper>
      <HeadlineContainer>
        <Headline>Products</Headline>
      </HeadlineContainer>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({ item }) => <ProductName>{item.nombre}</ProductName>}
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
  margin-bottom: 10px;
`;

const Headline = styled.Text`
  font-size: 20px;
  color: white;
`;

const ProductName = styled.Text`
  font-size: 18px;
  color: red;
`;
