import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import {useQuery} from '@apollo/client/react';
import {GET_USERS} from '../queries/UserQueries';
import Post from '../components/Post';
import colors from '../global';
import Header from '../components/Header';

console.log(colors);

const HomeScreen = () => {
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
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={feed}
        renderItem={({item}) => <Post path={item} key={item.id} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'gainsboro',
  },
});

export default HomeScreen;
