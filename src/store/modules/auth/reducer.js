import produce from 'immer';

const initialState = {
  signed: false,
  username: '',
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN': {
        draft.signed = true;
        draft.username = action.payload.username;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.username = null;
        break;
      }
      default:
    }
  });
}
