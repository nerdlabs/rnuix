// @flow
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DemoTile from '../../organisms/demo-tile';
import type { Component as ComponentT } from '../../../../type-definitions';

export default function Demo(props: ComponentT) {
    return (
        <View style={styles.scene}>
            {props.demos.map((demo, i) => (
                <DemoTile
                    key={i}
                    style={styles.demo}
                    title={demo.title}
                    render={demo.render}
                    onEnterFullScreen={() => props.navigate('fullScreen', demo)}
                    onExitFullScreen={() => props.navigate('demo', props)}
                />
            ))}
        </View>
    );
}

Demo.navigationOptions = {
    header: {
        title: ({ scene: { route: { params } } }) => params.displayName,
    },
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        padding: 10,
        backgroundColor: 'gray',
    },
    demo: {
        marginBottom: 10,
    },
});
