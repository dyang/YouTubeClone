import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrendingScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Trending</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default TrendingScreen;
