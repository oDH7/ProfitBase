import { TextInput } from "react-native";
import { styles } from "../styles/Style";

export default function TesteInput({ txtplace, changeText, value }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={txtplace}
      value={value}
      onChangeText={changeText}
      keyboardType="numeric"
    />
  );
}
