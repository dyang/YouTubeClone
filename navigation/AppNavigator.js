import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SubscriptionsScreen from "../screens/SubscriptionsScreen";
import InboxScreen from "../screens/InboxScreen";
import LibraryScreen from "../screens/LibraryScreen";
import TrendingScreen from "../screens/TrendingScreen";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ activeTintColor: Colors.primaryColor }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              );
            }
          }}
        />
        <Tab.Screen
          name="Trending"
          component={TrendingScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="fire" size={size} color={color} />
              );
            }
          }}
        />
        <Tab.Screen
          name="Subscriptions"
          component={SubscriptionsScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="youtube-subscription"
                  size={size}
                  color={color}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={InboxScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="email"
                  size={size}
                  color={color}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="library-video"
                  size={size}
                  color={color}
                />
              );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
