import NavigateItem from 'components/atomics/atoms/navigate-item'
import withLayout from 'components/hocs/with-layout'
import * as React from 'react'
import { View } from 'react-native'

const ReanimatedMainScreen = (): JSX.Element => {
    return (
        <View>
            <NavigateItem label="Loader" screen="ReanimatedLoader" />
        </View>
    )
}

export default withLayout(ReanimatedMainScreen)
