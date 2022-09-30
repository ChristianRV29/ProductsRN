import React, { createContext } from 'react';

import { AuthContextProps } from '~src/@types';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
