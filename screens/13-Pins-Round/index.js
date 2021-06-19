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
  Alert,
  PermissionsAndroid,
  Dimensions

} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
// import BleManager from 'react-native-ble-manager';
import { Fonts } from '../../scr/utils/fonts';
import TextTicker from 'react-native-text-ticker';

import { NativeModules, NativeEventEmitter } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
// Packages

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.manager = new BleManager();
    this.state = {
      showLoader: false,
      device: null,
      listOfDevicesNames: [],
    };
  }
  showLoader = () => {
    this.setState({ showLoader: true });
  };
  hideLoader = () => {
    this.setState({ showLoader: false });
    // Stop scanning as it's not necessary if you are scanning for one device.
    this.manager.stopDeviceScan();
  };

  doSignup = () => {
    this.showLoader();
    console.log('scanning part');
    this.bleScanning();
  };

  bleScanning() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }
  scanAndConnect() {
    const scan_connect = this.manager.startDeviceScan(
      null,
      null,
      (error, device) => {
        if (error) {
        } else {
          if (this.state.listOfDevicesNames.length == 0) {
            this.setState({
              listOfDevicesNames: [
                ...this.state.listOfDevicesNames,
                ...[[device.name, device.id]],
              ],
            });
          } else {
            var status = 'empty';
            for (let i = 0; i < this.state.listOfDevicesNames.length; i++) {
              if (this.state.listOfDevicesNames[i].includes(device.name)) {
                status = 'add';
              }
            }
            if (status != 'add') {
              this.setState({
                listOfDevicesNames: [
                  ...this.state.listOfDevicesNames,
                  ...[[device.name, device.id]],
                ],
              });
              console.log('list', this.state.listOfDevicesNames);
            }
          }
        }
      },
    );
    if (!scan_connect) {
    }
  }
  handleDevice() {
    this.manager.stopDeviceScan();
    this.props.navigation.navigate('pingpage13', {
      deviceId: this.state.device.id,
    });
  }
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
                width : width * .62,
                marginLeft:height * .005,
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
                  13-Pin Round Socket Devices
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
        <View style={styles.body}>
          <View>
            <TouchableOpacity
              style={styles.unknownList}
              onPress={() =>
                this.props.navigation.navigate('pingpage13')}
            >
              <Text style={{
                color: 'black',
                fontSize: width * .04,
                fontFamily: Fonts.Montserrat
              }}>Unknown Device</Text>
              <Text style={{
                color: 'black',
                fontSize: width * .025,
                fontFamily: Fonts.Montserrat
              }}>
                4B:8D:D5:68:2A:4f
              </Text>
            </TouchableOpacity>
            {this.state.showLoader &&
              this.state.listOfDevicesNames &&
              this.state.listOfDevicesNames.map((item, key) => {
                console.log('item', item);
                return (
                  <TouchableOpacity
                    key={key}
                    style={styles.unknownList}
                    onPress={() =>
                      this.props.navigation.navigate('pingpage13', {
                        deviceId: item[1],
                      })
                    }>
                    <Text style={{
                      color: 'black',
                      fontSize: width * .04,
                      fontFamily: Fonts.Montserrat
                    }}>{item[0]}</Text>
                    <Text style={{
                      color: 'black',
                      fontSize: width * .025,
                      fontFamily: Fonts.Montserrat
                    }}>{item[1]}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </View>
    );
  }
}
