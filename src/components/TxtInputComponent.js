import { TextInput } from "react-native";

export default function TxtInputProps({ txtplace, changeText, value }) {
  return (
    <TextInput placeholder={txtplace} value={value} onChangeText={changeText} />
  );
}
