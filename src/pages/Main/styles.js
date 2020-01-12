import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled(LinearGradient).attrs({
  colors: ['#f46b07', '#f59e1d'],
})`
  height: 60px;
  width: 100%;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  color: #fff;
  align-self: center;
  font-size: 16px;
`;

export const UserNameBold = styled.Text`
  font-weight: bold;
`;

export const Products = styled.View``;

export const ProductsPending = styled.View`
  height: 100px;
  background: #eee;
  margin-bottom: 10px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export const ProductsPendingText = styled.Text`
  color: #333;
  font-size: 21px;
  text-align: center;
`;

export const ProductsDelivered = styled.View`
  height: 100px;
  background: #eee;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;

export const ProductsDeliveredText = styled.Text`
  color: #333;
  font-size: 21px;
  text-align: center;
`;

export const Number = styled.Text`
  margin-left: 15px;
  font-size: 25px;
`;

export const ButtonBipQrcode = styled(Button)`
  width: 200px;
  margin-bottom: 20px;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const CenterInRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;
