// @flow
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DemoTile from '../../organisms/demo-tile';

export default class Demo extends Component {
  render() {
    return (
      <View style={styles.scene}>
        <DemoTile
          style={styles.demo}
          title="Basic button"
          demo={() => (<Text>Demo</Text>)}
        />
        <DemoTile
          style={styles.demo}
          title="Large button"
          demo={() => (<Text>Demo</Text>)}
        />
      </View>
    );
  }
}

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
