// @flow
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DemoTile from '../../organisms/demo-tile';

export default () => (
  <View style={styles.scene}>
    <DemoTile
      style={styles.demo}
      title="Basic button"
      render={() => (<Text>Demo</Text>)}
    />
    <DemoTile
      style={styles.demo}
      title="Large button"
      render={() => (<Text>Demo</Text>)}
    />
  </View>
);

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
