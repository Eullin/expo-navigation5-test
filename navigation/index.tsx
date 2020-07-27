import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import NotFoundScreen from '../screens/NotFoundScreen'; import { RootStackParamList } from '../types';
// import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { createStack } from '../navigation/CreateStack'
import MenuStack from '../screens/TabMenuScreen';
import { BottomTabNavigator } from '../navigation//BottomTabNavigator'


// const TabMenuNavigator = createStack([{ Screen: MenuStack, config: { routeName: 'Menu' } },], {}, {});

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {BottomTabNavigator}
    </NavigationContainer>
  );
}




