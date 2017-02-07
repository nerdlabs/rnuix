// @flow
import React, { Component } from 'react';
import Demo from './components/scenes/demo';
import FullScreenDemo from './components/scenes/full-screen-demo';
import ComponentList from './components/scenes/component-list';

import components from '../components';

class App extends Component {
  render() {
    return (
      <ComponentList components={components} />
    );
  }
}

export default () => App;
