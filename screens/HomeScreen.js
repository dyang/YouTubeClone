import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import LogoHeader from "../components/LogoHeader";
import CustomHeaderButton from "../components/CustomHeaderButton";

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Home</Text>
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
