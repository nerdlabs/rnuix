// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors, mixins } from '../../../themes';
import DemoRenderer, { type DemoRendererProps } from '../../atoms/demo-renderer';
import DemoHeader, { type DemoHeaderProps } from '../../molecules/demo-header';

export type DemoTileProps = DemoHeaderProps &
    DemoRendererProps & {
        onExitFullScreen?: () => void,
        style?: StyleSheet.Style,
    };

export default function DemoTile({
    render,
    isFullScreen = false,
    hideHeader = false,
    onEnterFullScreen,
    style,
    title,
    navigation,
}: DemoTileProps) {
    return (
        <View style={[isFullScreen ? null : styles.container, style]}>
            {isFullScreen
                ? null
                : <DemoHeader
                      onEnterFullScreen={onEnterFullScreen}
                      title={title}
                  />}
            <DemoRenderer
                render={render}
                isFullScreen={isFullScreen}
                navigation={navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 3,
        ...mixins.elevation(2),
    },
});
