/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from '@emotion/native';

import { AuthContext } from '~src/context/auth/AuthContext';

export const Loading = () => {
  const { status, logOut } = useContext(AuthContext);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (status !== 'checking') {
        logOut();
      }
    }, 5000);

    return () => {
      clearTimeout(intervalId);
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
