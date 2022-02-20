/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInsets } from 'components/hooks'
import * as React from 'react'
import { StatusBarProps, StyleSheet, useColorScheme, View, ViewStyle } from 'react-native'

export interface LayoutConfigs {
    statusBar?: StatusBarProps
    style?: ViewStyle
}

interface LayoutProviderProps extends LayoutConfigs {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    screenName: string
}

const LayoutProvider = ({ children, style }: LayoutProviderProps): JSX.Element => {
    const insets = useInsets()

    const isDarkMode = useColorScheme() === 'dark'

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor: isDarkMode ? '#444A71' : '#F0F0F0',
        },
    })
    return <View style={[styles.container, style]}>{children}</View>
}

export default LayoutProvider
