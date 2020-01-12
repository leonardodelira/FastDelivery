import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { SignOutRequest } from '~/store/modules/auth/actions';

import {
  Container,
  Profile,
  ProfileImage,
  ProfileName,
  ButtonLogout,
} from './styles';

export default function Options() {
  const username = useSelector(state => state.auth.username);
  const dispatch = useDispatch();

  function handleButton() {
    dispatch(SignOutRequest());
  }

  return (
    <Container>
      <Profile>
        <ProfileImage
          source={{
            uri: `https://api.adorable.io/avatar/100/${username}.png`,
          }}
        />
        <ProfileName value={username} icon="person-outline" />
        <ButtonLogout onPress={handleButton}>SAIR DO APP</ButtonLogout>
      </Profile>
    </Container>
  );
}

Options.navigationOptions = {
  tabBarLabel: 'Opções',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
