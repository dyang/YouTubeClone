import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SubscriptionsScreen from "../screens/SubscriptionsScreen";
import InboxScreen from "../screens/InboxScreen";
import LibraryScreen from "../screens/LibraryScreen";
import TrendingScreen from "../screens/TrendingScreen";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Colors from "../constants/Colors";

const tabIcon = (iconName, tabInfo) => {
  return (
    <MaterialCommunityIcons
      name={iconName}
      size={25}
      color={tabInfo.tintColor}
    />
  );
};

const HomeNavigator = createStackNavigator({
  Home: HomeScreen
});
const routeConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: "Home",
      tabBarIcon: tabInfo => tabIcon("home", tabInfo)
    }
  },
  Trending: {
    screen: TrendingScreen,
    navigationOptions: {
      title: "Trending",
      tabBarIcon: tabInfo => tabIcon("fire", tabInfo)
    }
  },
  Subscriptions: {
    screen: SubscriptionsScreen,
    navigationOptions: {
      title: "Subscriptions",
      tabBarIcon: tabInfo => tabIcon("youtube-subscription", tabInfo)
    }
  },
  Inbox: {
    screen: InboxScreen,
    navigationOptions: {
      title: "Inbox",
      tabBarIcon: tabInfo => tabIcon("email", tabInfo)
    }
  },
  Library: {
    screen: LibraryScreen,
    navigationOptions: {
      title: "Library",
      tabBarIcon: tabInfo => tabIcon("library-video", tabInfo)
    }
  }
};

const AppNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(routeConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent
        }
      })
    : createMaterialBottomTabNavigator(routeConfig, {
        shifting: false,
        activeColor: Colors.accent,
        barStyle: {
          backgroundColor: "white"
        }
      });
export default createAppContainer(AppNavigator);
