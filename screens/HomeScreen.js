import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client/react';
import {GET_USERS} from '../queries/UserQueries';

const HomeScreen = () => {
  const {loading, error, data} = useQuery(GET_USERS);
  // Get Feed

  if (loading) return console.log('loading');
  if (error) return console.log(error);

  return (
    <>
      {!loading && !error && (
        <View>
          <Text style={styles.text}>Home</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});

export default HomeScreen;
