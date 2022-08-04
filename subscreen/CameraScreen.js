import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CameraScreen = ({navigation}) => {
  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus();
      const microphonePermission = await Camera.getMicrophonePermissionStatus();

      if (cameraPermission === 'authorized') {
        console.log('authorized');
      }
      if (cameraPermission === 'denied') {
        console.log('determined');
      }
      if (cameraPermission === 'denied') {
        console.log('denied');
      }
    };

    const requestPermissions = async () => {
      const newCameraPermission = await Camera.requestCameraPermission();
      const newMicrophonePermission =
        await Camera.requestMicrophonePermission();

      if (newCameraPermission === 'authorized') {
        console.log('authorized');
      }
      if (newCameraPermission === 'denied') {
        console.log('denied');
      }
    };

    getPermissions();
    requestPermissions();
  });

  const devices = useCameraDevices();
  const device = devices.front;
  const isFocused = useIsFocused();

  const camera = useRef(null);

  const capture = async () => {
    const snapshot = await camera.current.takeSnapshot({
      quality: 85,
      skipMetadata: true,
    });
    const path = snapshot.path;
    console.log('capture');
    navigation.navigate('Snapshot', {
      user: 'jane',
      path,
    });
  };

  if (device == null) return null;
  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isFocused}
        ref={camera}
        photo={true}
      />
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="circle" size={70} color="#fff" onPress={capture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative'},
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    bottom: 30,
  },
});

export default CameraScreen;
