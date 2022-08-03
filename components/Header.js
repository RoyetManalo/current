import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Current</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1D1D1D',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 20,
  },
});

export default Header;
