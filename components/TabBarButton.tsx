import { StyleSheet, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { icon } from '../constants/icons'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { useAnimatedStyle } from 'react-native-reanimated';
import { interpolate } from 'react-native-reanimated';

interface TabBarButtonProps {
    onPress: () => void;
    onLongPress: () => void;
    isFocused: boolean;
    routeName: string;
    color: string;
    label: string;
}

const TabBarButton = ({
    onPress,
    onLongPress,
    isFocused,
    routeName,
    color,
    label
}: TabBarButtonProps) => {
    const scale = useSharedValue(0)

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, { duration: 350 })
    }, [scale, isFocused]);

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0])

        return { opacity };
    })

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

        const top = interpolate(scale.value, [0, 1], [0, 9]);
        return ({
            transform: [{
                scale: scaleValue
            }],
            top
        }
        )

    })

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabIcon}
        >
            <Animated.View style={animatedIconStyle}>
                {icon[routeName]({
                    color: isFocused ? "#fff" : "#808080",
                })}
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? "#673ab7" : "#808080", fontSize: 12, fontFamily: 'Inter-Bold' }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    )
}

export default TabBarButton

const styles = StyleSheet.create({
    tabIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }
})