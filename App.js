import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabNavigator } from './components/BottomTabNavigator';
import WelcomeScreen from './screens/WelcomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
  return <AppContainer/>
}
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  },
  TabNavigator:{
    screen:BottomTabNavigator
  }
})

const AppContainer = createAppContainer(SwitchNavigator)

