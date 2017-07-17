// @flow
import { AppRegistry } from 'react-native';
import createApp from './src';
import components from './components';

const App = createApp(components);

AppRegistry.registerComponent('rnuix', () => App);

export default App;
