import {StyleSheet, Dimensions} from 'react-native';

//Packages
const {width, height} = Dimensions.get('window');
//Files
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff7e',
  },
  header: {
    height: height * 0.08,
    backgroundColor: 'black',
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 8,
  },
  logo: {
    alignSelf: 'center',
    width: '9%',
    marginLeft: 5,
    marginTop: 1,
  },
  uperBody: {
    backgroundColor: '#350338',
    height: height * 0.16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 18,
    borderColor: '#3f1b41',
  },
  loadingLine: {
    width: '60%',
    left: 15,
  },
  wifi: {
    marginTop: 12,
    width: '10%',
    height: '80%',
  },
  lowerBody: {
    backgroundColor: '#3f1b41',
  },

  imageBox: {
    height: height * 0.28,
    width: width * 0.44,
    backgroundColor: '#47445a',
    margin: 5,
  },
  imageText: {
    color: 'white',
    fontSize: 11,
    alignSelf: 'center',
    marginTop: 12,
  },
  image1: {
    alignSelf: 'center',
    width: '100%',
    bottom: 15,
  },
  image2: {
    alignSelf: 'center',
    width: '100%',
    top: 30,
  },
  image3: {
    width: '80%',
    bottom: 168,
    alignSelf: 'center',
  },
});
