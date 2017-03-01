// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../themes';

export type DemoRendererProps = {
    isFullScreen?: boolean,
    render: () => React.Element<*>,
};

export default function DemoRenderer(
    {
        isFullScreen,
        render,
    }: DemoRendererProps,
) {
    return (
        <View
            style={[
                styles.demo,
                isFullScreen ? styles.fullScreen : styles.tile,
            ]}
        >
            {render()}
        </View>
    );
}

const styles = StyleSheet.create({
    demo: {
        backgroundColor: colors.white,
        padding: 10,
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
