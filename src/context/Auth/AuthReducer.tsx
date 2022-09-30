import { AuthAction, Status } from '~src/@types';

export interface AuthState {
    status: Status;
    token: string | undefined;
}

export const authReducer = (state: any, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SignUp'

    default:
      break;
  }
};
