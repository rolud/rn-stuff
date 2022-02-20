import NavigateItem from 'components/atomics/atoms/navigate-item'
import withLayout from 'components/hocs/with-layout'
import * as React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const HomeScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title1}>React Native</Text>
                <Text style={styles.title2}>Stuff</Text>
                <Text style={styles.sign}>rolud</Text>
            </View>
            <NavigateItem label="Reanimated" screen="ReanimatedMain" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title1: {
        fontSize: 30,
        fontWeight: '700',
        color: 'teal',
        textAlign: 'center',
    },
    title2: {
        fontSize: 52,
        fontWeight: '800',
        color: 'teal',
        letterSpacing: 13,
        textAlign: 'center',
        right: Platform.OS === 'ios' ? -6.5 : 0,
    },
    sign: {
        fontSize: 16,
        fontWeight: '400',
        color: 'teal',
        letterSpacing: 34,
        textAlign: 'center',
        right: Platform.OS === 'ios' ? -17 : 0,
    },
})

export default withLayout(HomeScreen)
