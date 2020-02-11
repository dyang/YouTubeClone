import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LibraryScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Library</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default LibraryScreen;
