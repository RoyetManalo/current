import React from 'react';
import CameraScreen from '../subscreen/CameraScreen';
import SnapshotScreen from '../subscreen/SnapshotScreen';
import {createStackNavigator} from '@react-navigation/stack';

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
    </CreateStack.Navigator>
  );
};

export default CreateScreen;
