import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { ProductDeliveredRequest } from '~/store/modules/products/actions';

import ProductDelivered from '~/components/ProductDelivered';

import { Container } from './styles';

export default function QRCode({ navigation }) {
  let scanner;

  const height = Dimensions.get('window').height - 200;

  const dispatch = useDispatch();
  const showModalProductSuccess = useSelector(
    state => state.products.ShowButton
  );

  const [valueQrCode, setValueQrCode] = useState('');

  function handleQRCode(value) {
    setValueQrCode(value.data);

    dispatch(ProductDeliveredRequest());
  }

  function handleReadAgain() {
    scanner.reactivate();
  }

  return (
    <Container>
      {showModalProductSuccess && (
        <ProductDelivered
          height={height}
          navigation={navigation}
          handleReadAgain={handleReadAgain}
          qrcode={valueQrCode}
        />
      )}
      <QRCodeScanner
        onRead={handleQRCode}
        showMarker
        checkAndroid6Permissions
        fadeIn
        cameraStyle={{ height }}
        ref={elem => {
          scanner = elem;
        }}
      />
    </Container>
  );
}

QRCode.navigationOptions = () => ({
  title: 'Faça a leitura do QRCode',
  headerTransparent: false,
});
