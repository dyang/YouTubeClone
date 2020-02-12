import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Colors from "../constants/Colors";

const subtitle = video => {
  return (
    video.author + " · " + video.numberOfViews + " views · " + video.createdAt
  );
};

const VideoItem = props => {
  return (
    <View style={styles.videoContainer}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: props.video.thumbnailUrl }}
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.leftContainer}>
          <Image
            source={{ uri: props.video.authorImageUrl }}
            style={styles.authorImage}
          />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {props.video.title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {subtitle(props.video)}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={23}
            color={Colors.primary}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1
  },
  thumbnailContainer: {
    width: "100%",
    height: 240
  },
  thumbnail: {
    width: "100%",
    height: "100%"
  },
  detailsContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginBottom: 10
  },
  leftContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden"
  },
  authorImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  middleContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 14,
    paddingTop: 5
  },
  rightContainer: {
    width: 20
  }
});

export default VideoItem;
