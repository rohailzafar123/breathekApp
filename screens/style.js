import { StyleSheet, Dimensions } from 'react-native';

//Packages
import { Fonts } from '../scr/utils/fonts';

//Files
const { width, height } = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: '28%',
    backgroundColor: 'white',
    elevation: width * .003,
  },
  header: {
    width: '100%',
    height: '100%',
  },
  headerInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack:{
    width: width * .04,
    // position: "absolute",
    marginLeft: width * .02
  },
  logo: {
    width: width * .1,
    // position: "absolute",
    // left: width * .08
  },
  textStyle1: {
    color: 'black',
    fontSize: width * .04,
    fontFamily: Fonts.Montserrat,
    position: "absolute",
    left: width * .13
    // fontWeight: 'bold',
  },
  activityIndicator:{
    position : "absolute",
    right : width * .13
  },
  scanView:{
    height: height * .05,
    borderWidth: 0.5,
    borderColor: '#b4b4b4d0',
    position : "absolute",
    right : width * .12
  },
  scanButtun:{
    position : "absolute",
    right :width * .02
  },
  body: {
    flex: 8,
  },
  unknownList: {
    height: height * .07,
    width: width * .9,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: width * .005,
    // borderBottomWidth:1,
    backgroundColor: 'white',
    paddingLeft: width * .02,
    marginTop: height * .02,
    borderRadius: width * .01
  },
});
