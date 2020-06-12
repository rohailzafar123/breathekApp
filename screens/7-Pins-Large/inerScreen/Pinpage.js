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
} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
//Packagess

import styles from './style';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SceneView } from 'react-navigation';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Back name="ios-arrow-back" size={30} color="gray" />
            </TouchableOpacity>
          </View>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../../images/logo2.jpg')}
          />
        </View>
        <View style={styles.uperBody}>
          <Image
            resizeMode="contain"
            style={styles.loadingLine}
            source={require('../../../images/7pinLarge/barone.png')}
          />
          <Text style={{ fontSize: 20, color: 'white' }}>
            N/A
          </Text>
          <Text style={{
            fontSize: 12, color: 'white', left: 20,
            bottom: 14,
          }}>
            RSSI
            </Text>
          <Image
            resizeMode="contain"
            style={styles.wifi}
            source={require('../../../images/7pinLarge/action_rssi.png')}
          />
        </View>
        <ScrollView style={styles.lowerBody}>
          <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent:'center'
          }}>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>7-Pins Large</Text>
              <Image
                resizeMode="contain"
                style={styles.image1}
                source={require('../../../images/7pinLarge/sevenpinlarge.png')}
              />
            </View>
            <View style={styles.imageBox}>
            <Text style={styles.imageText}>Socket</Text>
              <Image
                resizeMode="contain"
                style={styles.image2}
                source={require('../../../images/7pinLarge/socketsevenlarge.png')}
              />
            </View>
            <View style={styles.imageBox}>
            <Text style={styles.imageText}>Left Indicator</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/7pinLarge/leftyellow_b_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
            <Text style={styles.imageText}>Right Indicator</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/7pinLarge/right_w_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
            <Text style={styles.imageText}>Tail Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/7pinLarge/rare_both_w_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
            <Text style={styles.imageText}>Reverse Signal</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/7pinLarge/newreverse.png')}
              />
            </View>
            <View style={styles.imageBox}>
            <Text style={styles.imageText}>Stop Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/7pinLarge/newstop.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}