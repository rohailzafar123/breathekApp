import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Home from '../Home/index';
import Selection1 from '../components/slider/From2'
import Selection2 from '../components/slider/From3'

const AppNavigator = createStackNavigator(
    {
    Home,
    Selection1,
    Selection2,
    
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