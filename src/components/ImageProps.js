import React from "react";
import { Image } from "react-native";

export default function ImageProps({
  ImageStyle,
  ImageUri,
  resizeMode = "contain",
}) {
  return <Image style={ImageStyle} source={ImageUri} resizeMode={resizeMode} />;
}
