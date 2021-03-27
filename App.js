import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CaiDat from './components/CaiDat';
import DoiTac from './components/DoiTac';
import ChamCong from './components/ChamCong';
import QLNV from './components/QLNV';

const AppNavigator = createStackNavigator(
  {QLNV},{ headerMode: 'none' }
);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}