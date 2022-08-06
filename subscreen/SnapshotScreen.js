import React, {useState} from 'react';
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
import {useMutation} from '@apollo/client';
import {POST_IMAGE} from '../mutations/PostMutations';
import {cos} from 'react-native-reanimated';

const now = new Date();

const SnapshotScreen = ({navigation, route}) => {
  const {path} = route.params;
  const [imagePath, setImagePath] = useState('');
  console.log(path);

  const saveImage = () => {
    const imagePath = path;
    const randomNum = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const date = dateFormat(now, 'dd-mm-yyyy');
    const newImagePath =
      RNFS.ExternalDirectoryPath + `/image-${date}-${randomNum}.jpg`; // dont use :

    // convert file path to base64 string to prepare for sending in aws s3/ then decoded it on the server as a buffer
    RNFS.readFile(path, 'base64')
      .then(file => {
        console.log('FIle path is base64 now');
        setImagePath(file);
        postImage(file);
      })
      .catch(error => console.log(error));
  };

  const [postImage] = useMutation(POST_IMAGE, {
    variables: {
      imagePath,
    },
  });

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
        name="times"
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
