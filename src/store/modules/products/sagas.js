import { Alert } from 'react-native';
import { all, takeLatest, put, select } from 'redux-saga/effects';

import { ProductDeliveredSuccess } from './actions';

export function* productsDelivered() {
  const hasProductPending = yield select(
    state => state.products.ProductsPending > 0
  );

  if (hasProductPending) {
    yield put(ProductDeliveredSuccess());
  } else {
    Alert.alert('Você não possui produtos pendentes de entrega');
  }
}

export default all([
  takeLatest('@PRODUCT/DELIVERED_REQUEST', productsDelivered),
]);
