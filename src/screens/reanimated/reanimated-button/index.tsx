import withLayout from 'components/hocs/with-layout'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './components/button'

const ReanimatedButtonScreen = (): JSX.Element => {
    const [loading, setLoading] = React.useState<boolean>(false)

    const handleOnPress = (): void => {
        if (!loading) {
            setLoading(true)
            setTimeout(() => setLoading(false), 5000)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonRow}>
                <Button title="Click here" loading={loading} onPress={handleOnPress} />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Click here" type="outlined" loading={loading} onPress={handleOnPress} />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Confirm" loading={loading} onPress={handleOnPress} color="blue" />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Confirm" type="outlined" loading={loading} onPress={handleOnPress} color="blue" />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Sign Up" loading={loading} onPress={handleOnPress} color="red" />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Sign Up" type="outlined" loading={loading} onPress={handleOnPress} color="red" />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Login" loading={loading} onPress={handleOnPress} color="purple" />
            </View>
            <View style={styles.buttonRow}>
                <Button title="Login" type="outlined" loading={loading} onPress={handleOnPress} color="purple" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 25,
    },
    buttonRow: {
        paddingVertical: 12,
    },
})

export default withLayout(ReanimatedButtonScreen)
