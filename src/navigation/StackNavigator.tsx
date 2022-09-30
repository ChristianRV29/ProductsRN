import React, { Fragment, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Home, Register } from '~src/screens/index';
import { AuthContext } from '../context/auth/AuthContext';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: {
    message: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { status } = useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      {status !== 'authenticated' ? (
        <Fragment>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Fragment>
      ) : (
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{
            message: 'Welcome to Products App',
          }}
        />
      )}
    </Stack.Navigator>
  );
};
