import React from "react";
import { Platform } from "react-native";
import {
	HeaderButton as RNHeaderButton,
	HeaderButtonProps,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";


const HeaderButton = (props: HeaderButtonProps) => {
	return (
		<RNHeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === "android" ? "white" : Colors.primaryColor}
		/>
	);
};

export default HeaderButton;