// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../../../themes';
import Touchable from '../../atoms/touchable';

export type ComponentRowProps = {
    title: string,
    description?: string,
    onPress?: () => void,
    style?: StyleSheet.Style,
};

export default (
    {
        title,
        description,
        onPress,
        style,
    }: ComponentRowProps,
) => (
    <Touchable onPress={onPress} style={[styles.row, style]}>
        <Text style={styles.displayName}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
    </Touchable>
);

const styles = StyleSheet.create({
    row: {
        backgroundColor: colors.white,
        borderBottomColor: colors.silver,
        borderBottomWidth: 1,
        padding: 10,
    },
    displayName: {
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    description: {
        color: colors.gray,
        fontSize: 12,
    },
});
