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
import {Fonts} from '../../scr/utils/fonts';

// import { Fonts } from '../../assets/fonts';
import styles from './style';
const { width, height } = Dimensions.get('window');

export default class Splash extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>

        <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require("../../images/LELogo.png")}></Image>

        <View style={{
        alignItems: 'center',
        }}>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: width * .15,
              color: 'white',
              fontFamily : Fonts.BalooChettan2,
              
              bottom: height * .009,
              left: width * .03
            }}>T</Text>
            <Text style={{
              fontSize: width * .07,
              color: 'white',
              fontFamily : Fonts.BalooChettan2,

            }}>
              RAILOR
            </Text>
            <Text style={{
              fontSize: width * .15,
              color: 'white',
              bottom: height * .009,
              fontFamily : Fonts.BalooChettan2,
              left: width * .003

            }}> S</Text>
            <Text style={{
              fontSize: width * .07,
              fontFamily : Fonts.BalooChettan2,
              color: 'white'
            }}>
              OCKET
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: width * .15,
              color: 'white',
              fontFamily : Fonts.BalooChettan2,
              bottom: height * .009,
              left: width * .03
              
            }}>T</Text>
            <Text style={{
              fontSize: width * .07,
              color: 'white',
              fontFamily : Fonts.BalooChettan2,

              // fontStyle:'notoserif',

            }}>
              ESTER
            </Text>
          </View>
            </View>
         
        </View>
        <View style={{
            width: width * 1,
            height: height * .3,
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingVertical:height * .1,
          }}>

            <Text style={styles.textStyle1} >Human Connectivity Evolved</Text>

            <ActivityIndicator size="large" color="white" style={styles.activityIndi} />
          </View>


      </View>
    );
  }
}