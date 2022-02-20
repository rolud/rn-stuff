import withLayout from 'components/hocs/with-layout'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import CircleLoader from './components/circle-loader'

const ReanimatedLoaderScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.contentRow}>
                <CircleLoader />
            </View>

            <View style={styles.contentRow}>
                <CircleLoader size={100} color="red" />
            </View>

            <View style={styles.contentRow}>
                <CircleLoader size={200} width={20} color="pink" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 25,
    },
})

export default withLayout(ReanimatedLoaderScreen)
