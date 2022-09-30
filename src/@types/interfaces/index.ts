import { Status } from '../types';

export interface User {
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
}

export interface AuthState {
  errorMessage: string | null;
  status: Status;
  token: string | null;
  user: User | null;
}
export interface SignInResponse {
  usuario: User;
  token: string;
}
