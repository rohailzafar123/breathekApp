import { StyleSheet, Dimensions } from "react-native"
import {Fonts} from '../../scr/utils/fonts';

//Packages

//Files
const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#4f87ff',

        // alignItems:'center',        
    },
    logoContainer: {
        flex: 1,
        width: width * 1,
        height: height * .7,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical:height * .1,

    },
    logo: {
        width: width * .4,
        height: width * .4,

    },
    activityIndi: {
        position: 'relative',
        bottom: height * .0,
    },
    textHeading: {
        flexDirection: 'row',

    },
    textStyle1: {
        color: 'white',
        fontFamily : Fonts.Handlee,

    }



});