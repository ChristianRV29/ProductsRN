/* eslint-disable curly */
import React, { createContext, useEffect, useReducer } from 'react';

import {
  AuthContextProps,
  AuthState,
  SignInData,
  SignInResponse,
} from '~src/@types';
import cafeApi from '~src/api';
import { storeData } from '~src/utils/storage';

import { authReducer } from './AuthReducer';
import { getData } from '../../utils/storage/index';

const authInitialState: AuthState = {
  errorMessage: null,
  status: 'checking',
  token: null,
  user: null,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    getData('@user_token').then(token => {
      if (!token) dispatch({ type: 'LogOut' });
    });
  };

  const logOut = () => {};

  const signIn = async ({ correo, password }: SignInData) => {
    try {
      const { data } = await cafeApi.post<SignInResponse>('/auth/login', {
        correo,
        password,
      });

      if (data) {
        const { usuario, token } = data;

        dispatch({
          type: 'SignUp',
          payload: {
            user: usuario,
            token,
          },
        });

        storeData('@user_token', JSON.stringify(token));
      }
    } catch (err: any) {
      dispatch({
        type: 'AddError',
        payload: {
          errorMessage: err?.response?.data?.msg || 'Wrong information',
        },
      });
      console.error('AuthContext signIn ~ It has happened an error: ', err);
    }
  };

  const signUp = () => {};

  const removeError = () => dispatch({ type: 'RemoveError' });

  return (
    <AuthContext.Provider
      value={{ ...state, signIn, signUp, logOut, removeError }}>
      {children}
    </AuthContext.Provider>
  );
};
