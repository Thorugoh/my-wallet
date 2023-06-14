import { useEffect, useMemo, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
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
  const [formErrors, setFormErros] = useState<Partial<Form>>();

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

  function updateFormError(form: Partial<Form>) {
    setFormErros((currentErrors) => {
      if (currentErrors) return { ...currentErrors, ...form }
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
    if(formErrors?.password){
      updateFormError({password: ""});
    }
    return updateForm({ password: text });
  }

  function setEmail(text: string) {
    if(formErrors?.email){
      updateFormError({email: ""});
    }
    return updateForm({ email: text });
  }

  function setFirstName(text: string) {
    if(formErrors?.firstName){
      updateFormError({firstName: ""});
    }
    return updateForm({ firstName: text });
  }

  function setLastName(text: string) {
    if(formErrors?.lastName){
      updateFormError({lastName: ""});
    }
    return updateForm({ lastName: text });
  }

  function goToLogin() {
    navigation.navigate("Login");
  }

  function createAccount() {
    const requiredFields = ["password", "email", "firstName", "lastName"] as const;
    let hasError = false;
    
    requiredFields.forEach(field => {
      if(!form?.[field]){
        hasError = true;
        updateFormError({[field]: "This field is required."})
      }
    });

    if(form?.password && form.password.length < 8){
      hasError = true;
      updateFormError({password: "Your password must have at least 8 characters."});
      return;
    }

    if(hasError) return;

    if(!termsAccepted) {
      Alert.alert("You must accept terms to proceed");
      return;
    };

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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.form}>
        <TextInput 
          label="First Name" 
          onChangeText={setFirstName} 
          errorMessage={formErrors?.firstName} 
          hasError={!!formErrors?.firstName}
        />
        <TextInput 
          label="Last Name" 
          onChangeText={setLastName}
          errorMessage={formErrors?.lastName} 
          hasError={!!formErrors?.lastName} 
        />
        <TextInput 
          label="E-mail" 
          onChangeText={setEmail} 
          hasError={!!formErrors?.email}
          errorMessage={formErrors?.email} 
        />
        <TextInput
          label="Password"
          placeholder="Minimum 8 characters"
          secureTextEntry
          onChangeText={setPassword}
          hasError={!!formErrors?.password}
          errorMessage={formErrors?.password}
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
    </ScrollView>
  )
}


