import React from "react";
import { View, StyleSheet, Image } from "react-native";

const LogoHeader = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 60,
    width: "100%",
    paddingVertical: 10
  },
  logoContainer: {
    width: 100,
    height: "100%"
  },
  logo: {
    width: "100%",
    resizeMode: "contain"
  }
});

export default LogoHeader;
