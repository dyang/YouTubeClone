import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InboxScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Inbox</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default InboxScreen;
