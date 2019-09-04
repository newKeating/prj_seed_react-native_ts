import React from 'react';
import {View, Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from '../screens/Tabs/Home';
import NavIcon from '../components/NavIcon';
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
        headerTitle: <NavIcon name="ios-git-merge" size={36} />,
      }),
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <NavIcon focused={focused} name={'ios-list'} />
        ),
        title: 'Home',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
