import React, {Component} from 'react';

import {Text, View, Image} from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import BleManager from 'react-native-ble-manager';
//Packagess

import styles from './style';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {SceneView} from 'react-navigation';

export default class Splash extends Component {
  timeout = 0;
  constructor() {
    super();
    this.state = {
      rssi_strength: 0,
      leftIndi:false,
      rightIndi:false,
      tailLig:false,
      stopLig:false,
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
    BleManager.connect('4C:11:AE:D9:28:52')
      .then(() => {
        // Success code
        console.log('Connected');
      })
      .then(() => {
        //read rssi
        this.timeout = setInterval(() => {
          BleManager.readRSSI('4C:11:AE:D9:28:52')
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
        }, 500);
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
    !this.state.leftIndi? (leftIndicator=require('../../../images/5pin/left_b_0.png')):(leftIndicator=require('../../../images/5pin/left_b_0Active.png'));
    let rightIndicator;
    !this.state.rightIndi? (rightIndicator=require('../../../images/5pin/right_w_0.png')):(rightIndicator=require('../../../images/5pin/right_w_0active.png'));
    let tailLight;
    !this.state.tailLig? (tailLight=require('../../../images/5pin/rare_both_w_0.png')):(tailLight=require('../../../images/5pin/rare_both_w_0active.png'));
    let stopLight;
    !this.state.stopLig? (stopLight=require('../../../images/5pin/newstop.png')):(stopLight=require('../../../images/5pin/newstopActive.png'));
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
            source={require('../../../images/5pin/barone.png')}
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
              <Text style={styles.imageText}>5-Pins Round</Text>
              <Image
                resizeMode="contain"
                style={styles.image1}
                source={require('../../../images/5pin/fivepins.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Socket</Text>
              <Image
                resizeMode="contain"
                style={styles.image2}
                source={require('../../../images/5pin/plugfive.png')}
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
              <Text style={styles.imageText}>Tail light</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={tailLight}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Stop light</Text>
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
