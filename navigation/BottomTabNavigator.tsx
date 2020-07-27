import * as React from 'react';

import { createStack } from '../navigation/CreateStack'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabMenuScreen from '../screens/TabMenuScreen';
import TabSettingsScreen from '../screens/TabSettingsScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { createTabNavigator } from './CreateBottomTabNavigator'


const TabMenuNavigator = createStack(
  [
    { Screen: TabMenuScreen, config: { routeName: 'Menu', buttonTitle: 'Menu test' } },
    { Screen: TabSettingsScreen, config: { routeName: 'Settings' } }
  ], {}, {});


export const BottomTabNavigator = createTabNavigator(
  [
    { Screen: TabOneScreen, config: { routeName: 'Tab1', icon: 'looks-one' } },
    { Screen: TabTwoScreen, config: { routeName: 'Tab2', icon: 'looks-two' } },
    { Screen: () => TabMenuNavigator, config: { routeName: 'Menu', icon: 'menu', buttonTitle: 'test button' } }
  ], {}, {})



