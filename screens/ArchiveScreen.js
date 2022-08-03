import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ArchiveScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ArchiveScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ArchiveScreen;
