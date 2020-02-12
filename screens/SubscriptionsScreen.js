import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubscriptionsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Subscriptions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default SubscriptionsScreen;
