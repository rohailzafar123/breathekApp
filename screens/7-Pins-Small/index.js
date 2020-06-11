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
//Packages

import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <View style={styles.header}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Back name="ios-arrow-back" size={30} color="#002468" />
            </TouchableOpacity>
          </View>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../images/logo2.jpg')}
          />
          <Text style={styles.textStyle1}>
          7-Pins Small Round Socket Devices
          </Text>
          <ActivityIndicator
            style={{
              marginHorizontal: 13,
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
        <View style={styles.body}>
          <View>
            <TouchableOpacity style={styles.unknownList}>
              <Text style={{fontSize: 20}}>Unknown Device</Text>
              <Text style={{fontSize: 12, marginTop: 4}}>
                4B:8D:D5:68:2A:4f
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
