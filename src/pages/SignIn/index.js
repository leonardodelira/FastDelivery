import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import { SignInRequest } from '~/store/modules/auth/actions';

import dliveryman from '~/assets/dliveryman.json';

import {
  Background,
  Container,
  Lottie,
  Title,
  Form,
  FormInput,
  SubmitButton,
  MessageError,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [username, setUserName] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearTimeout();
  }, []);

  function handleSubmit() {
    if (!username) {
      setError(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        dispatch(SignInRequest(username));
      }, 2000);
    }
  }

  return (
    <Background>
      <Container>
        <Lottie>
          <LottieView source={dliveryman} autoPlay loop />
        </Lottie>
        <Title>Fast Delivery</Title>
        <Form>
          <FormInput
            value={username}
            icon="person-outline"
            auto-correct={false}
            autoCaptalize="none"
            placeholder="Seu nome"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setUserName}
          />
          {error && <MessageError>*Insira seu nome</MessageError>}
          <SubmitButton onPress={handleSubmit} loading={loading}>
            Entrar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
