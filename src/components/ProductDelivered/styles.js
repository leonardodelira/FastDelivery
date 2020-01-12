import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  position: absolute;
  padding: 20px;
  z-index: 1;
  top: 30px;
  height: ${props => props.height}px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  justify-content: space-around;
`;

export const Message = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

export const Qrcode = styled.Text`
  font-size: 13px;
  color: #fff;
  text-align: center;
`;

export const ButtonReadAgain = styled(Button)`
  background: #f46b07;
`;

export const ButtonGoToHome = styled(Button)``;
