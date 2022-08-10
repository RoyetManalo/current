import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../global';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Current</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // width: windowWidth,
    marginHorizontal: -10,
  },
  text: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 20,
  },
});

export default Header;
