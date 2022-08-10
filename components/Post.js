import React, {useEffect} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Post = ({path}) => {
  console.log(path);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image source={require('../assets/me.jpg')} style={styles.userIcon} />
        <View style={{flex: 4}}>
          <Text style={{textAlign: 'center', color: '#1D1D1D'}}>
            Aug 06, 2022
          </Text>
          <Text style={{textAlign: 'center', color: '#1D1D1D'}}>
            10:00:00 AM
          </Text>
        </View>

        <FontAwesome5Icon
          name="ellipsis-h"
          size={30}
          color={'#1D1D1D'}
          style={{flex: 1, textAlign: 'right'}}
        />
      </View>
      <Image source={require('../assets/me.jpg')} style={styles.image} />
      <View style={styles.postFooter}>
        <View style={styles.reactions}>
          <FontAwesome5Icon name="heart" size={30} color={'#1D1D1D'} />
          <FontAwesome5Icon name="comment" size={30} color={'#1D1D1D'} />
        </View>
      </View>
      <View style={styles.caption}>
        <Text style={styles.captionText}>Selfie sa may batuhan</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  image: {
    width: wp('100%'),
    height: hp('60%'),
    marginVertical: 10,
    resizeMode: 'contain', // to get the right size when resizing
  },
  postHeader: {
    flex: 1,
    paddingHorizontal: wp('100%') * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: '#000',
  },
  postFooter: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  reactions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  caption: {
    flex: 1,
    alignSelf: 'stretch',
    paddingVertical: 10,
  },
  captionText: {
    color: '#1D1D1D',
  },
});

export default Post;
