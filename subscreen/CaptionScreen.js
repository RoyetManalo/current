import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../global';

const CaptionScreen = ({navigation, route}) => {
  const {path} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageCaption}>
        <Image
          source={{
            uri: 'file://' + path,
          }}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder={'Add a caption'}
            placeholderTextColor={'#1d1d1d'}
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        {/* <Button title="Post" style={styles.button} color={colors.primary} /> */}
        <Button title="Cancel" style={styles.button} color={'red'} />
      </View>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  imageCaption: {
    flex: 2,
    flexDirection: 'row',
  },
  image: {
    width: wp('25%'),
    height: hp('25%'),
    flex: 1,
  },
  inputContainer: {flex: 2},
  input: {
    height: hp('25%'),
    marginHorizontal: 12,
    // borderWidth: 1,
    padding: 10,
    color: '#1D1D1D',
  },
  buttons: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'green',
  },
  button: {
    paddingVertical: 20,
  },
});
export default CaptionScreen;
