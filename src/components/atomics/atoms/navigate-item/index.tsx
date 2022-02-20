import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NavigateItem = ({ label, screen }: { label: string; screen: string }): JSX.Element => {
    const navigation = useNavigation()

    const handleOnPress = (): void => {
        navigation.navigate(screen as never)
    }

    return (
        <TouchableOpacity onPress={handleOnPress} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderBottomColor: 'teal',
        borderBottomWidth: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
    },
    label: { fontSize: 18 },
})

export default NavigateItem
