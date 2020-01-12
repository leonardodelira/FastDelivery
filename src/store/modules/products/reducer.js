import produce from 'immer';

const initialData = {
  ProductsPending: 3,
  ProductsDelivered: 0,
  ShowButton: false,
};

export default function products(state = initialData, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@PRODUCT/DELIVERED_SUCCESS': {
        draft.ProductsPending -= 1;
        draft.ProductsDelivered += 1;
        draft.ShowButton = true;
        break;
      }
      case '@PRODUCT/READ_AGAIN': {
        draft.ShowButton = false;
        break;
      }
      case '@PRODUCT/GO_HOME': {
        draft.ShowButton = false;
        break;
      }
      default:
    }
  });
}
