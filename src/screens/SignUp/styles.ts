import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  loginText: {
    marginTop: 13,
    alignSelf: "center",
    fontSize: 12,
    color: colors.GREY_700
  },
  termsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  terms: {
    marginTop: 19,
    alignSelf: "center",
    fontSize: 12,
    color: colors.GREY_700
  },
  termsLink: {
    color: colors.BLACK,
  },
  loginLink: {
    textDecorationLine: "underline",
    color: colors.BLACK,
  },
})