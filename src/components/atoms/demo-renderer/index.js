// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ({ isFullScreen, render }) => (
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
