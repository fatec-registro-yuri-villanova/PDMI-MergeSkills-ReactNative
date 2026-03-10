/**
 * ==========================================================
 * _LAYOUT.TSX — NAVEGAÇÃO COM EXPO ROUTER
 * ==========================================================
 *
 * Este arquivo define a ESTRUTURA de navegação do app.
 * Cada <Stack.Screen> corresponde a um arquivo na pasta app/.
 *
 * Expo Router usa navegação baseada em arquivos:
 *   app/index.tsx  → rota "/"
 *   app/login.tsx  → rota "/login"
 *   app/hello.tsx  → rota "/hello"
 */
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <RootLayoutNav />
    </SafeAreaProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="hello" options={{ headerShown: true, title: 'Meu Primeiro Componente' }} />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" options={{ headerShown: true, title: 'Criar Conta' }} />
    </Stack>
  );
}
