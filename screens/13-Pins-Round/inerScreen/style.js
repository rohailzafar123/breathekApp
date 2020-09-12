import {StyleSheet, Dimensions} from 'react-native';
import { Fonts } from '../../../scr/utils/fonts';

//Packages
const {width, height} = Dimensions.get('window');
//Files
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f97ff',
  },
  header: {
    height: height * 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    elevation: width * .005,
    borderBottomLeftRadius:width * .05,
    borderBottomRightRadius:width * .05,
    paddingHorizontal:width * .03
  },
  logo: {
    width: width * .04,
  },
  uperBody: {
    backgroundColor: '#2f97ff',
    height: height * 0.16,
    alignItems: 'center',
    justifyContent:'center'
  },
  loadingLine: {
    width: '75%',
    position:'absolute',
    
  },
  loadingLineAbsolut: {
    width: '75%',
    position:'absolute',
    // bottom:width * .0
  },
  wifi: {
    // marginTop: 12,
    width: width * .1,
    height: height * .05,
    position: 'absolute',

  },
  wifiAbsulute: {
    // marginTop: 11,
    width: width * .1,
    height: height * .05,
    position: 'absolute',
  },
  lowerBody: {
    backgroundColor: 'white',
    height:height * .76,
    borderTopLeftRadius:width * .1,
    borderTopRightRadius:width * .1,
    paddingTop:height * .04

  },

  imageBox: {
    height: height * 0.28,
    width: width * 0.44,
    backgroundColor: '#003a64',
    justifyContent:'center',
    alignItems:'center',
    margin: 5,
    elevation:width * .02,
    borderRadius:width * .05
  },
  brakeText: {
    color: 'white',
    fontSize: height * .025,
    fontFamily:Fonts.Montserrat,
    bottom:height * .05,
    alignSelf: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: height * .02,
    position:'absolute',
    fontFamily:Fonts.Montserrat,
    top:height * .01,
    alignSelf: 'center',
  },
  image1: {
    alignSelf: 'center',
    width: '100%',
    position:'absolute',
    borderRadius:width * .01


  },
  image2: {
    alignSelf: 'center',
    width: '55%',
    position:'absolute',
    borderRadius:width * .01


  },
  image3: {
    width: '80%',
    alignSelf: 'center',
    position:'absolute',
    borderRadius:width * .01

  },
  image4: {
    width: '65%',
    bottom: 93,
    alignSelf: 'center',
  },
});
