import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import Textarea from 'react-native-textarea';

const Header = () => {
  const [addPost, setAddPost] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="notifications-sharp" size={24} color="#006D77" />
      </TouchableOpacity>
      <Text style={styles.title}>Football Hausa</Text>
      <TouchableOpacity onPress={(e) => setAddPost(true)}>
        <Icon name="ios-add-circle-sharp" size={28} color="#006D77" />
      </TouchableOpacity>
      <Modal isVisible={addPost}>
        <View style={styles.modal}>
          <View style={styles.modal_top}>
            <TouchableOpacity>
              <Icon name="camera-sharp" size={42} color="#006D77" />
            </TouchableOpacity>
            <TextInput
              style={styles.titleInput}
              placeholderTextColor={'#006D77'}
              placeholder="Write heading here"
            />
          </View>
          <View style={styles.modal_body}>
            <Textarea
              // maxLength={120}
              style={styles.textarea}
              placeholder={'Write body here (Bayani anan)'}
              placeholderTextColor={'#006D77'}
              containerStyle={styles.textareaContainer}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <Image resizeMode='cover' style={styles.img} source={require('../assets/img/ramos.jpeg')} />
          <View style={{width: '100%', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
            <TouchableOpacity style={[styles.buttons, {backgroundColor: "#006D77"}]}>
              <Text style={styles.btnText}>Post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, {backgroundColor: "red"}]}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          {/* <Button title="Close" onPress={(e) => setAddPost(false)} /> */}
        </View>
      </Modal>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: '#83C5BE',
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    // marginBottom: 10
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    color: '#006D77',
    letterSpacing: 0.7,
    fontFamily: 'Roboto-Bold',
  },
  modal: {
    backgroundColor: '#fff',
    width: '100%',
    height: 500,
  },
  modal_top: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleInput: {
    backgroundColor: '#eee',
    width: 310,
    height: 50,
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#006D77',
    marginLeft: 10,
    borderBottomColor: '#006D77',
    borderBottomWidth: 3,
    textAlignVertical: 'bottom',
  },
  modal_body: {
    width: '100%',
    // backgroundColor: "#006D77",
    height: 120,
    marginTop: 15,
  },
  textarea: {
    backgroundColor: '#eee',
    height: 100,
    marginHorizontal: 10,
    borderBottomColor: '#006D77',
    borderBottomWidth: 3,
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#006D77',
    fontFamily: 'Roboto-Medium',
    marginBottom:1
  },
  textareaContainer: {
    height: 120,
    padding: 5,
    marginBottom: 0,
    // backgroundColor: '#F5FCFF',
  },
  img:{
    width: '100%',
    height: 200,
    marginBottom:15
  },
  buttons:{
    paddingHorizontal: 40,
    marginHorizontal: 10,
    paddingVertical: 10
  },
  btnText:{
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontSize: 18
  }
});
