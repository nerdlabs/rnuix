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
};

export default function Touchable(
    {
        children,
        style,
        ...props
    }: TouchableProps,
) {
    const useNativeFeedback = Platform.OS === 'android';
    const Touchable = useNativeFeedback
        ? TouchableNativeFeedback
        : TouchableOpacity;

    return (
        <Touchable style={useNativeFeedback ? null : style} {...props}>
            <View style={useNativeFeedback ? style : null}>
                {children}
            </View>
        </Touchable>
    );
}
