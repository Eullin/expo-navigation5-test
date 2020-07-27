import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';


import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { BottomTabNavigator } from '../navigation//BottomTabNavigator'


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {BottomTabNavigator}
    </NavigationContainer>
  );
}




