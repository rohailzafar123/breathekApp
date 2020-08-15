import React, {Component} from 'react';

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
} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
// import BleManager from 'react-native-ble-manager';

import {NativeModules, NativeEventEmitter} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
// Packages

import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    this.setState({showLoader: true});
  };
  hideLoader = () => {
    this.setState({showLoader: false});
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
                  onPress={() => this.props.navigation.goBack()}>
                  <Back name="ios-arrow-back" size={40} color="#002468" />
                </TouchableOpacity>
              </View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../../images/logo2.jpg')}
              />
              <Text style={styles.textStyle1}>
                13-Pins Round Socket Devices
              </Text>
              <ActivityIndicator
                style={{
                  marginLeft: 30,
                }}
                animating={this.state.showLoader}
                size={25}
                color="#807e7e96"
              />
              <View
                style={{
                  height: 25,
                  borderWidth: 0.5,
                  // marginLeft:35,
                  borderColor: '#b4b4b4d0',
                }}
              />
              {this.state.showLoader == false ? (
                <TouchableOpacity
                  style={styles.scanButtun}
                  onPress={() => this.doSignup()}>
                  <Text style={{fontWeight: 'bold'}}>Scan</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.scanButtun}
                  onPress={() => this.hideLoader()}>
                  <Text style={{fontWeight: 'bold'}}>Stop</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <TouchableOpacity
              style={styles.unknownList}
              onPress={() => this.props.navigation.navigate('pingpage13')}>
              <Text style={{fontSize: 20}}>Unknown Device</Text>
              <Text style={{fontSize: 12, marginTop: 4}}>
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
                    <Text style={{fontSize: 20}}>{item[0]}</Text>
                    <Text style={{fontSize: 12, marginTop: 4}}>{item[1]}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </View>
    );
  }
}
