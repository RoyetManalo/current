import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import ArchiveScreen from '../screens/ArchiveScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5Icon name="home" color={'#1D1D1D'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5Icon name="plus" color={'#1D1D1D'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5Icon name="archive" color={'#1D1D1D'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
