// @flow
import React from 'react';
import {
    Platform,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';
import type Children from 'react-native';

type TouchableProps = typeof TouchableNativeFeedback & typeof TouchableOpacity & {
    children?: Children,
    style?: StyleSheet.Style,
    touchableStyle?: StyleSheet.Style,
};

export default function Touchable(
    {
        children,
        style,
        touchableStyle,
        ...props
    }: TouchableProps,
) {
    const Touchable = Platform.OS === 'android'
        ? TouchableNativeFeedback
        : TouchableOpacity;

    return (
        <Touchable style={touchableStyle} {...props}>
            <View style={style}>
                {children}
            </View>
        </Touchable>
    );
}
