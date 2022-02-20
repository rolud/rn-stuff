import 'react-native-gesture-handler'
import * as React from 'react'
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import NavigationProvider from 'components/providers/navigation'

const App = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? '#444A71' : '#F6F6F6'}
            />
            <NavigationProvider />
        </SafeAreaProvider>
    )
}

export default App
