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

export default class Splash extends Component {
  timeout = 0;
  constructor() {
    super();
    this.state = {
      rssi_strength: 0,
      leftIndi: false,
      rightIndi: false,
      fogBlue: false,
      stopLig: false,
      pinkReverse: false,
      rareLeft: false,
      ignition: false,
      rareRight: false,
      newBat: false
    };
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
      console.log('Scan started for 4fafc201-1fb5-459e-8fcc-c5c9c331914b');
    });

    //Connection
    BleManager.connect('98:F4:AB:06:3B:8E')
      .then(() => {
        // Success code
        console.log('Connected');
      })
      .then(() => {
        //read rssi
        this.timeout = setInterval(() => {
          BleManager.readRSSI('98:F4:AB:06:3B:8E')
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
      })
      .catch((error) => {
        // Failure code
        console.log('err', error);
      });
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
    console.log('Unmount');
  }
  render() {
    let leftIndicator;
    !this.state.leftIndi ? (leftIndicator = require('../../../images/13pin/left_b_0.png')) : (leftIndicator = require('../../../images/13pin/left_b_0Active.png'));
    let rightIndicator;
    !this.state.rightIndi ? (rightIndicator = require('../../../images/13pin/right_w_0.png')) : (rightIndicator = require('../../../images/13pin/right_w_0active.png'));
    let fogBlueLight;
    !this.state.fogBlue ? (fogBlueLight = require('../../../images/13pin/fogblue.png')) : (fogBlueLight = require('../../../images/13pin/fogblueActive.png'));
    let stopLight;
    !this.state.stopLig ? (stopLight = require('../../../images/13pin/newstop.png')) : (stopLight = require('../../../images/13pin/newstopActive.png'));
    let pinkReverseBack;
    !this.state.pinkReverse ? (pinkReverseBack = require('../../../images/13pin/pinkreverse.png')) : (pinkReverseBack = require('../../../images/13pin/pinkreverseActive.png'));
    let newBattery;
    !this.state.newBat ? (newBattery = require('../../../images/13pin/newbatt.png')) : (newBattery = require('../../../images/13pin/newbattActive.png'));
    let rareLeftLight;
    !this.state.rareLeft ? (rareLeftLight = require('../../../images/13pin/rare_l_w_0.png')) : (rareLeftLight = require('../../../images/13pin/rare_l_w_0Active.png'));
    let newIgnition;
    !this.state.ignition ? (newIgnition = require('../../../images/13pin/newigni.png')) : (newIgnition = require('../../../images/13pin/newigniActive.png'));
    let rareRightLight;
    !this.state.rareRight ? (rareRightLight = require('../../../images/13pin/rare_r_w_0.png')) : (rareRightLight = require('../../../images/13pin/rare_r_w_0Active.png'));

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
            source={require('../../../images/13pin/barone.png')}
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
              <Text style={styles.imageText}>13-Pins Round</Text>
              <Image
                resizeMode="contain"
                style={styles.image1}
                source={require('../../../images/13pin/thirteenpins.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Socket</Text>
              <Image
                resizeMode="contain"
                style={styles.image2}
                source={require('../../../images/13pin/socketthirteen.png')}
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
              <Text style={styles.imageText}>Tail Lights(L)</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={rareLeftLight}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Tail Lights(R)</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={rareRightLight}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Fog Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={fogBlueLight}
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
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Reverse Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image4}
                source={pinkReverseBack}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Power Supply +</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={newBattery}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Ignition</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={newIgnition}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
