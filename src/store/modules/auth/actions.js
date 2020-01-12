export function SignInRequest(username) {
  return {
    type: '@auth/SIGN_IN',
    payload: { username },
  };
}

export function SignOutRequest() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
