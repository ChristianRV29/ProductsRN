import { AuthAction, AuthState } from '~src/@types';

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'AddError':
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        status: 'not-authenticated',
        token: null,
      };

    case 'RemoveError':
      return { ...state, errorMessage: undefined };

    case 'SignUp':
      return {
        ...state,
        errorMessage: undefined,
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'LogOut':
      return { ...state, status: 'not-authenticated', token: null, user: null };

    default:
      return state;
  }
};
