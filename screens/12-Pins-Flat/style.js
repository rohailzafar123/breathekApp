import {StyleSheet} from 'react-native';

//Packages

//Files
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    // flex:1,

    height: '28%',
    backgroundColor: '#dbdbdb',
    elevation: 11,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBack: {
    alignSelf: 'center',
    marginRight: 20,
  },
  logo: {
    alignSelf: 'center',
    width: '9%',
    marginRight: 5,
    marginTop: 1,
  },
  textStyle1: {
    color: 'black',
    fontSize: 14.1,
    fontWeight: 'bold',
    marginRight: '12%',

  },
  scanButtun: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '154%',
  },
  body: {
    flex: 8,
  },
  unknownList: {
    height: 50,
    // justifyContent:'center',
    elevation: 1,
    // borderBottomWidth:1,
    backgroundColor: '#f3f3f396',
    paddingLeft: 5,
    marginTop: 3,
  },
});
