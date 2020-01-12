import React from 'react';

import { useDispatch } from 'react-redux';
import { ProductReadAgain, GoHome } from '~/store/modules/products/actions';

import {
  Container,
  Message,
  ButtonReadAgain,
  ButtonGoToHome,
  Qrcode,
} from './styles';

export default function ProductDelivered({
  height,
  navigation,
  handleReadAgain,
  qrcode,
}) {
  const dispatch = useDispatch();

  function handleButtonReadAgain() {
    handleReadAgain();
    dispatch(ProductReadAgain());
  }

  function handleGoHome() {
    navigation.goBack();
    dispatch(GoHome());
  }

  return (
    <Container height={height}>
      <Message>Produto Entregue com Sucesso!</Message>
      <Qrcode>{qrcode}</Qrcode>
      <Message>Deseja realizar processo novamente?</Message>
      <ButtonReadAgain onPress={handleButtonReadAgain}>
        Entregar outro Produto
      </ButtonReadAgain>
      <ButtonGoToHome onPress={handleGoHome}>Voltar ao início</ButtonGoToHome>
    </Container>
  );
}
