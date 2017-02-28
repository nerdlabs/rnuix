// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DemoTile from '../../organisms/demo-tile';

export default function FullScreenDemo(props) {
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
