/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  useColorScheme,
} from 'react-native';
import React from 'react';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './src/components/MainScreen/MainScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <MainScreen></MainScreen>
  );
};

export default App;
