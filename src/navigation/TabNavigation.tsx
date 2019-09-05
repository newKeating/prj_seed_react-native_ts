import React from 'react';
import {View, Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from '../screens/Tabs/Home';
import Header from '../components/Header';

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: {...customConfig},
    },
  });

export default createBottomTabNavigator(
  {
    Home: {
      screen: stackFactory(Home, {
        headerTitle: Home,
      }),
      navigationOptions: {
        title: 'Home',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
