import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS == "android" ? 25 : 0
  }
});
