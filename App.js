// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import {  View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Tools ادوات صيانة الجوال'} />
    <AlbumList />
  </View>
);

// Render it to the device
export default App;