/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';

import { AuthContext } from '~src/context/auth/AuthContext';

export const Loading = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      logOut();
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Wrapper>
      <ActivityIndicator size={50} color={'#2ca3da'} />
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
