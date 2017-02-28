// @flow
import React, { Component } from 'react';
import { BackAndroid, NavigationExperimental, Platform } from 'react-native';

import type {
    NavigationRoute,
    NavigationSceneRendererProps,
    NavigationState,
} from 'NavigationTypeDefinition';

const { CardStack, Header, StateUtils } = NavigationExperimental;

type SceneProps = NavigationSceneRendererProps & {
    scene: {
        route: {
            params?: Object,
        },
    },
};

export type NavigationOptions = {
    direction?: 'horizontal' | 'vertical',
    header?: {
        left?: ReactElement<*>,
        right?: ReactElement<*>,
        title?: string | ((params: any) => string) | ReactElement<*>,
    },
};

export type Scene<T> = ReactClass<T> & {
    navigationOptions: NavigationOptions,
};

export type Routes = {
    [key: string]: Scene<*>,
};

export type NavigatorProps = {
    routes: Routes,
    initialRoute: NavigationRoute,
};

type NavigatorState = {
    navigationState: NavigationState,
};

export default class Navigator extends Component {
    props: NavigatorProps;

    state: NavigatorState;

    constructor(props: NavigatorProps) {
        super(props);

        this.state = {
            navigationState: {
                index: 0,
                routes: [props.initialRoute],
            },
        };
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onPopRoute);
    }

    componentWillUnmount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onPopRoute);
    }

    onNavigationChange = (type: 'push' | 'pop', key?: string, params?: any) => {
        let { navigationState } = this.state;

        switch (type) {
            case 'push':
                navigationState = StateUtils.push(navigationState, {
                    key,
                    params,
                });
                break;

            case 'pop':
                navigationState = StateUtils.pop(navigationState);
                break;
        }

        if (this.state.navigationState !== navigationState) {
            this.setState({ navigationState });
        }
    };

    onPushRoute = (route: string, params?: any) =>
        this.onNavigationChange('push', route, params);

    onPopRoute = () => {
        if (this.state.navigationState.index === 0) {
            return false;
        }

        this.onNavigationChange('pop');
        return true;
    };

    renderScene = (sceneProps: SceneProps) => {
        const Scene = this.props.routes[sceneProps.scene.route.key];

        return sceneProps.scene.route.params
            ? <Scene
                  {...sceneProps.scene.route.params}
                  navigate={this.onPushRoute}
              />
            : <Scene navigate={this.onPushRoute} />;
    };

    renderHeader = (sceneProps: SceneProps) => {
        const { navigationOptions } = this.props.routes[
            sceneProps.scene.route.key
        ];

        if (!navigationOptions || !navigationOptions.header) {
            return null;
        }

        return (
            <Header
                {...sceneProps}
                onNavigateBack={this.onPopRoute}
                renderLeftComponent={this.renderLeftComponent}
                renderRightComponent={this.renderRightComponent}
                renderTitleComponent={this.renderTitleComponent}
            />
        );
    };

    renderLeftComponent = (sceneProps: SceneProps) => {
        const {
            navigationOptions,
        } = this.props.routes[sceneProps.scene.route.key];

        return navigationOptions &&
            navigationOptions.header &&
            navigationOptions.header.left
            ? navigationOptions.header.left(sceneProps)
            : Header.defaultProps.renderLeftComponent(sceneProps);
    };

    renderRightComponent = (sceneProps: SceneProps) => {
        const {
            navigationOptions,
        } = this.props.routes[sceneProps.scene.route.key];

        return navigationOptions &&
            navigationOptions.header &&
            navigationOptions.header.right
            ? navigationOptions.header.right(sceneProps)
            : Header.defaultProps.renderRightComponent(sceneProps);
    };

    renderTitleComponent = (sceneProps: SceneProps) => {
        const {
            navigationOptions,
        } = this.props.routes[sceneProps.scene.route.key];

        const Title = navigationOptions &&
            navigationOptions.header &&
            navigationOptions.header.title
            ? typeof navigationOptions.header.title === 'function'
                  ? navigationOptions.header.title(sceneProps)
                  : navigationOptions.header.title
            : Header.defaultProps.renderTitleComponent(sceneProps);

        return typeof Title === 'function'
            ? <Title />
            : <Header.Title>
                  {typeof Title === 'string' ? Title : ''}
              </Header.Title>;
    };

    render() {
        const scene = this.state.navigationState.routes[
            this.state.navigationState.index
        ];

        const {
            navigationOptions,
        } = this.props.routes[scene.key];

        const direction = (navigationOptions && navigationOptions.direction) ||
            'horizontal';

        return (
            <CardStack
                direction={direction}
                enableGestures={Platform.OS === 'ios'}
                onNavigateBack={this.onPopRoute}
                navigationState={this.state.navigationState}
                renderScene={this.renderScene}
                renderHeader={this.renderHeader}
            />
        );
    }
}
