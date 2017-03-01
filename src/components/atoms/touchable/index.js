// @flow
import React from 'react';

import {
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from 'react-native';

import type { Component as ComponentT } from '../../../../type-definitions';

const Touchable = Platform.OS === 'android'
    ? TouchableNativeFeedback
    : TouchableOpacity;

export default (
    {
        children,
        style,
        ...props
    }: ComponentT,
) => {
    return (
        <Touchable {...props}>
            <View style={style}>
                {children}
            </View>
        </Touchable>
    );
};
