import React, { Component } from "react";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from "./style";
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/Feather';

const data = [
    {
        label: '5-Pins Large Round Socket'
    },
    {
        label: '6-Pins Small Round Socket'
    },
    {
        label: '7-Pins Flat Socket'
    },
    {
        label: '7-Pins Small Round Socket'
    },
    {
        label: '7-Pins Large Round Socket'
    },
    {
        label: '6-Pins Heavy Duty Round Socket'
    },
    {
        label: '12-Pin Flat Socket'
    },
    {
        label: '13-Pin Round Socket'
    }

];
export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        value: null,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image resizeMode="contain" style={styles.logo} source={require("../../images/ic_plug.png")}></Image>
                    <Text style={styles.textStyle1} >Choose And Select Trailor Socket</Text>
                </View>
                <View style={styles.body}>
                    <RadioButtonRN
                        boxStyle={
                            {
                                height:("10%"),
                                backgroundColor:'#d6d8dd70',
                                elevation:3,
                                width:("80%"),
                            }
                        }
                        textStyle={{
                            fontWeight:'bold'
                        }}
                        circleSize={10}
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                    />
                </View>
                <View style={styles.footer} >
                    <TouchableOpacity style={styles.buttun} >
                        <View>

                            <Text style={styles.buttnText} >SELECT</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}