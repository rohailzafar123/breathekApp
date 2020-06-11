import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from '../Home/index';
import _5PinsLarge from '../5-Pins-Large/index'
import _6PinsSmall from '../6-Pins-Small/index'
import _6PinsHeavy from '../6-Pins-Heavy/index'
import _7PinsFlat from '../7-Pins-Flat/index'
import _7PinsSmall from '../7-Pins-Small/index'
import _7PinsLarge from '../7-Pins-Large/index'
import _12PinsFlat from '../12-Pins-Flat/index'
import _13PinsRound from '../13-Pins-Round/index'
import pingpage5 from '../5-Pins-Large/inerScreen/Pinpage'


const AppNavigator = createStackNavigator(
    {
      Home,
      _5PinsLarge,
      _6PinsSmall,
      _6PinsHeavy,
      _7PinsFlat,
      _7PinsSmall,
      _7PinsLarge,
      _12PinsFlat,
      _13PinsRound,
      pingpage5
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
);
// const Drawer = createDrawerNavigator(
//   {
//     Map
//   },
//   {
//     headerModer: 'none',

//   },
// );
export default createAppContainer(AppNavigator)