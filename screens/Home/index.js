import React, { Component } from "react";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styles from "./style";
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('window');

const data = [
    {
        label: '5-Pins Large Round Socket',
    },
    {
        label: '6-Pins Small Round Socket',
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
        label: '7-Pins Heavy Duty Round Socket'
    },
    {
        label: '12-Pins Flat Socket'
    },
    {
        label: '13-Pins Round Socket'
    }

];
export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        value: '',

        }
    }


    _SelectedField = () => {
        if(this.state.value == ''){
            alert('Select Any One')
        }
        else if(this.state.value.label == '5-Pins Large Round Socket' ){
            this.props.navigation.navigate('_5PinsLarge')
        }
        else if(this.state.value.label == '6-Pins Small Round Socket' ){
            this.props.navigation.navigate('_6PinsSmall')
        }
        else if(this.state.value.label == '7-Pins Heavy Duty Round Socket' ){
            this.props.navigation.navigate('_7PinsHeavy')
        }
        else if(this.state.value.label == '7-Pins Flat Socket' ){
            this.props.navigation.navigate('_7PinsFlat')
        }
        else if(this.state.value.label == '7-Pins Small Round Socket' ){
            this.props.navigation.navigate('_7PinsSmall')
        }
        else if(this.state.value.label == '7-Pins Large Round Socket' ){
            this.props.navigation.navigate('_7PinsLarge')
        }
        else if(this.state.value.label == '12-Pins Flat Socket' ){
            this.props.navigation.navigate('_12PinsFlat')
        }
        else if(this.state.value.label == '13-Pins Round Socket' ){
            this.props.navigation.navigate('_13PinsRound')
        }
        else{
            alert('not select')
        }
    
    };
    render() {
        console.log(this.state.value)
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="default" hidden={true} showHideTransition={'fade'}></StatusBar>
                <View style={styles.header}>
                    <Image resizeMode="contain" style={styles.logo} source={require("../../images/ic_plug.png")}></Image>
                    <Text style={styles.textStyle1} >Choose And Select Trailer Socket</Text>
                </View>
                <View style={styles.body}>
                    <RadioButtonRN
                        boxStyle={
                            {
                                height:("10%"),
                                backgroundColor:'#cacaca',
                                elevation:width * .003,
                                width:("80%"),
                            }
                        }
                        textStyle={{
                            fontWeight:'bold'
                        }}
                        circleSize={10}
                        data={data}
                        selectedBtn={(e) => this.setState({value:e})}
                    />
                </View>
                <View style={styles.footer} >
                    <TouchableOpacity 
                    style={styles.buttun}
                    onPress={() => this._SelectedField()}
                    >
                        <View>

                            <Text style={styles.buttnText} >SELECT</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}