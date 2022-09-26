import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Login = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Login screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
