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
import Back from 'react-native-vector-icons/Ionicons';
import BleManager from 'react-native-ble-manager';
//Packagess

// import styles from './style';
import styles from '../../13-Pins-Round/inerScreen/style';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NativeModules, NativeEventEmitter } from 'react-native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
// import {SceneView} from 'react-navigation';
const { width, height } = Dimensions.get('window');


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
      rareLeft: false,
      stopLig: false,
      newRev: false,
      revLight: false,
      pinkReverse: false,
      rareRight: false,
    };
  }

  async connectAndPrepare(peripheral, service, characteristic) {
    try {
      // Before startNotification you need to call retrieveServices
      const res = await BleManager.retrieveServices(peripheral);
      // console.log(res);
      // To enable BleManagerDidUpdateValueForCharacteristic listener
      await BleManager.startNotification(peripheral, service, characteristic);
      // Add event listener
      bleManagerEmitter.addListener(
        'BleManagerDidUpdateValueForCharacteristic',
        ({ value, peripheral, characteristic, service }) => {
          // Convert bytes array to string
          console.log('value in decimal: ', value);
          // let hex,}
          // let sum = value[3]+value[2]+value[1]+value[0];

          const hexadec = value;
          console.log(hexadec)

          // for (let i = 0; i < value.length; i++) {
          // console.log('sum =',hexadec)

          // }
          //   if (i !== 0) {
          //     sum += value[i];
          //     console.log('sum =',sum)
          //     hexadec += '-' + sum;
          //   } else if (i === 0) {
          //     sum = value[i];
          //     hexadec += sum;
          //   }
          // }
          // console.log(hexadec);
          if (hexadec == '0-0-11-ff') {
            // console.log('Random');
          }
          //All Icons Off
          if (hexadec == 0) {
            this.setState({
              leftIndi: false,
              rightIndi: false,
              stopLig: false,
              ignition: false,
              newBat: false,
              fogBlue: false,
              pinkReverse: false,
              rareLeft: false,
              rareRight: false,
            });
          }
          //left Turn
          // if (hexadec | 2 || hexadec === 1) {
          if ((hexadec[3] & 1) == 1) {
            this.setState({
              leftIndi: true,
            });
          }
          else {
            this.setState({
              leftIndi: false,
            })
          }
          //right Turn
          if ((hexadec[3] & 2) == 2) {
            this.setState({
              rightIndi: true,

            });
          }
          else {
            this.setState({
              rightIndi: false,
            })
          }
          //stop Light
          if ((hexadec[3] & 32) == 32) {
            this.setState({
              stopLig: true,
            });
          }
          else {
            this.setState({
              stopLig: false,
            })
          }
          //ignition Power
          if ((hexadec[2] & 1) == 1) {
            this.setState({
              ignition: true,
            });
          }
          else {
            this.setState({
              ignition: false,
            })
          }
          //battery Power
          if ((hexadec[3] & 128) == 128) {
            this.setState({
              newBat: true,
            });
          }
          else {
            this.setState({
              newBat: false,
            })
          }
          //Fog Light
          if ((hexadec[3] & 16) == 16) {
            this.setState({
              fogBlue: true,
            });
          }
          else {
            this.setState({
              fogBlue: false,
            })
          }
          //Reverse Light
          if ((hexadec[3] & 64) == 64) {
            this.setState({
              pinkReverse: true,
            });
          }
          else {
            this.setState({
              pinkReverse: false,
            })
          }
          //Park Light (L)
          if ((hexadec[3] & 4) == 4) {
            this.setState({
              rareLeft: true,
            });
          }
          else {
            this.setState({
              rareLeft: false,
            })
          }
          //Park Light (R)
          if ((hexadec[3] & 8) == 8) {
            this.setState({
              rareRight: true,
            });
          }
          else {
            this.setState({
              rareRight: false,
            })
          }
          if (hexadec[1] == 1) {
            this.setState({ barSignal: 1 })
          }
          else if (hexadec[1] == 16) {
            this.setState({ barSignal: 2 })
          }
          else if (hexadec[1] == 17) {
            this.setState({ barSignal: 3 })
          }
          else if (hexadec[1] == 2) {
            this.setState({ barSignal: 4 })
          }
          else if (hexadec[1] == 32) {
            this.setState({ barSignal: 5 })
          }
          else if (hexadec[1] == 4) {
            this.setState({ barSignal: 6 })
          }
          else if (hexadec[1] == 64) {
            this.setState({ barSignal: 7 })
          }
          else if (hexadec[1] == 8) {
            this.setState({ barSignal: 8 })
          }
          else if (hexadec[1] == 128) {
            this.setState({ barSignal: 9 })
          }
          else if (hexadec[0] == 1) {
            this.setState({ barSignal: 10 })
          }
          else if (hexadec[0] == 16) {
            this.setState({ barSignal: 11 })
          }
          else if (hexadec[0] == 17) {
            this.setState({ barSignal: 12 })
          } else {
            this.setState({ barSignal: 0 })
          }

        },
      );
    } catch (err) {
      Alert.alert(
        'Cannot read Characteristic. Please Go Back, Come to this screen again!',
      );
    }
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
      ? (leftIndicator = require('../../../images/6pinSmall/left_b_0.png'))
      : (leftIndicator = require('../../../images/6pinSmall/left_b_0Active.png'));
    let rightIndicator;
    !this.state.rightIndi
      ? (rightIndicator = require('../../../images/6pinSmall/right_w_0.png'))
      : (rightIndicator = require('../../../images/6pinSmall/right_w_0active.png'));
    let tailLight;
    !this.state.rareLeft
      ? (tailLight = require('../../../images/6pinSmall/rare_both_w_0.png'))
      : (tailLight = require('../../../images/6pinSmall/rare_both_w_0active.png'));
    let stopLight;
    !this.state.stopLig
      ? (stopLight = require('../../../images/6pinSmall/newstop.png'))
      : (stopLight = require('../../../images/6pinSmall/newstopActive.png'));
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
    let bar_signal;
    this.state.barSignal == 0 ? bar_signal = require('../../../images//BARS/0.png')
      : this.state.barSignal == 1 ? bar_signal = require('../../../images/BARS/1.png')
        : this.state.barSignal == 2 ? bar_signal = require('../../../images//BARS/2.png')
          : this.state.barSignal == 3 ? bar_signal = require('../../../images//BARS/3.png')
            : this.state.barSignal == 4 ? bar_signal = require('../../../images//BARS/4.png')
              : this.state.barSignal == 5 ? bar_signal = require('../../../images//BARS/5.png')
                : this.state.barSignal == 6 ? bar_signal = require('../../../images//BARS/6.png')
                  : this.state.barSignal == 7 ? bar_signal = require('../../../images//BARS/7.png')
                    : this.state.barSignal == 8 ? bar_signal = require('../../../images//BARS/8.png')
                      : this.state.barSignal == 9 ? bar_signal = require('../../../images//BARS/9.png')
                        : this.state.barSignal == 10 ? bar_signal = require('../../../images//BARS/10.png')
                          : this.state.barSignal == 11 ? bar_signal = require('../../../images//BARS/11.png')
                            : this.state.barSignal == 12 ? bar_signal = require('../../../images//BARS/12.png')
                              : bar_signal = require('../../../images//BARS/0.png')
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Back name="ios-arrow-back" size={width * .08} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text
              style={{
                fontSize: height * .015,
                color: 'black',
                marginBottom: height * .05
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
        </View>
        <View style={styles.uperBody}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={styles.brakeText}>
              Electric Brakes
            </Text>
            <Image
              resizeMode="contain"
              style={styles.loadingLineAbsolut}
              source={require('../../../images/BARS/0.png')}
            />
            <Image
              resizeMode="contain"
              style={styles.loadingLine}
              source={bar_signal}
            />
          </View>
        </View>
        <View style={styles.lowerBody}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              <View style={styles.imageBox}>
                <Text style={styles.imageText}>6-PIN ROUND</Text>
                <Image
                  resizeMode="contain"
                  style={styles.image1}
                  source={require('../../../images/6pinSmall/sixpins.png')}
                />
              </View>
              <View style={styles.imageBox}>
                <Text style={styles.imageText}>SOCKET</Text>
                <Image
                  resizeMode="contain"
                  style={styles.image2}
                  source={require('../../../images/6pinSmall/six.png')}
                />
              </View>
              <View style={styles.imageBox}>
                <Text style={styles.imageText}>LEFT-HAND TURN</Text>
                <Image
                  resizeMode="contain"
                  style={styles.image3}
                  source={leftIndicator}
                />
              </View>
              <View style={styles.imageBox}>
                <Text style={styles.imageText}>RIGHT-HAND TURN</Text>
                <Image
                  resizeMode="contain"
                  style={styles.image3}
                  source={rightIndicator}
                />
              </View>
              <View style={styles.imageBox}>
                <Text style={styles.imageText}>REAR LAMPS</Text>
                <Image
                  resizeMode="contain"
                  style={styles.image3}
                  source={tailLight}
                />
              </View>
              <View style={styles.imageBox}>
                <Text style={styles.imageText}>STOP LAMPS</Text>
                <Image
                  resizeMode="contain"
                  style={styles.image3}
                  source={stopLight}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
