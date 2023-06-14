import { useEffect, useMemo, useState } from "react";
import { View } from "react-native";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/Input";
import { Text } from "../../components/Text";
import { ScreenAuthProps } from "../../routes/app.auth.routes";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons"

import { styles } from "./styles";
import { colors } from "../../utils/colors";
import { Steps } from "../../components/Steps";

type SignUpProps = ScreenAuthProps<"SignUp">;

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function SignUp({ navigation }: SignUpProps) {
  const [form, setForm] = useState<Partial<Form>>();
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const currentStep = useMemo(() => {
    let step = 0;
    if(termsAccepted) {
      step++;
    }
    if(form?.email && form?.firstName && form?.lastName && form.password){
      step++;
    }

    return step;
  }, [termsAccepted, form])

  const checkIconName = termsAccepted ? "checkbox-outline" : "checkbox-blank-outline"
  function updateForm(form: Partial<Form>) {
    setForm((currentForm) => {
      if (currentForm) return { ...currentForm, ...form }
      return form
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: true,
      headerTitleAlign: "center",
      headerTitle: props => <Steps totalSteps={3} completeSteps={currentStep} />,
    });
  }, [navigation, currentStep])
  

  function setPassword(text: string) {
    return updateForm({ password: text });
  }

  function setEmail(text: string) {
    return updateForm({ email: text });
  }

  function setFirstName(text: string) {
    return updateForm({ firstName: text });
  }

  function setLastName(text: string) {
    return updateForm({ lastName: text });
  }

  function goToLogin() {
    navigation.navigate("Login");
  }

  function createAccount() {
    if(!termsAccepted) return;
    if (form?.email && form?.password && form.firstName && form.lastName) {
      navigation.navigate("SignUpSuccess", {
        user: { email: form.email, firstName: form.firstName, lastName: form.lastName }
      });
    }
  }

  function toggleAcceptTerms(){
    setTermsAccepted(currentValue => !currentValue);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.form}>
        <TextInput label="First Name" onChangeText={setFirstName} />
        <TextInput label="Last Name" onChangeText={setLastName} />
        <TextInput label="E-mail" onChangeText={setEmail} />
        <TextInput
          label="Password"
          placeholder="Minimum 8 characters"
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.termsContainer}>
        <MaterialCommunityIcon name={checkIconName} size={20} color={colors.GREY_300} onPress={toggleAcceptTerms} />
        <Text style={styles.terms}>I am over 18 years of age and I have read and agree to the{` `}
          <Text style={[styles.terms, styles.termsLink]}>Terms of Service</Text> and{` `}
          <Text style={[styles.terms, styles.termsLink]}>Privacy Policy</Text>
        </Text>
      </View>
      <Button title="Create account" onPress={createAccount} />
      <Text style={styles.loginText}>Already have an account?{` `}
        <Text
          onPress={goToLogin}
          style={[styles.loginText, styles.loginLink]}>
          Login Here
        </Text>
      </Text>
    </View>
  )
}


