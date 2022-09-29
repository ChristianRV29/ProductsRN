import React, { createContext } from 'react';

import { Status, User } from '~src/@types';

type AuthContextProps = {
  errorMessage: string | undefined;
  logOut: () => void;
  signIn: () => void;
  signUp: () => void;
  status: Status;
  token: string | null;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContextProps);
