import React from "react";
import { enableScreens } from "react-native-screens";
import AppContainer from "./navigation/AppNavigator";

enableScreens();

export default function App() {
  return <AppContainer />;
}
