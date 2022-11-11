/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, Fragment, useContext, useEffect } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BackgroundShape } from '~src/components/BackgroundShape/BackgroundShape';
import { WhiteLogo } from '~src/components/WhiteLogo/WhiteLogo';
import { useForm } from '~src/hooks/useForm';
import { RootStackParamList } from '~src/navigation/StackNavigator';

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
import { AuthContext } from '~src/context/auth/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export const Register: FC<Props> = () => {
  const { top } = useSafeAreaInsets();

  const { signUp, errorMessage, removeError } = useContext(AuthContext);

  useEffect(() => {
    if (errorMessage) {
      Alert.alert('Wrong register', errorMessage, [
        {
          text: 'Ok',
          onPress: removeError,
        },
      ]);
    }
  }, [errorMessage]);

  const {
    name,
    email,
    password,
    onChange: onChangeHook,
  } = useForm({
    name: undefined,
    email: undefined,
    password: undefined,
  });

  const onRegister = () => {
    Keyboard.dismiss();

    if (name && email && password) {
      signUp({ nombre: name, correo: email, password, rol: 'USER_ROLE' });
    }
  };

  return (
    <Fragment>
      <BackgroundShape />
      <CustomKeyboardAvoidingView>
        <Wrapper style={{ top: top }}>
          <WhiteLogo />
          <FormContainer>
            <FormTitle>Register</FormTitle>
            <FormLabel>Name</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              onChangeText={value => onChangeHook(value, 'name')}
              onSubmitEditing={onRegister}
              operativeSystem={Platform.OS}
              placeholder="Enter your name"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              selectionColor="white"
              underlineColorAndroid="white"
              value={name}
            />
            <FormLabel>Email</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => onChangeHook(value, 'email')}
              onSubmitEditing={onRegister}
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
              onSubmitEditing={onRegister}
              operativeSystem={Platform.OS}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              secureTextEntry
              selectionColor="white"
              underlineColorAndroid="white"
            />
            <ActionButtonsContainer>
              <ActionButton onPress={onRegister}>
                <ActionButtonText>Register</ActionButtonText>
              </ActionButton>
            </ActionButtonsContainer>
          </FormContainer>
        </Wrapper>
      </CustomKeyboardAvoidingView>
    </Fragment>
  );
};
