// @flow
import React, { Component } from 'react';

import type { Component as ComponentT } from '../type-definitions';
import Navigator from './components/containers/navigator';

import ComponentList from './components/scenes/component-list';
import Demo from './components/scenes/demo';
import FullScreenDemo from './components/scenes/full-screen-demo';

const routes = {
    list: ComponentList,
    demo: Demo,
    fullScreen: FullScreenDemo,
};

export default (components: ComponentT[] = []) => () =>
    class App extends Component {
        render() {
            return (
                <Navigator
                    routes={routes}
                    initialRoute={{ key: 'list', params: { components } }}
                />
            );
        }
    };
