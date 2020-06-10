import { StyleSheet } from "react-native"

//Packages

//Files
export default styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'white',
        
    },
    header: {
        height:('8%'),
        backgroundColor:'#4f87ff',
        elevation:4,
        // justifyContent:'center',
        paddingLeft:20,
        flexDirection:'row'
        // alignItems:'center',        

    },
    logo: {
        alignSelf:'center',
        width:('7%'),

    },
    textStyle1:{
        color:'white',
        alignSelf:'center',
        fontSize:20,
    },
    body:{
        flex:7,
        justifyContent:'center',
        alignItems:'center',        
        // borderColor:'white'
    },
    footer:{
flex:1,    },
    buttun:{

        width:('100%'),
        height:('65%'),
        justifyContent:'center',
        backgroundColor:'#4f87ff',
        elevation:4,

    },
    buttnText:{
        color:'white',
        alignSelf:'center',
        fontSize:15,
        fontWeight:'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },


});