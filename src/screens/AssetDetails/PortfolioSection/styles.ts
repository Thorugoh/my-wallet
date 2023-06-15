import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 17,
    fontFamily: "Sora_600SemiBold"
  },
  icon: {
    marginTop: 4
  },
  creditsText:{
    fontFamily: "Sora_600SemiBold",
    fontSize: 24,
  },
  lastPurchased:{
    color: colors.GREY_700
  },
  buttonsContainer:{
    gap: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  sellButton: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderColor: colors.GREY_500,
    borderWidth: 1,
    height: 47,
    marginTop: 0,
  },
  sellButtonText: {
    color: colors.PURPLE,
  },
  retireButton: {
    flex: 1,
    height: 47,
    backgroundColor: colors.GREEN,
    borderColor: colors.GREEN,
    borderWidth: 1,
    marginTop: 0,
  },
  retireButtonText: {
    color: colors.PURPLE,
  },
  creditsNote: {
    color: colors.GREY_700,
    fontSize: 11,
    marginTop: 8,
  }


})