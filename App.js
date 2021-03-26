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
import profile from './profile';
export default class App extends React.Component {

  render() {
    return (
        <View styles={styles.container}>
            <profile/>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

