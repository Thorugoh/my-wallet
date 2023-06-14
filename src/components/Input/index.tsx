import { useState } from "react";
import { 
    View, 
    TextInput as TextInputBase,
    TextInputProps as TextInputPropsBase,
    StyleProp,
    ViewStyle,
} from "react-native";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons"
import { Text } from "../Text";

import {styles} from "./styles";
import { colors } from "../../utils/colors";

export type TextInputProps = TextInputPropsBase & {
    label?: string;
    style?: StyleProp<ViewStyle>;
    secureTextEntry?: boolean;
}

export function TextInput({label, style, secureTextEntry, ...rest}: TextInputProps){
    const [showInputValue, setShowInputValue] = useState<boolean>(!!secureTextEntry);

    const secureIcon = showInputValue ? "eye-off-outline" : "eye-outline";
    function toggleShowInputValue(){
        setShowInputValue(currentValue => !currentValue);
    };

    return(
        <View style={style}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.textInputContainer}>
                <TextInputBase style={styles.textInput} {...rest} secureTextEntry={showInputValue} />
                {
                    secureTextEntry && 
                    <MaterialCommunityIcon 
                        name={secureIcon} 
                        size={20} 
                        color={colors.GREY_700}
                        onPress={toggleShowInputValue}
                    />
                }
            </View>
        </View>
    )
}