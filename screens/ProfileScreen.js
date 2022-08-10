import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';
import {useQuery} from '@apollo/client/react';
import {GET_USERS} from '../queries/UserQueries';
import Post from '../components/Post';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.partners}>
        <View>
          <Image
            source={require('../assets/me.jpg')}
            style={styles.partnersImage}
            resizeMode={'contain'}
          />
          <Text style={styles.text}>You</Text>
        </View>

        <FontAwesome5Icon
          name="heart"
          size={20}
          color={'red'}
          style={styles.heart}
        />

        <View>
          <Image
            source={require('../assets/babe.jpg')}
            style={styles.partnersImage}
            resizeMode={'contain'}
          />
          <Text style={styles.text}>Your Love One</Text>
        </View>
      </View>
      <Text style={styles.callSign}>Call Sign : Babe</Text>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          <FontAwesome5Icon
            name="user"
            size={20}
            color={'red'}
            style={{paddingRight: 20}}
          />
          Royet Manalo
        </Text>
        <Text style={styles.infoText}>
          <FontAwesome5Icon
            name="birthday-cake"
            size={20}
            color={'red'}
            style={{paddingRight: 20}}
          />
          July 20, 1998
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#1d1d1d',
    fontSize: 25,
    marginTop: 10,
  },
  partners: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
    // backgroundColor: '#1d1d1d',
  },
  partnersImage: {
    width: 120,
    height: 120,
    marginHorizontal: 20,
    borderRadius: 200 / 2,
  },

  heart: {
    // flex: 1,
    marginTop: 50,
  },
  text: {
    color: '#1d1d1d',
    textAlign: 'center',
    marginTop: 10,
  },
  callSign: {
    color: '#1d1d1d',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  info: {
    marginTop: 10,
  },

  infoText: {
    color: '#1d1d1d',
    fontSize: 20,
  },
});

export default ProfileScreen;
