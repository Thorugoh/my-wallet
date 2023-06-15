import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 17,
  },
  item: {
    flex: 1,
  },
  itemTitle: {
    color: colors.GREY_700,
    marginRight: 2
  },
  itemTitleContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  items: {
    gap: 18,
    flexDirection: "row", 
    flexWrap: "wrap",
    paddingRight: 60,
    justifyContent: "space-between"
  },
  infoIcon: {
    marginTop: 4
  }
})