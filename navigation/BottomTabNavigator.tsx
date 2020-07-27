import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStack } from '../navigation/CreateStack'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabMenuScreen from '../screens/TabMenuScreen';
import TabSettingsScreen from '../screens/TabSettingsScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

function TabBarIcon(props: { name: string; color: any }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// const TabSettingsStack = createStack([{ Screen: TabSettingsScreen, config: { routeName: 'Settings' } }], {}, {})
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


export function createTabNavigator(screens: any, navigationOptions: any, stackConfig: any) {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator screenOptions={stackConfig}>
      {
        screens.map((each: any) => {
          let { config: { routeName, buttonTitle, icon }, Screen } = each;
          return <BottomTab.Screen name={routeName} component={Screen} 
          options={
            { tabBarLabel: buttonTitle, 
              tabBarIcon: () => <TabBarIcon name={icon} color="black" />
            } } 
          key={routeName} />
        })
      }
    </BottomTab.Navigator>
  )
}



// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


/* function TabMenuNavigator() {
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