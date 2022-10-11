import React from 'react';
import styled from '@emotion/native';
import { ActivityIndicator } from 'react-native';

export const Loading = () => {
  return (
    <Wrapper>
      <ActivityIndicator size={30} color={'#2ca3da'} />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
