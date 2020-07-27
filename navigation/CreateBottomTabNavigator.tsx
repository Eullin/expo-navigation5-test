import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';


function TabBarIcon(props: { name: string; color: any }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const tabNavConfig = {
  activeTintColor: 'yellow',
  style: {
    backgroundColor: 'black',
    borderTopColor: 'yellow',
  },
  showLabel: true,
  labelStyle: {
    fontSize: 12,
  },
  adaptive: false,
}

export function createTabNavigator(screens: any, navigationOptions: any, stackConfig: any) {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator tabBarOptions={tabNavConfig}>
      {
        screens.map((each: any) => {
          let { config: { routeName, buttonTitle, icon }, Screen } = each;
          return <BottomTab.Screen name={routeName} component={Screen}
            options={
              {
                tabBarLabel: buttonTitle,
                tabBarIcon: () => <TabBarIcon name={icon} color="yellow" />
              }}
            key={routeName} />
        })
      }
    </BottomTab.Navigator>
  )
}

