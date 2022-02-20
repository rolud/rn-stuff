import * as React from 'react'
import Animated, {
    interpolate,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'
import Svg, { Circle, G } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

interface CircleLoaderProps {
    size?: number
    width?: number
    color?: string
}
const CircleLoader = ({ size = 52, width = 5, color = 'teal' }: CircleLoaderProps): JSX.Element => {
    const circumference = React.useMemo(() => size * Math.PI, [size])

    const circleAnimatedValue = useSharedValue(0)
    const rotationAnimatedValue = useSharedValue(360)

    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: circumference * circleAnimatedValue.value,
        }
    })

    const animatedStyle = useAnimatedStyle(() => {
        const rotation = interpolate(circleAnimatedValue.value, [0, 2], [360, 0])
        return {
            transform: [{ rotate: `${rotation}deg` }],
        }
    })

    React.useEffect(() => {
        circleAnimatedValue.value = withRepeat(withTiming(2, { duration: 2000 }), 100, false)
        rotationAnimatedValue.value = withRepeat(withTiming(360, { duration: 2000 }), 100)
    }, [circleAnimatedValue, rotationAnimatedValue])

    return (
        <Animated.View style={[{ height: size, width: size }, animatedStyle]}>
            <Svg viewBox={`0 0 ${size} ${size}`} height={size} width={size}>
                <G rotation={-90} origin={`${size / 2}, ${size / 2}`}>
                    <AnimatedCircle
                        cx={size / 2}
                        cy={size / 2}
                        r={(size * 0.9) / 2}
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={width}
                        strokeDasharray={circumference}
                        animatedProps={animatedProps}
                    />
                </G>
            </Svg>
        </Animated.View>
    )
}

export default CircleLoader
