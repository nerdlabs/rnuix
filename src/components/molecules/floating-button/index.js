// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { colors, mixins } from '../../../themes';
import Icon, { type IconProps } from '../../atoms/icon';
import Touchable, { type TouchableProps } from '../../atoms/touchable';

export type FloatingButtonProps = TouchableProps &
    IconProps & {
        buttonStyle?: StyleObj,
    };

export default function FloatingButton({
    style,
    buttonStyle,
    name,
    tintColor = colors.white,
    ...props
}: FloatingButtonProps) {
    return (
        <View style={[styles.container, styles.rounded, style]}>
            <Touchable
                activeOpacity={0.7}
                borderless
                style={[styles.button, styles.rounded, buttonStyle]}
                {...props}
            >
                <Icon name={name} tintColor={tintColor} />
            </Touchable>
        </View>
    );
}

const styles = StyleSheet.create({
    rounded: {
        borderRadius: 28,
        width: 56,
        height: 56,
    },
    container: {
        ...mixins.elevation(6),
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
    },
});
