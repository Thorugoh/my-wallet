import { StyleProp, Text as TextBase, TextStyle, TextProps as TextPropsBase } from "react-native";
import { styles } from "./styles";

type TextProps = TextPropsBase & {
    style?: StyleProp<TextStyle>;
    children: React.ReactNode;
}


export function Text({ style, children, ...rest }:TextProps){
    return (
        <TextBase {...rest} style={[styles.defaultText, style]}>
            {children}
        </TextBase>
    );
}