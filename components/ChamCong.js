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

export default class ChamCong extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  render() {
    return (
      <ImageBackground

        source={require('../assets/background2.png')}
        style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.txtChamcong}> <TouchableOpacity style={styles.btnIcon} >
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Back.png')}></ImageBackground>
          </TouchableOpacity>Quản lý chấm công</Text>
          <View style={styles.header}>
          <Text style={styles.headerText}>Chấm công</Text>
        </View>
           <TouchableOpacity style={styles.btnDate}>
            <Text style={styles.txtContent}>17/08/2021</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIconDel} >
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Delete.png')}>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Add}
           onPress={this.addNote.bind(this)}>
              <Text style={styles.AddText}>+</Text>
          </TouchableOpacity>
          </View>
      </ImageBackground>

    );
  }
  addNote(){
    if(this.state.noteText){
      var d= new Date();
      this.state.noteArray.push({
        'date' : d.getFullYear()+
        "/" +(d.getMonth() + 1)+
        "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({noteArray:this.state.noteArray})
      this.setState({noteText:''});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    alignItems: 'center',

  },
  header: {
        backgroundColor: '#BED0EC',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        width:'80%',
        marginTop:10
      },
      headerText:{
        color: '#002D69',
        fontSize: 24,
        fontWeight: 'bold',
        paddingRight:135
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
  },
  btnIconDel:{
    marginTop:-34,
    paddingLeft:225,
    marginBottom: -10,
    height: 59,
  },
  txtChamcong: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 120,
    marginTop: 25,
    paddingRight:50
  },
  btnDate:{
    backgroundColor: 'white',
    width: '80%',
    marginTop: 0,
    marginBottom: -10,
    height: 59,
  },
  txtContent: {
    color: '#002D69',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 19,

  },
  Add:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BED0EC',
    padding: 1,
    top: 205,
    right:37,
    height: 60,
    width:'20%'
  },
  AddText:{
    color: '#002D69',
    fontSize: 30,
    fontWeight:'bold'
  }
});
