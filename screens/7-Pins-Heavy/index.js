import React, {Component} from 'react';

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
import {Fonts} from '../../scr/utils/fonts';

import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import style from './style';
const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  showLoader = () => {
    this.setState({showLoader: true});
  };
  hideLoader = () => {
    this.setState({showLoader: false});
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
        </View>
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
