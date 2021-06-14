import {StyleSheet, Dimensions} from 'react-native';

//Packages
import {Fonts} from '../../scr/utils/fonts';

//Files
const {width, height} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: '28%',
    backgroundColor: 'white',
    elevation: width * 0.003,
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
  goBack: {
    width: width * 0.04,
    // position: 'absolute',
    marginLeft: width * 0.02,
  },
  logo: {
    width: width * 0.1,
    // position: 'absolute',
    // left: width * 0.08,
  },
  textStyle1: {
    color: 'black',
    fontSize: width * 0.04,
    fontFamily: Fonts.Montserrat,
    position: 'absolute',
    left: width * 0.13,
    // fontWeight: 'bold',
  },
  activityIndicator: {
    position: 'absolute',
    right: width * 0.13,
  },
  scanView: {
    height: height * 0.05,
    borderWidth: 0.5,
    borderColor: '#b4b4b4d0',
    position: 'absolute',
    right: width * 0.12,
  },
  scanButtun: {
    position: 'absolute',
    right: width * 0.02,
  },
  body: {
    flex: 8,
  },
  unknownList: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: width * 0.005,
    // borderBottomWidth:1,
    backgroundColor: 'white',
    paddingLeft: width * 0.02,
    marginTop: height * 0.02,
    borderRadius: width * 0.01,
  },
});
