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
import ScrollViewExampleDont from "./src/screens/don't/scroll_view_example_dont";
import ViewExampleDont from "./src/screens/don't/view_example_dont";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Do example  */}
        <Stack.Screen name="ViewExample" component={ViewExample} />
        <Stack.Screen name="ScrollViewExample" component={ScrollViewExample} />
        {/* Don't example  */}
        {/*<Stack.Screen name="ScrollViewExample" component={ViewExampleDont} />*/}
        {/*<Stack.Screen*/}
        {/*  name="ScrollViewExample"*/}
        {/*  component={ScrollViewExampleDont}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
