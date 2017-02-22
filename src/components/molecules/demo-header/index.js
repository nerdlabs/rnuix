// @flow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../atoms/icon';

export type DemoHeaderProps = {
    isFullScreen?: boolean,
    onEnterFullScreen?: () => void,
    onExitFullScreen?: () => void,
    title: string,
};

export default (
    {
        isFullScreen,
        onEnterFullScreen,
        onExitFullScreen,
        title,
    }: DemoHeaderProps
) => (
    <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
                <Icon name="edit" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={isFullScreen ? onExitFullScreen : onEnterFullScreen}
            >
                <Icon name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'} />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'lightgray',
    },
    title: {
        fontSize: 16,
        lineHeight: 16,
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        marginLeft: 10,
    },
});
