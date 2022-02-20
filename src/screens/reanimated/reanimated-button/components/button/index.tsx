import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import CircleLoader from '../../../reanimate-loader/components/circle-loader'

interface ButtonProps {
    title: string
    type?: 'solid' | 'outlined'
    color?: string
    loading?: boolean
    onPress?: () => void
}
const Button = ({ title, type = 'solid', color = 'teal', loading = false, onPress }: ButtonProps): JSX.Element => {
    const [buttonWidth, setButtonWidth] = React.useState<number>(0)

    const buttonAnimatedValue = useSharedValue(1)
    const opacityAnimatedValue = useSharedValue(1)

    const buttonAnimatedStyle = useAnimatedStyle(() => {
        const width = interpolate(buttonAnimatedValue.value, [0, 1], [48, buttonWidth])
        const borderRadius = interpolate(buttonAnimatedValue.value, [0, 1], [24, 20])
        return {
            width: width !== 0 ? width : undefined,
            borderRadius,
        }
    })

    const buttonContentAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacityAnimatedValue.value,
        }
    })

    React.useEffect(() => {
        buttonAnimatedValue.value = withTiming(loading ? 0 : 1, { duration: 300 })
        opacityAnimatedValue.value = withTiming(loading ? 0 : 1, { duration: 200 })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const buttonBackgroundColor = React.useMemo(() => {
        return type === 'solid' ? color : 'transparent'
    }, [type, color])

    const buttonBorderWitdh = React.useMemo(() => {
        return type === 'solid' ? 0 : 1
    }, [type])

    const buttonTitleColor = React.useMemo(() => {
        return type === 'solid' ? '#ffffff' : color
    }, [type, color])

    return (
        <View
            style={styles.container}
            onLayout={(event): void => {
                setButtonWidth(event.nativeEvent.layout.width)
            }}>
            <Animated.View
                style={[
                    styles.buttonBack,
                    { backgroundColor: buttonBackgroundColor, borderWidth: buttonBorderWitdh, borderColor: color },
                    buttonAnimatedStyle,
                ]}>
                <TouchableOpacity style={styles.buttonTouchable} onPress={onPress}>
                    {loading ? (
                        <CircleLoader color={buttonTitleColor} size={34} width={3} />
                    ) : (
                        <Animated.View style={[styles.buttonContent, buttonAnimatedStyle, buttonContentAnimatedStyle]}>
                            <Text style={[styles.buttonTitle, { color: buttonTitleColor }]}>{title}</Text>
                        </Animated.View>
                    )}
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonBack: {
        borderRadius: 24,
    },
    buttonTouchable: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        flexDirection: 'row',
    },
    buttonTitle: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        includeFontPadding: false,
    },
})

export default Button
