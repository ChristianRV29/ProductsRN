import React, { FC, useContext } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from '@emotion/native';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import { AuthContext } from '~src/context/auth/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: FC<Props> = ({ route }) => {
  const { message } = route.params;

  const { logOut } = useContext(AuthContext);

  return (
    <Wrapper>
      <MessageText>{message}</MessageText>
      <LogOutButton onPress={logOut}>
        <LogoutButtonText>Logout</LogoutButtonText>
      </LogOutButton>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  align-items: center;
  background-color: #2ca3da;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const MessageText = styled.Text`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

const LogOutButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: 10px;
  border: 1px solid white;
  height: 30px;
  justify-content: center;
  width: 100px;
`;

const LogoutButtonText = styled.Text`
  font-size: 15px;
  color: white;
`;
