import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const VideoItem = props => {
  return (
    <View style={styles.videoContainer}>
      <Image
        source={{ uri: props.video.thumbnailUrl }}
        style={styles.thumbnail}
      />
      <Text>{props.video.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 280,
    backgroundColor: "#ccc"
  },
  thumbnail: {
    width: "100%",
    height: 240
  }
});

export default VideoItem;
