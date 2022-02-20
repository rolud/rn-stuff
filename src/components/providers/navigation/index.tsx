import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, ReanimatedButtonScreen, ReanimatedLoaderScreen, ReanimatedMainScreen } from 'screens'
import * as React from 'react'

const Stack = createNativeStackNavigator()

const NavigationProvider = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: true }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ReanimatedMain" component={ReanimatedMainScreen} />
                <Stack.Screen name="ReanimatedLoader" component={ReanimatedLoaderScreen} />
                <Stack.Screen name="ReanimatedButton" component={ReanimatedButtonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationProvider
