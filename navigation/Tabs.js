import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import ArchiveScreen from '../screens/ArchiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../global';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="home"
              color={focused ? colors.primary : '#1D1D1D'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="plus"
              color={focused ? colors.primary : '#1D1D1D'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{
          tabBarActiveTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="archive"
              color={focused ? colors.primary : '#1D1D1D'}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="user"
              color={focused ? colors.primary : '#1D1D1D'}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
