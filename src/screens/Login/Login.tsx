import React, { Fragment, useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackgroundShape } from '~src/components/BackgroundShape/BackgroundShape';
import { WhiteLogo } from '~src/components/WhiteLogo/WhiteLogo';
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

  const newUserRef = useRef<boolean>(true);

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
              operativeSystem={Platform.OS}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              selectionColor="white"
              underlineColorAndroid="white"
            />
            <FormLabel>Password</FormLabel>
            <FormTextInput
              autoCapitalize="none"
              autoCorrect={false}
              operativeSystem={Platform.OS}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              secureTextEntry
              selectionColor="white"
              underlineColorAndroid="white"
            />
            {newUserRef.current ? (
              <ActionButton
                onPress={() =>
                  console.log('Somebody is trying to register himself')
                }>
                <ActionButtonText>Register</ActionButtonText>
              </ActionButton>
            ) : (
              <ActionButton
                onPress={() =>
                  console.warn('Somebody is trying to login himself')
                }>
                <ActionButtonText>Login</ActionButtonText>
              </ActionButton>
            )}
          </FormContainer>
        </Wrapper>
      </CustomKeyboardAvoidingView>
    </Fragment>
  );
};
