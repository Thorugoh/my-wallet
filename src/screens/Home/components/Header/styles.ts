import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY_100,
    backgroundColor: colors.WHITE,
    paddingBottom: 30
  },
  top: {
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: colors.WHITE,
    alignItems: "center", justifyContent: "space-between"
  },
  accountIcon: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: colors.GREY_100,
    padding: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flexDirection: "row", 
    alignItems: "center" 
  },
  titleText: { 
    fontFamily: "Sora_600SemiBold" 
  },
  chevronDown: {
     marginLeft: 2 
  }

})