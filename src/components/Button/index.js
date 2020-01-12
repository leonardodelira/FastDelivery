import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropsTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function Button({ children, loading, iconName, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : iconName ? (
        <>
          <Icon
            name={iconName}
            size={25}
            color="#FFF"
            style={{ marginRight: 10 }}
          />
          <Text>{children}</Text>
        </>
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropsTypes.string.isRequired,
  loading: PropsTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
