import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigation';

const App = () => (
  <>
    <StatusBar backgroundColor="#bcad8b"></StatusBar>
    <AppNavigator />
  </>
);

export default App;
