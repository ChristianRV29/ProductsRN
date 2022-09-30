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
  errorMessage: string | undefined;
  status: Status;
  token: string | null;
  user: User | null;
}
