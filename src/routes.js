import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Main from '~/pages/Main';
import Options from '~/pages/Options';
import QRCode from '~/pages/QRCode';

export default (signIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Main: {
              screen: createStackNavigator(
                {
                  Main,
                  QRCode,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#f46b07',
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Início',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="store" size={20} color={tintColor} />
                ),
              },
            },
            Options,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#f46b07',
                padding: 5,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signIn ? 'App' : 'Sign',
      }
    )
  );
