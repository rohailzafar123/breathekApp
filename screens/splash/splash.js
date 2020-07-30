import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar
} from 'react-native';

//Packages


import styles from './style';

export default class Splash extends Component {

  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        
          <View style={styles.logoContainer}>

            <Image resizeMode="contain" style={styles.logo} source={require("../../images/log.png")}></Image>
            <Text style={styles.textStyle1} >LOLEC ENTERPRISES</Text>

            <ActivityIndicator size="large" color="white" style={styles.activityIndi} />
          </View>



      </View>
    );
  }
}