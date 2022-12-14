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
      return { ...state, errorMessage: null };

    case 'SignUp':
      return {
        ...state,
        errorMessage: null,
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'LogOut':
      return {
        errorMessage: null,
        status: 'not-authenticated',
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
