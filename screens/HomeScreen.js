import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import LogoHeader from "../components/LogoHeader";
import CustomHeaderButton from "../components/CustomHeaderButton";
import VideoItem from "../components/VideoItem";
import { DATA } from "../data/dummy-data";

const HomeScreen = props => {
  const onPressVideo = video => {
    props.navigation.navigate("Video", { video: video });
  };

  const renderVideoItem = (item, index) => {
    return <VideoItem video={item.item} onPress={onPressVideo} />;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList data={DATA} renderItem={renderVideoItem} />
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = navigationData => {
  return {
    headerTitle: () => {
      return <LogoHeader />;
    },
    headerTitleAlign: "left",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="connect" iconName="cast-connected" />
          <Item title="camera" iconName="camcorder" />
          <Item title="search" iconName="magnify" />
        </HeaderButtons>
      );
    }
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default HomeScreen;
