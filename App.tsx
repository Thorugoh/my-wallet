import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
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
