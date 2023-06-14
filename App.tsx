import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { 
  useFonts, 
  Sora_400Regular, 
  Sora_500Medium,
  Sora_600SemiBold
} from "@expo-google-fonts/sora";
import { persistor, store } from './src/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/utils/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
  })

  if(!fontsLoaded){
    return null;
  }

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar style="auto" backgroundColor={colors.WHITE}/>
          <Routes />
        </PersistGate>
      </Provider>
  );
}
