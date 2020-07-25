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
                source={require('../../../images/13pin/leftyellow_b_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Right Indicator</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/right_w_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Tail Lights(R)</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/rare_l_w_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Tail Lights(L)</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/rare_r_w_0.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Fog Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/fogblue.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Stop Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/newstop.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Reverse Lights</Text>
              <Image
                resizeMode="contain"
                style={styles.image4}
                source={require('../../../images/13pin/pinkreverse.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Power Supply +</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/newbatt.png')}
              />
            </View>
            <View style={styles.imageBox}>
              <Text style={styles.imageText}>Ignition</Text>
              <Image
                resizeMode="contain"
                style={styles.image3}
                source={require('../../../images/13pin/newigni.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
