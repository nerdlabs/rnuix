// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import DemoHeader from '../../molecules/demo-header';
import DemoRenderer from '../../atoms/demo-renderer';

export default ({
  demo,
  isFullScreen,
  onEnterFullScreen,
  onExitFullScreen,
  style,
  title,
}) => (
  <View style={[styles.container, style]}>
    <DemoHeader
      isFullScreen={isFullScreen}
      onEnterFullScreen={onEnterFullScreen}
      onExitFullScreen={onExitFullScreen}
      title={title}
    />
    <DemoRenderer render={demo} isFullScreen={isFullScreen} />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});
