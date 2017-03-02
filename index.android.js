// @flow
import { AppRegistry } from 'react-native';
import createApp from './src';
import components from './components';

AppRegistry.registerComponent('rnuix', createApp(components));
