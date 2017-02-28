// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

export type DemoRendererProps = {
    isFullScreen?: boolean,
    render: () => ReactClass<*>,
};

export default (
    {
        isFullScreen,
        render,
    }: DemoRendererProps,
) => (
    <View style={[styles.demo, isFullScreen && styles.fullScreen]}>
        {render()}
    </View>
);

const styles = StyleSheet.create({
    demo: {
        padding: 10,
        backgroundColor: 'white',
    },
    fullScreen: {
        flex: 1,
        padding: 0,
    },
});
