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

type StyledTouchableNativeFeedbackProps = typeof TouchableNativeFeedback & {
    children?: Children,
    style?: StyleSheet.Style,
};

function StyledTouchableNativeFeedback(
    {
        children,
        style,
        ...props
    }: StyledTouchableNativeFeedbackProps,
) {
    return (
        <TouchableNativeFeedback {...props}>
            <View style={style}>
                {children}
            </View>
        </TouchableNativeFeedback>
    );
}

type TouchableProps = typeof TouchableNativeFeedback & typeof TouchableOpacity & {
    children?: Children,
    disabled?: boolean,
    onPress?: () => void,
};

export default function Touchable(
    {
        children,
        disabled,
        onPress,
        ...props
    }: TouchableProps,
) {
    const useNativeFeedback = Platform.OS === 'android';
    const Touchable = useNativeFeedback
        ? StyledTouchableNativeFeedback
        : TouchableOpacity;
    const Wrapper = disabled || typeof onPress !== 'function'
        ? View
        : Touchable;

    return (
        <Wrapper onPress={onPress} {...props}>
            {children}
        </Wrapper>
    );
}
