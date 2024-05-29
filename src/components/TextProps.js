import React from "react";
import { Text as RNText } from "react-native";

export default function TextProps({ textStyle, text, onPress }) {
  return (
    <RNText style={textStyle} onPress={onPress}>
      {text}
    </RNText>
  );
}
