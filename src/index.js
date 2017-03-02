// @flow
import React, { Component } from 'react';

import Navigator from './components/containers/navigator';

import Demo from './components/scenes/demo';
import FullScreenDemo from './components/scenes/full-screen-demo';
import ComponentList from './components/scenes/component-list';

import components from '../components';

const routes = {
    list: ComponentList,
    demo: Demo,
    fullScreen: FullScreenDemo,
};

const initialRoute = { key: 'list', params: { components } };

class App extends Component {
    render() {
        return <Navigator routes={routes} initialRoute={initialRoute} />;
    }
}

export default () => App;
