import React, { Fragment, useState } from 'react';
import { Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackgroundShape } from '~src/components/BackgroundShape/BackgroundShape';
import { WhiteLogo } from '~src/components/WhiteLogo/WhiteLogo';
import {
  FormContainer,
  FormLabel,
  FormTitle,
  Wrapper,
  FormTextInput,
  LoginButton,
  LoginButtonText,
} from './style';

export const Login = () => {
  const { top } = useSafeAreaInsets();

  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <Fragment>
      <BackgroundShape />
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
          {isRegistering ? null : (
            <LoginButton
              onPress={() => console.warn('Somebody is trying to login')}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>
          )}
        </FormContainer>
      </Wrapper>
    </Fragment>
  );
};
