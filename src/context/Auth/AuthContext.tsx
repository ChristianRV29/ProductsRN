import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useReducer } from 'react';

import {
  AuthContextProps,
  AuthState,
  SignInData,
  SignInResponse,
} from '~src/@types';
import cafeApi from '~src/api/index';

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

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('@user_token');

    if (!token) {
      return dispatch({ type: 'LogOut' });
    }

    const { data } = await cafeApi.get<SignInResponse>('/auth', {
      headers: {
        'x-token': token,
      },
    });

    await AsyncStorage.setItem('@user_token', data.token);

    dispatch({
      type: 'SignUp',
      payload: { token: data.token, user: data.usuario },
    });
  };

  const logOut = () => {
    dispatch({ type: 'LogOut' });
  };

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
        await AsyncStorage.setItem('@user_token', data.token);
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
