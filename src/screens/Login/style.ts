import { Platform } from 'react-native';

import styled from '@emotion/native';

type OperativeSystem = typeof Platform.OS;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

export const FormTitle = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

export const FormLabel = styled.Text`
  margin-top: 10px;
  color: white;
  font-size: 15px;
  font-weight: 400;
`;

export const TextInputAndroid = `
  margin-bottom: 5px;
  margin-top: 5px;
`;

/*
 CONTEXT - There is a problem with the border-bottom definition on @emotion/native
 SOLUTION Define a general border and modify each side excepting bottom side
*/
export const TextInputiOS = `
  border-left-color: transparent; 
  border-radius: 2px;
  border-right-color: transparent;
  border-top-color: transparent;
  border: 2px solid white;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FormTextInput = styled.TextInput<{
  operativeSystem: OperativeSystem;
}>`
  font-size: 15px;
  color: white;
  ${({ operativeSystem }) =>
    operativeSystem === 'android' ? `${TextInputAndroid}` : `${TextInputiOS}`}
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  align-self: flex-end;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  height: 35px;
  justify-content: center;
  margin-top: 15px;
  width: 150px;
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-size: 15px;
`;
