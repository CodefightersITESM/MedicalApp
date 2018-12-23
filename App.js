import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import TestScreen from './src/components/screens/TestScreen.js';

// Register Screens //
Navigation.registerComponent(
  'medical-app.TestScreen',
  () => TestScreen
);

// Start App //
Navigation.startSingleScreenApp({
  screen: {
    screen: 'medical-app.TestScreen',
    title: 'Login'
  }
});