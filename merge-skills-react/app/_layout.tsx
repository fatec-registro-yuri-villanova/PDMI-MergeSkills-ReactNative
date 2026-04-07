/**
 * ==========================================================
 * _LAYOUT.TSX — ROOT LAYOUT (PDMI Aula 04)
 * ==========================================================
 * 
 * Responsabilidades:
 * 1. Carregar Google Fonts (Inter e Outfit)
 * 2. Gerenciar Splash Screen
 * 3. Definir a pilha de navegação principal
 */
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold 
} from '@expo-google-fonts/inter';
import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold
} from '@expo-google-fonts/outfit';

// Mantém a Splash Screen visível enquanto os assets carregam
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
  });

  // Tratamento de Erros de Carregamento
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Esconde o Splash Screen apenas quando tudo estiver pronto
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Mantém a Splash Screen nativa visível
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
