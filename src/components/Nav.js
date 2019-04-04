import React from "react";
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

// import HomeScreen from './HomeScreen';
// import DetailScreen from './DetailScreen';
// import AnotherScreen from './AnotherScreen';

import RootComponent from './RootComponent';
import DetailScreen from './DetailScreen';
import AnotherScreen from './AnotherScreen';
import DriveSearch from './actions/DriveSearch';
//import DriveRegist from './actions/DriveRegist';
import SignUp from './actions/SignUp';

const Nav = createStackNavigator(
  {
    Home: {
      screen: RootComponent
    },
    Detail: {
      screen: DetailScreen
    },
    Another: {
      screen: AnotherScreen
    },
    DriveSearch: {
      screen: DriveSearch
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "Home", HeaderMode: "none"
  }
);

export default createAppContainer(Nav);



//const Nav = createAppContainer(AppNavigator);
