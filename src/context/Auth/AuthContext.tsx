import React, { createContext, useReducer } from 'react';

import { AuthContextProps, AuthState } from '~src/@types';
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
  const signIn = () => {};
  const signUp = () => {};

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
