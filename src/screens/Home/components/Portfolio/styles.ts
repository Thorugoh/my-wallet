import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 24,
    lineHeight: 30,
    verticalAlign: "bottom"
  },
  return: {
    color: colors.GREEN,
    lineHeight: 18,
    verticalAlign: "bottom"
  },
  rewardsButton: {
    flexDirection: "row",
    backgroundColor: colors.LIGHT_PURPLE,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 9
  },
  coinsIcon: {
    marginRight: 5
  },
  rewardsButtonText: {
    fontFamily: "Sora_600SemiBold",
    color: colors.PURPLE,
    textAlignVertical:
      "bottom"
  }

})