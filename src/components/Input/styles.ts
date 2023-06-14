import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.GREY_100,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        fontFamily: "Sora_400Regular",
        color: colors.BLACK
    },
    label: {
        fontSize: 11,
        color: colors.GREY_700,
        marginBottom: 5,
        fontFamily: "Sora_500Medium"
    }
})