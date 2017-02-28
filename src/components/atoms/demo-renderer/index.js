// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../../themes';

export type DemoRendererProps = {
    isFullScreen?: boolean,
    render: () => ReactElement<*>,
};

export default (
    {
        isFullScreen,
        render,
    }: DemoRendererProps,
) => (
    <View style={[styles.demo, isFullScreen ? styles.fullScreen : styles.tile]}>
        {render()}
    </View>
);

const styles = StyleSheet.create({
    demo: {
        padding: 10,
        backgroundColor: colors.white,
    },
    fullScreen: {
        flex: 1,
        padding: 0,
    },
    tile: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
});
