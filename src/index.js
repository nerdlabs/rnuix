// @flow
import React, { Component } from 'react';
import Demo from './components/scenes/demo';
import FullScreenDemo from './components/scenes/full-screen-demo';

class App extends Component {
  render() {
    return (
      <FullScreenDemo />
    );
  }
}

export default () => App;
