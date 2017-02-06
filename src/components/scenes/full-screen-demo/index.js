// @flow
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DemoTile from '../../organisms/demo-tile';

export default () => (
  <DemoTile
    style={styles.demo}
    title="Full screen demo"
    demo={() => (<Text>Demo</Text>)}
    isFullScreen
  />
);

const styles = StyleSheet.create({
  demo: {
    flex: 1,
  },
});
