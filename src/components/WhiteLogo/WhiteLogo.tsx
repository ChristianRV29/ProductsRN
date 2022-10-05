import React, { FC } from 'react';

import { Logo, LogoContainer } from './style';

export const WhiteLogo: FC = () => {
  return (
    <LogoContainer>
      <Logo
        source={require('~src/assets/react-logo.png')}
        resizeMode="contain"
      />
    </LogoContainer>
  );
};
