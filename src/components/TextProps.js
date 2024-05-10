import { Text } from "react-native";

export default function TextProps({ Texto, TextStyle }) {
  return <Text style={TextStyle}> {Texto}</Text>;
}
