/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment, useContext, useEffect } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BackgroundShape } from '~src/components/BackgroundShape/BackgroundShape';
import { WhiteLogo } from '~src/components/WhiteLogo/WhiteLogo';
import { useForm } from '~src/hooks/useForm';
import { RootStackParamList } from '~src/navigation/StackNavigator';
import { AuthContext } from '../../context/auth/AuthContext';

import {
  ActionButton,
  ActionButtonsContainer,
  ActionButtonText,
  CustomKeyboardAvoidingView,
  FormContainer,
  FormLabel,
  FormTextInput,
  FormTitle,
  Wrapper,
} from '~src/styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login: FC<Props> = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  const { signIn, errorMessage, removeError } = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage) {
      Alert.alert('Wrong login', errorMessage, [
        {
          text: 'Ok',
          onPress: removeError,
        },
      ]);
    }
  }, [errorMessage]);

  const {
    email,
    password,
    onChange: onChangeHook,
  } = useForm({
    email: undefined,
    password: undefined,
  });

  const onLogin = () => {
    Keyboard.dismiss();

    if (email && password) {
      signIn({ correo: email, password });
    }
  };

  return (
    <Fragment>
      <BackgroundShape />
      <CustomKeyboardAvoidingView>
        <Wrapper style={{ top: top }}>
          <WhiteLogo />
          <FormContainer>
            <FormTitle>Login</FormTitle>
            <FormLabel>Email</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => onChangeHook(value, 'email')}
              onSubmitEditing={onLogin}
              operativeSystem={Platform.OS}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              selectionColor="white"
              underlineColorAndroid="white"
              value={email}
            />
            <FormLabel>Password</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => onChangeHook(value, 'password')}
              onSubmitEditing={onLogin}
              operativeSystem={Platform.OS}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              secureTextEntry
              selectionColor="white"
              underlineColorAndroid="white"
            />
            <ActionButtonsContainer>
              <ActionButton onPress={() => navigation.navigate('Register')}>
                <ActionButtonText>Register</ActionButtonText>
              </ActionButton>
              <ActionButton onPress={onLogin}>
                <ActionButtonText>Login</ActionButtonText>
              </ActionButton>
            </ActionButtonsContainer>
          </FormContainer>
        </Wrapper>
      </CustomKeyboardAvoidingView>
    </Fragment>
  );
};
