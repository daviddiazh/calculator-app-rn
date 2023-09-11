/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {styles} from './src/styles/app-styles';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;
