import React, { Fragment, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register } from '~src/screens/index';
import { AuthContext } from '~src/context/auth/AuthContext';
import { Loading } from '~src/screens/Loading/Loading';
import { ProductsNavigator } from '~src/navigation/ProductsNavigator';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: {
    message: string;
  };
  ProductsNavigator: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { status } = useContext(AuthContext);

  if (status === 'checking') {
    return <Loading />;
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {status !== 'authenticated' ? (
        <Fragment>
          <Screen name="Login" component={Login} />
          <Screen name="Register" component={Register} />
        </Fragment>
      ) : (
        <Screen name="ProductsNavigator" component={ProductsNavigator} />
      )}
    </Navigator>
  );
};
