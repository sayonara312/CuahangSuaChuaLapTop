import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class CaiDat extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/background2.png')}
        style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.txtCaiDat}> <TouchableOpacity style={styles.btnIcon} >
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Back.png')}></ImageBackground>
          </TouchableOpacity>Cài đặt</Text>
          <TouchableOpacity style={styles.btnCaidat} onPress={() => {
                  this.props.navigation.navigate('');
                }}>
            <Text style={styles.txtContent} >Ngôn ngữ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Tắt rung khi nhận{'\n'}thông báo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Nhận thông báo{'\n'}qua Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Giới thiệu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCaidat} >
            <Text style={styles.txtContent}>Cập nhật phiên bản</Text>
          </TouchableOpacity>
          </View>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    alignItems: 'center',

  },
  image: {
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
  },
  btnIcon: {
    paddingTop:20,
    width: 30,
    height: 40,
    marginTop:3,
    color: 'rgba(255, 254, 254, 0.8)',
  },
  txtCaiDat: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 50,
    marginTop: 25,
    paddingRight:200
  },

  btnCaidat: {
    backgroundColor: '#BED0EC',
    borderRadius: 4,
    width: '90%',
    marginTop: 10,
    marginBottom: 2,
    height: 70,

  },
  txtContent: {
    color: '#002D69',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 14,

  },
});
