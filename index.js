/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (!__DEV__) {
  console.log = () => null;
  console.warn = () => null;
} else {
  LogBox.ignoreAllLogs(true);
}
AppRegistry.registerComponent(appName, () => App);
