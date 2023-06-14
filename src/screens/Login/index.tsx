import { useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/Input";
import { Text } from "../../components/Text";
import { ScreenAuthProps } from "../../routes/app.auth.routes";
import { login as loginAction } from "../../slices/userSlice";

import { styles } from "./styles";

type LoginProps = ScreenAuthProps<"Login">;

function Login({ navigation }: LoginProps) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function login() {
    if(email && password){
      dispatch(loginAction({
        id: "some-uui",
        firstName: "Victor",
        lastName: "Hugo",
        email,
      }));
    }
  }

  function goToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput label="E-mail" onChangeText={setEmail} />
        <TextInput
          label="Password"
          placeholder="Minimum 8 characters"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <Button title="Login" onPress={login} />
      <Text style={styles.signUpText}>Don't have an account?{` `}
        <Text
          onPress={goToSignUp}
          style={[styles.signUpText, styles.signUpLink]}>
          Sign Up
        </Text>
        {` `}here
      </Text>
    </View>
  )
}


export { Login };
