import { StyleProp, Text as TextBase, TextStyle } from "react-native";
import { styles } from "./styles";

type TextProps = {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
}


export function Text({ style, children }:TextProps){
    return (
        <TextBase style={[styles.defaultText, style]}>
            {children}
        </TextBase>
    );
}