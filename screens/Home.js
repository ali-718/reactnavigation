import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Platform
} from "react-native";
import { Icon } from "native-base";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={style.header}>
        <Text> My home </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MyAbout")}
        >
          <Text>Take me to about</Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Text>Drawer Open</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Icon name="home" type="Feather" style={{ fontSize: 50 }} />
          </TouchableOpacity>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  header: {
    paddingTop: Platform.OS == "android" ? 25 : 0
  }
});
