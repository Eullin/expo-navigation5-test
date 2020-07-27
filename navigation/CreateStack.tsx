import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


export function createStack(screens: any, navigationOptions: any, defaultNavigationOptions: any) {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={defaultNavigationOptions}>
			{
				screens.map((each: any) => {
					let { config: { routeName, buttonTitle }, Screen } = each;
					return <Stack.Screen name={routeName} component={Screen} options={{title: buttonTitle }} key={routeName} />
				})
			}
		</Stack.Navigator>
	)
}
