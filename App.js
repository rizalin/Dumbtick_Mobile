import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/welcome';
import Home from './pages/homes';
import Category from './pages/category'
import { DetailMap } from './pages/details'
import EventMap from "./mapping/event"
import Footer from "./mapping/footer"

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      title: null,
      headerShown: false
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: null,
      headerShown: false
    }
  },
  EventMap: {
    screen: EventMap,
    navigationOptions: {
      title: null,
      headerShown: false
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      title: null,
      headerShown: false
    }
  },
  Detail: {
    screen: DetailMap,
    navigationOptions: {
      title: null,
      headerShown: false
    }
  },

  Footer: {
    screen: Footer,
    navigationOptions: {
      title: null,
      headerShown: false
    }
  },

}, {
  initialRouteName: 'Welcome'
});

export default createAppContainer(AppNavigator);