import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../constants/style";

export default class About extends Component {
  render() {
    return (
      <View style={styles.safeArea}>
        <Text> My about page </Text>
      </View>
    );
  }
}
