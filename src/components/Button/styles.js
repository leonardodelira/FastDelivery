import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #0e48c2;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
