import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/routes';
import { useFonts, Sora_400Regular, Sora_600SemiBold} from "@expo-google-fonts/sora";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  })

  if(!fontsLoaded){
    return null;
  }

  return (
      <>
        <StatusBar style="auto" />
        <Routes />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
