import {StyleSheet,Dimensions} from 'react-native';

//Packages

//Files
const { width, height } = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer:{
    height: '28%',
    backgroundColor: '#dbdbdb',
    elevation: 11,
  },
  header: {
    // flex:1,
    width:'100%',
    height:'100%',
    // alignSelf:'center'
  },
  headerInner:{
    flex: 1, flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    width: '9%',
  },
  textStyle1: {
    color: 'black',
    fontSize: width * .035,
    fontWeight: 'bold',
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
