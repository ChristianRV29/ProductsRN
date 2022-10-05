import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: FC<Props> = ({ route }) => {
  const { message } = route.params;

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.message}>{message}</Text>
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
});
