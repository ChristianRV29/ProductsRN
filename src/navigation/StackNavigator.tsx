import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Home, Register } from '~src/screens/index';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: {
    message: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
          message: 'Welcome to Products App',
        }}
      />
    </Stack.Navigator>
  );
};
