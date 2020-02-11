import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default HomeScreen;
