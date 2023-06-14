import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: colors.WHITE
  },
  title: {
    fontSize: 18,
    fontFamily: "Sora_600SemiBold",
    marginTop: 20,
    marginBottom: 34,
    alignSelf: "center"
  },
  form: {
    gap: 20,
  },
  signUpText: {
    marginTop: 13,
    alignSelf: "center",
    fontSize: 12,
    color: colors.GREY_700
  },
  signUpLink: {
    textDecorationLine: "underline"
  }
})