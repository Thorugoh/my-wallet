import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PURPLE,
    borderRadius: 4,
    marginTop: 37,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
  },
  title: {
    color: colors.WHITE,
    fontSize: 16,
  }
})