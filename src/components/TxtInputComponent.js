import { TextInput } from "react-native";
import { styles } from "../styles/Style";

export default function TxtInputComponent({ txtplace, changeText, value }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={txtplace}
      value={value}
      onChangeText={changeText}
    />
  );
}
