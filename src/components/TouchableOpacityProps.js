import { TouchableOpacity } from "react-native";

export default function TouchableOpacityProps({
  children,
  TouchStyle,
  OnPress,
}) {
  return (
    <TouchableOpacity onPress={OnPress} style={TouchStyle}>
      {children}
    </TouchableOpacity>
  );
}
