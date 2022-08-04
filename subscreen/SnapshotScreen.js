import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RNFS from 'react-native-fs';
import dateFormat, {masks} from 'dateformat';

const now = new Date();

const SnapshotScreen = ({navigation, route}) => {
  const {user, path} = route.params;

  const saveImage = () => {
    const imagePath = path;
    const randomNum = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const date = dateFormat(now, 'dd-mm-yyyy');
    const newImagePath =
      RNFS.ExternalDirectoryPath + `/image-${date}-${randomNum}.jpg`; // dont use :
    console.log(imagePath);
    console.log(newImagePath);
    RNFS.moveFile(imagePath, newImagePath)
      .then(() => {
        // console.log('Image Move', imagePath, '--to--', newImagePath);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: 'file://' + path,
      }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}>
      <FontAwesome5Icon
        name="arrow-left"
        size={30}
        color="#000"
        style={styles.back}
        onPress={() => navigation.navigate('Camera')}
      />
      <FontAwesome5Icon
        name="share"
        size={30}
        color="#000"
        style={styles.send}
        onPress={saveImage}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  send: {
    position: 'absolute',
    bottom: 20,
    right: 15,
  },

  image: {
    width: 400,
    height: 800,
  },
});
export default SnapshotScreen;
