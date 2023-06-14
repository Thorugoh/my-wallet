import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "47%",
    height: 215,
    backgroundColor: colors.GREY_100,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 21,
  },
  title: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 12,
    width: "70%"
  }

})