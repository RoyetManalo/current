import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Header from './components/Header';

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
