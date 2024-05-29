import React from "react";
import { Text as RNText } from "react-native";

export default function TextProps({ textStyle, text }) {
  return <RNText style={textStyle}>{text}</RNText>;
}
