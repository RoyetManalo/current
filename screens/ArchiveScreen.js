import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import Archive from '../components/Archive';

const ArchiveScreen = () => {
  const feed = [
    {
      id: 1,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 2,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 3,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 4,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 5,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 6,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 7,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 8,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 9,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 10,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 11,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 12,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 13,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
    {
      id: 14,
      imagePath: '../assets/image-22-08-06-105922.jpg',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        numColumns={3}
        key={'_'}
        renderItem={({item}) => <Archive item={item} key={item.id} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    paddingHorizontal: 10,
  },
  text: {
    color: '#1d1d1d',
  },

  images: {},
});

export default ArchiveScreen;
