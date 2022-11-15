import { Producto, RegisterData, User } from './../interfaces';

export type AuthContextProps = {
  errorMessage: string | null;
  logOut: () => void;
  signIn: (data: SignInData) => void;
  signUp: (data: RegisterData) => void;
  removeError: () => void;
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

export type SignInData = {
  correo: string;
  password: string;
};

export type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<void>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  loadProductById: (productId: string) => Promise<Producto>;
  updloadProductImage: (data: any, productId: string) => Promise<void>;
};

export type ProductsStackParamsList = {
  Products: undefined;
  Product: undefined;
};
