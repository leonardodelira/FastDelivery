import React from 'react';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ButtonBipQrcode,
  Header,
  HeaderText,
  UserNameBold,
  Products,
  ProductsPending,
  ProductsPendingText,
  ProductsDelivered,
  ProductsDeliveredText,
  Number,
  CenterInRow,
} from './styles';

export default function Main({ navigation }) {
  const username = useSelector(state => state.auth.username);
  const products = useSelector(state => state.products);
  const hasProductPending = useSelector(
    state => state.products.ProductsPending > 0
  );

  function handleNavigation() {
    if (!hasProductPending) return;
    navigation.navigate('QRCode');
  }

  return (
    <Container>
      <Header>
        <HeaderText>
          Seja bem vindo
          <UserNameBold> {username}</UserNameBold>
        </HeaderText>
      </Header>
      <Products>
        <ProductsPending>
          <ProductsPendingText>Produtos Pendentes Entrega:</ProductsPendingText>
          <CenterInRow>
            <Icon name="assignment-late" size={30} color="#FF0000" />
            <Number>{products.ProductsPending}</Number>
          </CenterInRow>
        </ProductsPending>
        <ProductsDelivered>
          <ProductsDeliveredText>Produtos Entregues:</ProductsDeliveredText>
          <CenterInRow>
            <Icon name="assignment-turned-in" size={30} color="#008000" />
            <Number>{products.ProductsDelivered}</Number>
          </CenterInRow>
        </ProductsDelivered>
      </Products>
      <ButtonBipQrcode
        iconName="add-a-photo"
        onPress={handleNavigation}
        disabled={!hasProductPending}
      >
        Finalizar Entrega
      </ButtonBipQrcode>
    </Container>
  );
}
