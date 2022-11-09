import React, { FC, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { AuthContext } from '~src/context/auth/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: FC<Props> = ({ route }) => {
  const { message } = route.params;

  const { logOut } = useContext(AuthContext);

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={logOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    backgroundColor: '#2ca3da',
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    color: 'white',
    fontSize: 20,
  },

  button: {
    height: 55,
    width: 100,
  },
});
