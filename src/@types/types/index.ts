import { User } from '../interfaces';

export type AuthContextProps = {
  errorMessage?: string;
  logOut: () => void;
  signIn: () => void;
  signUp: () => void;
  status: Status;
  token: string | null;
  user: User | null;
};

export type Status = 'checking' | 'authenticated' | 'not-authenticated';

type SignUp = {
  readonly type: 'SignUp';
  payload: {
    token: string;
    user: User;
  };
};
type AddError = {
  readonly type: 'AddError';
  payload: {
    errorMessage: string;
  };
};

type RemoveError = {
  readonly type: 'RemoveError';
};

type LogOut = {
  readonly type: 'LogOut';
};

export type AuthAction = SignUp | AddError | RemoveError | LogOut;
