import React from 'react';
import CameraScreen from '../subscreen/CameraScreen';
import SnapshotScreen from '../subscreen/SnapshotScreen';
import CaptionScreen from '../subscreen/CaptionScreen';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../global';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const CreateStack = createStackNavigator();

const CreateScreen = () => {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <CreateStack.Screen
        name="Snapshot"
        component={SnapshotScreen}
        options={{headerShown: false}}
      />
      <CreateStack.Screen
        name="Caption"
        component={CaptionScreen}
        options={{
          title: 'New Post',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerRight: () => (
            <FontAwesome5Icon
              name="check"
              size={18}
              color={'#1d1d1d'}
              style={{marginRight: 20}}
              onPress={() => alert('This is a button!')}
            />
          ),
        }}
      />
    </CreateStack.Navigator>
  );
};

export default CreateScreen;
