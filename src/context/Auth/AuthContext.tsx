import React, { createContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  AuthContextProps,
  AuthState,
  SignInData,
  SignInResponse,
} from '~src/@types';
import cafeApi from '~src/api';

import { authReducer } from './AuthReducer';

const authInitialState: AuthState = {
  errorMessage: null,
  status: 'checking',
  token: null,
  user: null,
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

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
      }
    } catch (err: any) {
      dispatch({
        type: 'AddError',
        payload: {
          errorMessage: err.response.data.msg || 'Wrong information',
        },
      });
      console.error(
        'AuthContext signIn ~ It has happened an error: ',
        err.response.data,
      );
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
