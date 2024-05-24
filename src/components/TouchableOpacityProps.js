import { TouchableOpacity } from "react-native";

export default function TouchableOpacityProps({
  children,
  TouchStyle,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={TouchStyle}>
      {children}
    </TouchableOpacity>
  );
}
