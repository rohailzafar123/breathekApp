import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from '../Home/index';
import _5PinsLarge from '../5-Pins-Large/index'
import _6PinsSmall from '../6-Pins-Small/index'
import _7PinsHeavy from '../7-Pins-Heavy/index'
import _7PinsFlat from '../7-Pins-Flat/index'
import _7PinsSmall from '../7-Pins-Small/index'
import _7PinsLarge from '../7-Pins-Large/index'
import _12PinsFlat from '../12-Pins-Flat/index'
import _13PinsRound from '../13-Pins-Round/index'
import pingpage5 from '../5-Pins-Large/inerScreen/Pinpage'
import pingpage6 from '../6-Pins-Small/inerScreen/Pinpage'
import pingpage7F from '../7-Pins-Flat/inerScreen/Pinpage'
import pingpage7S from '../7-Pins-Small/inerScreen/Pinpage'
import pingpage7L from '../7-Pins-Large/inerScreen/Pinpage'
import pingpage7H from '../7-Pins-Heavy/inerScreen/Pinpage'
import pingpage12 from '../12-Pins-Flat/inerScreen/Pinpage'
import pingpage13 from '../13-Pins-Round/inerScreen/Pinpage'



const AppNavigator = createStackNavigator(
    {
      Home,
      _5PinsLarge,
      _6PinsSmall,
      _7PinsHeavy,
      _7PinsFlat,
      _7PinsSmall,
      _7PinsLarge,
      _12PinsFlat,
      _13PinsRound,
      pingpage5,
      pingpage6,
      pingpage7F,
      pingpage7S,
      pingpage7L,
      pingpage7H,
      pingpage12,
      pingpage13,

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