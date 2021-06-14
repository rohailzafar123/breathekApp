import React, { Component } from 'react';

import {
  AppRegistry,
  Dimensions,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
//Packages
import { Fonts } from '../../scr/utils/fonts';
import TextTicker from 'react-native-text-ticker';

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './style';
const { width, height } = Dimensions.get('window');

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  showLoader = () => {
    this.setState({ showLoader: true });
  };
  hideLoader = () => {
    this.setState({ showLoader: false });
  };

  doSignup = () => {
    this.showLoader();
  };

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
          hidden={true}
          showHideTransition={'fade'}
        />
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.headerInner}>
              <View style={styles.goBack}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Back name="ios-arrow-back" size={width * .09} color="#002468" />
                </TouchableOpacity>
              </View>
              <View style={{
                backgroundColor: "#4f87ff",
                width: height * .06,
                height: height * .06,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: height * .08,
                elevation: height * .005,
              }}>
                <Image
                  resizeMode="contain"
                  style={styles.logo}
                  source={require("../../images/LELogo.png")}
                />
              </View>
              <View style={{
                width: width * .62,
                // backgroundColor:'red',
                marginLeft: height * .005,
              }}>
                <TextTicker
                  style={{
                    fontSize: height * 0.02,
                    fontFamily: Fonts.Montserrat,
                    textAlign: 'center',
                  }}
                  duration={5000}
                  loop
                  scroll
                  repeatSpacer={50}
                  marqueeDelay={2000}
                >
                  7-Pins Heavy Duty Round Socket Devices
              </TextTicker>
              </View>
              <ActivityIndicator
                style={styles.activityIndicator}
                animating={this.state.showLoader}
                size={width * .05}
                color="#807e7e96"
              />
              <View
                style={styles.scanView}
              />
              {this.state.showLoader == false ? (
                <View
                  style={styles.scanButtun}
                >
                  <TouchableOpacity
                    onPress={() => this.doSignup()}>
                    <Text style={{
                      fontSize: width * .03,
                      fontFamily: Fonts.Montserrat,
                    }}>Scan</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={styles.scanButtun}
                >
                  <TouchableOpacity
                    onPress={() => this.hideLoader()}>
                    <Text style={{
                      fontSize: width * .03,
                      fontFamily: Fonts.Montserrat,
                    }}>Stop</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>


        {/* <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.headerInner}>
              <View style={styles.goBack}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Back
                    name="ios-arrow-back"
                    size={width * 0.09}
                    color="#002468"
                  />
                </TouchableOpacity>
              </View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../../images/thunderLogo.png')}
              />
              <Text style={styles.textStyle1}>
                7-Pins Heavy Duty Round Socket Devices
              </Text>
              <ActivityIndicator
                style={styles.activityIndicator}
                animating={this.state.showLoader}
                size={width * 0.05}
                color="#807e7e96"
              />
              <View style={styles.scanView} />
              {this.state.showLoader == false ? (
                <View style={styles.scanButtun}>
                  <TouchableOpacity onPress={() => this.doSignup()}>
                    <Text
                      style={{
                        fontSize: width * 0.03,
                        fontFamily: Fonts.Montserrat,
                      }}>
                      Scan
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.scanButtun}>
                  <TouchableOpacity onPress={() => this.hideLoader()}>
                    <Text
                      style={{
                        fontSize: width * 0.03,
                        fontFamily: Fonts.Montserrat,
                      }}>
                      Stop
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View> */}
        {/*  */}
        <View style={styles.body}>
          <View>
            <TouchableOpacity
              style={styles.unknownList}
              onPress={() => this.props.navigation.navigate('pingpage13')}>
              <Text
                style={{
                  color: 'black',
                  fontSize: width * 0.04,
                  fontFamily: Fonts.Montserrat,
                }}>
                Unknown Device
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: width * 0.025,
                  fontFamily: Fonts.Montserrat,
                }}>
                4B:8D:D5:68:2A:4f
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
