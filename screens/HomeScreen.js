import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default HomeScreen;
