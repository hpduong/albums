//index.android.js place code in here for android


// 1. Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// 2. create Component - js function that can be placed on mobile screen of device
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  );
};


// 3. render it to the device - renders component to screen and takes return to output
AppRegistry.registerComponent('albums', () => App);
