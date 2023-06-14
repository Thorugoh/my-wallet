import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    height: 105,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.PURPLE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textContainer: {
    width: "60%",
    gap: 10
  },
  title: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 16,
    color: colors.WHITE
  },
  subtitle: {
    fontSize: 12,
    color: colors.WHITE
  }
})