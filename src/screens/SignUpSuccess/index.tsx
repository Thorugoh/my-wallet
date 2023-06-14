import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { ScreenAuthProps } from "../../routes/app.auth.routes";
import { login as loginAction } from "../../slices/userSlice";

import { styles } from "./styles";
import { Steps } from "../../components/Steps";

export type SignUpSuccessScreenProps = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  }
}

type SignUpSuccessProps = ScreenAuthProps<"SignUpSuccess">;

export function SignUpSuccess({ navigation, route }: SignUpSuccessProps) {
  const dispatch = useDispatch();
  const { user } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerBackVisible: false,
      headerTitle: props => <Steps totalSteps={3} completeSteps={3} />,
    });
  }, [navigation]);

  function goToHome() {
      dispatch(loginAction({
        id: "some-uui", 
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.title}>Your account has been successfully created. Please proceed to the app.</Text>
      
      <Button title="Continue" onPress={goToHome} />
      
    </View>
  )
}


