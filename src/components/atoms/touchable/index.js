// @flow
import React from 'react';
import {
    Platform,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';

type StyledTouchableNativeFeedbackProps = typeof TouchableNativeFeedback & {
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

type TouchableProps = typeof TouchableNativeFeedback & typeof TouchableOpacity;

export default function Touchable(
    {
        children,
        disabled,
        onLongPress,
        onPress,
        ...props
    }: TouchableProps,
) {
    const Touchable = Platform.OS === 'android'
        ? StyledTouchableNativeFeedback
        : TouchableOpacity;
    const Wrapper = !disabled && (onLongPress || onPress) ? Touchable : View;

    return (
        <Wrapper onLongPress={onLongPress} onPress={onPress} {...props}>
            {children}
        </Wrapper>
    );
}
