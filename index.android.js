//index.android.js place code in here for android


// 1. Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// 2. create Component - js function that can be placed on mobile screen of device
const App = () => {
  return (
    <Text> Hello World, Henry</Text>
  );
};


// 3. render it to the device - renders component to screen and takes return to output
AppRegistry.registerComponent('albums', () => App);
