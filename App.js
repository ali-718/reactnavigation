import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Home from "./screens/Home";
import About from "./screens/about";

// const Stack = createStackNavigator(
//   {
//     MyHome: {
//       screen: Home
//     },
//     MyAbout: {
//       screen: About
//     }
//   },
//   {
//     headerMode: "none"
//   }
// );

const Stack = createDrawerNavigator({
  MyHome: {
    screen: Home
  },
  MyAbout: {
    screen: About
  }
});

const MainStack = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return <MainStack />;
  }
}
