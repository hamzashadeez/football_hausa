import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Post = ({data}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={{color: '#fff'}}>{data.name[0]}</Text>
        </View>
        <Text style={styles.name}>{data.name}</Text>
      </View>
      <View style={styles.banner}>
        <Text style={styles.head}>{data.head}</Text>
        <Text style={styles.body}>{data.body}</Text>
      </View>
      <View style={styles.darken}></View>
      <Image style={styles.img} source={data.photo} />
      <View style={styles.btns}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
            }}>
            <Icon name="heart" size={20} color="#fff" />
            <Text style={styles.interraction}>{data.likes}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
              marginTop: 3,
            }}>
            <Icon name="chatbubbles" size={20} color="#fff" />
            <Text style={styles.interraction}>{data.comments.length}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            height: 130,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={e=>alert("Hey there")}>
            <Icon name="heart-outline" size={26} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="chatbubbles-outline" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#006D77',
    marginRight: 7,
  },
  post: {
    backgroundColor: '#EDF6F9',
    marginBottom: 5,
    width: '100%',
    height: 300,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    zIndex: 10,
  },
  img: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  name: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  banner: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 1,
    left: 0,
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    zIndex: 10,
  },
  head: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Roboto-Bold',
  },
  body: {
    color: '#fff',
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
  },
  darken: {
    backgroundColor: 'black',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    opacity: 0.3,
    zIndex: 1,
  },
  btns: {
    width: 50,
    height: 200,
    // backgroundColor: 'black',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'space-between',
    right: 0,
    top: 50,
    alignItems: 'center',
    zIndex: 10
  },
  interraction: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Roboto-Medium',
  },
});
