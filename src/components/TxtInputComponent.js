import React from "react";
import { TextInput } from "react-native";
import { styles } from "../styles/Style";
import TextProps from "../components/TextProps";

export default function TesteInput({ txtplace, changeText, value }) {
  return (
    <TextInput
      style={[
        styles.input,
        { fontFamily: "Anta-Regular", fontSize: 9, textAlign: "center" },
      ]}
      placeholder={txtplace}
      value={value}
      onChangeText={changeText}
      keyboardType="numeric"
      editable={true}
    />
  );
}
