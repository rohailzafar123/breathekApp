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
} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import BleManager from 'react-native-ble-manager';
//Packagess

import styles from './style';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {SceneView} from 'react-navigation';
import {NativeModules, NativeEventEmitter} from 'react-native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default class Splash extends Component {
  timeout = 0;
  constructor() {
    super();
    this.state = {
      rssi_strength: 0,
      deviceId: '',
      leftIndi: false,
      rightIndi: false,
      tailLig: false,
      stopLig: false,
      newRev: false,
    };
  }

  async connectAndPrepare(peripheral, service, characteristic) {
    // Before startNotification you need to call retrieveServices
    await BleManager.retrieveServices(peripheral);
    // To enable BleManagerDidUpdateValueForCharacteristic listener
    await BleManager.startNotification(peripheral, service, characteristic);
    // Add event listener
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      ({value, peripheral, characteristic, service}) => {
        // Convert bytes array to string
        let hex,
          hexadec = '';
        for (let i = 0; i < value.length; i++) {
          if (i !== 0) {
            hex = value[i].toString(16);
            hexadec += '-' + hex;
          } else if (i === 0) {
            hex = value[i].toString(16);
            hexadec += hex;
          }
        }
        console.log(hexadec);
        if (hexadec == '0-0-11-ff') {
          console.log('Random');
        }
        if (hexadec == '0-0-0-1') {
          this.setState({
            leftIndi: true,
            rightIndi: false,
            stopLig: false,
            tailLig: false,
            newRev: false,
          });
        }
        if (hexadec == '0-0-0-13') {
          this.setState({
            leftIndi: false,
            rightIndi: true,
            stopLig: false,
            tailLig: false,
            newRev: false,
          });
        }
        if (hexadec == '0-0-0-3b') {
          this.setState({
            leftIndi: false,
            rightIndi: false,
            stopLig: true,
            tailLig: false,
            newRev: false,
          });
        }
      },
    );
    // Actions triggereng BleManagerDidUpdateValueForCharacteristic event
  }

  componentDidMount() {
    //Start
    BleManager.start().then(() => {
      // Success code
      console.log('Module initialized');
    });

    //Scanning
    BleManager.scan(['4fafc201-1fb5-459e-8fcc-c5c9c331914b'], 5).then(() => {
      // Success code
      // Success code
      BleManager.getBondedPeripherals()
        .then((res) => {
          console.log(res[0].id);
          this.setState({
            deviceId: res[0].id,
          });
        })
        .then(() => {
          console.log(this.state.deviceId);
          BleManager.connect(this.state.deviceId)
            .then(() => {
              // Success code
              console.log('Connected');
            })
            .then(() => {
              //read rssi
              this.timeout = setInterval(() => {
                BleManager.readRSSI(this.state.deviceId)
                  .then((rssi) => {
                    // Success code
                    console.log('Current RSSI: ' + rssi);
                    this.setState({
                      rssi_strength: rssi,
                    });
                  })
                  .catch((error) => {
                    // Failure code
                    console.log(error);
                  });
              }, 1000);

              //notify
              this.connectAndPrepare(
                this.state.deviceId,
                '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
                'beb5483e-36e1-4688-b7f5-ea07361b26a8',
              );
            })
            .catch((error) => {
              // Failure code
              console.log('err', error);
            });
        });
    });
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
    BleManager.stopNotification(
      this.state.deviceId,
      '4fafc201-1fb5-459e-8fcc-c5c9c331914b',
      'beb5483e-36e1-4688-b7f5-ea07361b26a8',
    );
  }
  render() {
    let leftIndicator;
    !this.state.leftIndi
      ? (leftIndicator = require('../../../images/7pinFlat/left_b_0.png'))
      : (leftIndicator = require('../../../images/7pinFlat/left_b_0Active.png'));
    let rightIndicator;
    !this.state.rightIndi
      ? (rightIndicator = require('../../../images/7pinFlat/right_w_0.png'))
      : (rightIndicator = require('../../../images/7pinFlat/right_w_0active.png'));
    let tailLight;
    !this.state.tailLig
      ? (tailLight = require('../../../images/7pinFlat/rare_both_w_0.png'))
      : (tailLight = require('../../../images/7pinFlat/rare_both_w_0active.png'));
    let stopLight;
    !this.state.stopLig
      ? (stopLight = require('../../../images/7pinFlat/newstop.png'))
      : (stopLight = require('../../../images/7pinFlat/newstopActive.png'));
    let newReverse;
    !this.state.newRev
      ? (newReverse = require('../../../images/7pinFlat/newreverse.png'))
      : (newReverse = require('../../../images/7pinFlat/newreverseActive.png'));
    let image_source;
    if (this.state.rssi_strength <= -40 && this.state.rssi_strength >= -65) {
      image_source = require('../../../images/5pin/action_rssi1.png');
    } else if (
      this.state.rssi_strength <= -66 &&
      this.state.rssi_strength >= -80
    ) {
      image_source = require('../../../images/5pin/action_rssi_good.png');
    } else if (
      this.state.rssi_strength <= -81 &&
      this.state.rssi_strength >= -100
    ) {
      image_source = require('../../../images/5pin/action-rssi_weak.png');
    } else {
      image_source = require('../../../images/5pin/action_null.png');
    }
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
            source={require('../../../images/7pinSmall/barone.png')}
          />
          <Text style={{fontSize: 20, color: 'white'}}>N/A</Text>
          <Text
            style={{
              fontSize: 12,
              color: 'white',
              left: 30,
              bottom: 14,
            }}>
            RSSI
          </Text>
          <Image
            resizeMode="contain"
            style={styles.wifi}
            source={image_source}
          />
          <Image
            resizeMode="contain"
            style={styles.wifiAbsulute}
            source={require('../../../images/5pin/action-rssi_weaknul.png')}
          />
        </View>
        <ScrollView style={styles.lowerBody}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>7-Pins Small Round</Text>
              <Image
                resizeMode="contain"
                style={styles.image1}
                source={require('../../../images/7pinSmall/sevenpinsmall.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Socket</Text>
              <Image
                resizeMode="contain"
                style={styles.image2}
                source={require('../../../images/7pinSmall/socketsevensmall.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Left Indicator</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={leftIndicator}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Right Indicator</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={rightIndicator}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Tail Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={tailLight}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Reverse Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={newReverse}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Stop Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={stopLight}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
