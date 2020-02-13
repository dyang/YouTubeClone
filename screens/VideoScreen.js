import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const VideoScreen = props => {
  const video = props.navigation.getParam("video");
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.text}>Video {video.title}</Text>
      </View>
    </SafeAreaView>
  );
};

VideoScreen.navigationOptions = navigationData => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  text: {
    fontSize: 22,
    textAlign: "center"
  }
});

export default VideoScreen;
