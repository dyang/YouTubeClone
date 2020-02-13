import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

const Touchable = props => {
  const Component =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return <Component {...props}>{props.children}</Component>;
};

export default Touchable;