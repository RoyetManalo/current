import React, {useEffect} from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Archive = ({item}) => {
  const {height, width} = Dimensions.get('window');
  const itemWidth = (width - 15) / 2;
  console.log(item.id);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/babe.jpg')}
        style={styles.image}
        resizeMode={'contain'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
  },
  image: {
    // flexDirection: 'row',
    width: 110,
    height: 140,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default Archive;
