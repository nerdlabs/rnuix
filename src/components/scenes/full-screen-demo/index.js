// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DemoTile from '../../organisms/demo-tile';
import type { Component } from '../../../../type-definitions';

export default function FullScreenDemo(props: Component) {
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
    header: {
        title: ({ scene: { route: { params } } }) => params.title,
    },
};

const styles = StyleSheet.create({
    demo: {
        flex: 1,
    },
});
