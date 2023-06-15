import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    paddingTop: 26,
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerTitle: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 17
  },
  headerSubtitle: {
    color: "#808080",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    fontFamily: "Sora_600SemiBold",
  },
  noteContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.GREY_100,
    borderRadius: 4,
  },
  noteText: {
    color: colors.GREY_700,
    fontSize: 12,
  },
  buyIcon: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  tabs: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "95%"
  },
  tab:{
    borderRadius: 4,
    padding: 8,
    backgroundColor: colors.WHITE,
    justifyContent: "center",
    alignItems: "center"
  },
  tabSelected:{
    backgroundColor: colors.LIGHT_PURPLE,
  },
  periodTab: {
    color: colors.GREY_700,
    fontFamily: "Sora_500Medium",
    textAlign: "center",
    textAlignVertical: "center"
  },
  periodTabSelected: {
    color: colors.PURPLE,
    borderRadius: 4,
    width: 35,
    textAlign: "center",
    textAlignVertical: "center"
  }
  
})