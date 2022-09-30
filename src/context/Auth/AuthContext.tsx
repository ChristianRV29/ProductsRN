import React, { createContext, useReducer } from 'react';

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

  const signIn = async (data: SignInData) => {
    try {
      const resp = await cafeApi.post<SignInResponse>('/auth/login', data);

      console.log('SignIn response: ', resp.data);
    } catch (err) {
      console.error('AuthContext 22 ~ It has happened an error: ', err);
    }
  };
  const signUp = () => {};

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
