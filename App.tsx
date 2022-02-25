import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import theme from './src/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent'/>
      <Home />
    </ThemeProvider>
  );
}
