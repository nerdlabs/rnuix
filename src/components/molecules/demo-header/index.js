// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../themes';
import Icon from '../../atoms/icon';
import Touchable from '../../atoms/touchable';

export type DemoHeaderProps = {
    isFullScreen?: boolean,
    onEnterFullScreen?: () => void,
    onExitFullScreen?: () => void,
    title: string,
};

export default function DemoHeader(
    {
        isFullScreen,
        onEnterFullScreen,
        onExitFullScreen,
        title,
    }: DemoHeaderProps,
) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttons}>
                <Touchable
                    style={styles.button}
                    onPress={
                        isFullScreen ? onExitFullScreen : onEnterFullScreen
                    }
                >
                    <Icon
                        name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
                    />
                </Touchable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'stretch',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: colors.silverLight,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        fontSize: 14,
        color: colors.black,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
        padding: 5,
    },
});
