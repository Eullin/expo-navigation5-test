import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabTwoScreen from '../screens/TabTwoScreen';
import { configContext } from '../context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export function createStack(screens: any, navigationOptions: any, defaultNavigationOptions: object) {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={defaultNavigationOptions}>
			{
				screens.map((each: any) => {
					let { config: { routeName, props }, Screen } = each;
					return <Stack.Screen name={routeName} component={Screen} options={navigationOptions} key={routeName} />
				})
			}
		</Stack.Navigator>
	)
}

// Icon 


// Create stacks programatically 
export function getStack(data: any, screen: any, stackConfig: any, colors: any) {
	/*     const stack = createStack(data, stackConfig)
	 */
	const navigationOptions = createNavigationOptions(screen, colors)
	const stack = createStack(data, stackConfig, navigationOptions)
	return stack
}

// Create navigation options - that goes into options prop in Screen
export function createNavigationOptions(config: { buttonTitle: any; icon: any; }, colors: any) {
	if (!config) {
		return null
	}

	return {
		tabBarLabel: config.buttonTitle,
		tabBarIcon: (props: JSX.IntrinsicAttributes) => <TabBarIconWrapper icon={config.icon} colors={colors} {...props} />,
		/* 		tabBarOnPress: ({ navigation, defaultHandler }) => {
					defaultHandler(navigation)
		
					if (isFocusedRootScreen(navigation)) {
						EventRegister.emit('tabBarPressedOnRootScreen', {
							url: config.props.url,
						})
					}
				}, */
	}
}

/* export function createTabNavigator(screens: any, stackConfig: any, navigationOptions: any){
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
} */

