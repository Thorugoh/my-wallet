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
  tabTitle: {
    fontFamily: "Sora_600SemiBold",
    color: colors.GREY_700,
    marginRight: 2
  },
  tabTitleSelected: {
    color: colors.BLACK,
  },
  tabTitleContainer: {
    borderBottomWidth: 3,
    borderBottomColor: colors.WHITE
  },
  tabTitleContainerSelected: {
    borderBottomColor: colors.PURPLE,
  },
  tabs: {
    gap: 18,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  infoIcon: {
    marginTop: 4
  },

  contentContainer: {
    width: 205,
    borderWidth: 1,
    borderColor: colors.GREY_300,
    borderRadius: 4,
    marginRight: 10,
  },
  contentBody: {
    padding: 10,
  },
  contentTitle: {
    fontSize: 12,
  },
  contentLink: {
    marginTop: 8,
    fontSize: 12,
    textDecorationLine: "underline"
  },
  portalLogoImage: {
    width: 80,
    height: 18,
    marginBottom: 8
  },
  coverImage: {
    width: "100%",
    height: 100,
  }
})