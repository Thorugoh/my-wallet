import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: colors.WHITE,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "Sora_600SemiBold",
    alignSelf: "center"
  }
})