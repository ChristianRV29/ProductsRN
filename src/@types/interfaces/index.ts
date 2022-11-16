import { SignInData, Status } from '~src/@types';

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
export interface RegisterData extends SignInData {
  nombre: string;
  rol: 'ADMIN_ROLE' | 'USER_ROLE';
}

export interface ProductsResponse {
  total: number;
  productos: Product[];
}

export interface Product {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Category;
  usuario: Category;
  img?: string;
}

export interface Category {
  _id: string;
  nombre: string;
}
