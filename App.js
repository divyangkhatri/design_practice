/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewExample from './src/screens/do/view_example';
import ScrollViewExample from './src/screens/do/scroll_view_example';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ViewExample" component={ViewExample} />
        <Stack.Screen name="ScrollViewExample" component={ScrollViewExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
