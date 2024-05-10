import { Image } from "react-native";

export default function ImageProps({ ImageStyle, ImageUri }) {
  return <Image style={ImageStyle} source={ImageUri} />;
}
