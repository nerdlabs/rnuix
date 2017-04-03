// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DemoTile from '../../organisms/demo-tile';
import type { Component } from '../../../../type-definitions';

export type Props = {
    navigation: {
        state: {
            params: Component,
        },
    },
};

export default function FullScreenDemo(
    { navigation: { state: { params: props } } }: Props,
) {
    return (
        <DemoTile
            style={styles.demo}
            title={props.title}
            render={props.render}
            isFullScreen
        />
    );
}

FullScreenDemo.navigationOptions = {
    title: ({ state: { params } }) => params.title,
};

const styles = StyleSheet.create({
    demo: {
        flex: 1,
    },
});
