import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "../Text";
import { styles } from "./styles";

export type ButtonProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export function Button({ title, style, textStyle, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}