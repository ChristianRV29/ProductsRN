import React from 'react';

import { Logo, LogoContainer } from './style';

export const WhiteLogo = () => {
  return (
    <LogoContainer>
      <Logo
        source={require('~src/assets/react-logo.png')}
        resizeMode="contain"
      />
    </LogoContainer>
  );
};
