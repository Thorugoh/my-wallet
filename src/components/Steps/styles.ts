import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  stepContainer: {
    gap: 5, 
    flexDirection: "row",
  },
  stepItem: {
    backgroundColor: colors.GREY_100,
    height: 5, 
    width: 50, 
    borderRadius: 100
  },
  completeStep: {
    backgroundColor: colors.PURPLE,
  }
})