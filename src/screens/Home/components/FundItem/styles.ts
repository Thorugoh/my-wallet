import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.GREY_300,
    width: 145,
    height: 140,
    justifyContent: "space-between",
    padding: 12,  
    marginVertical: 20,
  },
  title: {
    fontSize: 12,
    fontFamily: "Sora_600SemiBold",
  }, 
  delta: {
    color: colors.GREEN
  }
})