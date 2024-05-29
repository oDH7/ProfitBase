import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientProps({ colors, style, children }) {
  return (
    <LinearGradient colors={colors} style={style}>
      {children}
    </LinearGradient>
  );
}
