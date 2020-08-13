import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  Dimensions
} from 'react-native';

//Packages


import styles from './style';
const { width, height } = Dimensions.get('window');

export default class Splash extends Component {

  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
        
          <View style={styles.logoContainer}>

            <Image resizeMode="contain" style={styles.logo} source={require("../../images/thunderLogo.png")}></Image>
            <View style={{
              flexDirection:'row',
              alignItems:'center'
            }}>

            <Text style={{
              fontSize:width * .1,
              color:'white',
              bottom:height * .007,
              left:width * .008
            }}>T</Text>
            <Text style={{
              fontSize:width * .06,
              color:'white'
            }}>
              RAILOR
            </Text>
            <Text style={{
              fontSize:width * .1,
              color:'white',
              bottom:height * .007,
            }}> S</Text>
            <Text style={{
              fontSize:width * .06,
              color:'white'
            }}>
              OCKET
            </Text>
            </View>

            <Text style={{
              fontSize:width * .1,
              color:'white'
            }}>T</Text>
            <Text style={{
              fontSize:width * .06,
              color:'white'
            }}>
              ESTER
            </Text>
            <Text style={styles.textStyle1} >LOLEC ENTERPRISES</Text>

            <ActivityIndicator size="large" color="white" style={styles.activityIndi} />
          </View>



      </View>
    );
  }
}