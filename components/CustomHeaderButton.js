import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={MaterialCommunityIcons}
    iconSize={23}
    color={Colors.primary}
  />
);

export default CustomHeaderButton;
