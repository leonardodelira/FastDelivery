import { Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Background = styled(LinearGradient).attrs({
  colors: ['#f46b07', '#f59e1d'],
})`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Lottie = styled.View`
  width: 100%;
  height: 170px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)``;

export const MessageError = styled.Text`
  margin-bottom: 15px;
  color: red;
  font-weight: bold;
`;
