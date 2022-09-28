import React, { Fragment, useRef } from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackgroundShape } from '~src/components/BackgroundShape/BackgroundShape';
import { WhiteLogo } from '~src/components/WhiteLogo/WhiteLogo';
import { useForm } from '~src/hooks/useForm';

import {
  ActionButton,
  ActionButtonText,
  CustomKeyboardAvoidingView,
  FormContainer,
  FormLabel,
  FormTextInput,
  FormTitle,
  Wrapper,
} from './style';

export const Login = () => {
  const { top } = useSafeAreaInsets();

  const {
    email,
    password,
    onChange: onChangeHook,
  } = useForm({
    email: undefined,
    password: undefined,
  });

  const onLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
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
            <ActionButton onPress={onLogin}>
              <ActionButtonText>Login</ActionButtonText>
            </ActionButton>
          </FormContainer>
        </Wrapper>
      </CustomKeyboardAvoidingView>
    </Fragment>
  );
};
