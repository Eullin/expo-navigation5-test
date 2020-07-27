import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStack } from '../navigation/CreateStack'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabMenuScreen from '../screens/TabMenuScreen';
import TabSettingsScreen from '../screens/TabSettingsScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

// const TabSettingsStack = createStack([{ Screen: TabSettingsScreen, config: { routeName: 'Settings' } }], {}, {})
const TabMenuNavigator = createStack(
  [
    { Screen: TabMenuScreen, config: { routeName: 'Menu' } },
    { Screen: TabSettingsScreen, config: { routeName: 'Settings' } }
  ], {}, {});

const TabOneNavigator = createStack(
  [
    { Screen: TabOneScreen, config: { routeName: 'TabOneScreen' } },
  ], {}, {});

const TabTwoNavigator = createStack(
  [
    { Screen: TabTwoScreen, config: { routeName: 'TabTwoNavigator' } },
  ], {}, {});

export const BottomTabNavigator = createTabNavigator(
  [
    { Screen: TabOneScreen, config: { routeName: 'Tab1' } },
    { Screen: TabTwoScreen, config: { routeName: 'Tab2' } },
    { Screen: () => TabMenuNavigator, config: { routeName: 'Menu' } }
  ], {}, {})


export function createTabNavigator(screens: any, stackConfig: any, navigationOptions: any) {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator screenOptions={stackConfig}>
      {
        screens.map((each: any) => {
          let { config: { routeName, props }, Screen } = each;
          return <BottomTab.Screen name={routeName} component={Screen} options={navigationOptions} key={routeName} />
        })
      }
    </BottomTab.Navigator>
  )
}


function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
/* const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two HEading' }}
      />
    </TabTwoStack.Navigator>
  );
}


 function TabMenuNavigator() {
  return (
    <TabMenuStack.Navigator>
      <TabMenuStack.Screen
        name="Menu"
        component={TabMenuScreen}
        options={{ headerTitle: 'Menu page' }}
      />
      <TabMenuStack.Screen
        name="Settings"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabMenuStack.Navigator>
  );
  }*/

/* export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
    );
  } */