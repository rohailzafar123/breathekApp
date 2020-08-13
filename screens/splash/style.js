import { StyleSheet,Dimensions } from "react-native"

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#234A81',
        
        // alignItems:'center',        
    },
    logoContainer: {
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        width:('15%'),

    },
    activityIndi:{
        position:'relative',
        bottom:height * .0,
    },
    textHeading:{
        flexDirection:'row',
        
    },
    textStyle1:{
        color:'white'
    }



});