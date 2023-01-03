import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from '~src/navigation/StackNavigator';
import { AuthProvider } from '~src/context/auth/AuthContext';
import { ProductsProvider } from '~src/context/products/ProductContext';

const App = () => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default App;
