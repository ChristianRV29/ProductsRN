import React, { Fragment } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BackgroundShape } from '~src/components/BackgroundShape/BackgroundShape';
import { WhiteLogo } from '~src/components/WhiteLogo/WhiteLogo';
import { Wrapper } from './style';

export const Login = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Fragment>
      <BackgroundShape />
      <Wrapper style={{ top: top }}>
        <WhiteLogo />
      </Wrapper>
    </Fragment>
  );
};
