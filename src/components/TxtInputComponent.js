import { TextInput } from "react-native";

export default function TxtInputComponent({ txtplace, changeText, value }) {
  return (
    <TextInput placeholder={txtplace} value={value} onChangeText={changeText} />
  );
}
