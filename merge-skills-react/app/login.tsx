/**
 * ==========================================================
 * LOGIN.TSX — TELA DE AUTENTICAÇÃO (MergeSkills)
 * ==========================================================
 *
 * Rota: /login — primeira tela do app (definida em _layout.tsx)
 *
 * CONCEITO DA AULA 05: Estado local com useState
 * ─────────────────────────────────────────────────
 * Cada campo do formulário é um "Controlled Component":
 * o estado (useState) é a única fonte da verdade do valor.
 *
 * Fluxo:
 *   Usuário digita → onChangeText dispara → setEmail(texto)
 *   → React re-renderiza → TextInput exibe novo valor
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { StitchButton } from '../components/StitchButton';
import { StitchTextField } from '../components/StitchTextField';

// ─────────────────────────────────────────────────
// Interface de Estado da Tela (LoginUiState)
// ─────────────────────────────────────────────────
interface LoginUiState {
  email: string;
  password: string;
  isLoading: boolean;
  errorMessage: string | null;
}

export default function LoginScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  // ─────────────────────────────────────────────────
  // Estados do formulário (useState)
  // Cada campo é um Controlled Component — o estado
  // é a única fonte da verdade para o valor exibido.
  // ─────────────────────────────────────────────────
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Validação: e-mail preenchido e senha com mínimo 6 caracteres
  const isFormValid = email.trim().length > 0 && password.length >= 6;

  // ─────────────────────────────────────────────────
  // Ação de Login (simulada — Aula 05)
  // Integração real com Supabase será feita na Aula 07
  // ─────────────────────────────────────────────────
  function handleLogin() {
    if (!isFormValid) {
      setErrorMessage('Preencha o e-mail e a senha (mínimo 6 caracteres).');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    // Simula delay de rede (substituído pelo Supabase na Aula 07)
    setTimeout(() => {
      setIsLoading(false);
      // Navega para a tela principal (Showcase / FlatList)
      router.replace('/');
    }, 1500);
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/*
        KeyboardAvoidingView: garante que o teclado não cubra os inputs
        behavior: 'padding' funciona melhor no iOS
        behavior: 'height' funciona melhor no Android
      */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ── Header ── */}
          <View style={styles.headerSection}>
            <Text style={[Typography.displaySmall, { color: theme.primary }]}>
              MergeSkills
            </Text>
            <Text style={[Typography.headlineMedium, { color: theme.onSurface }]}>
              Bem-vindo de volta 👋
            </Text>
            <Text style={[Typography.bodyMedium, { color: theme.outline }]}>
              Entre para continuar sua trilha de aprendizado
            </Text>
          </View>

          {/* ── Formulário ── */}
          <View style={styles.formSection}>
            {/*
              StitchTextField com useState
              ─────────────────────────────
              value={email}            → valor vem do estado
              onValueChange={setEmail} → atualiza o estado ao digitar
            */}
            <StitchTextField
              label="E-mail"
              value={email}
              onValueChange={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <StitchTextField
              label="Senha"
              value={password}
              onValueChange={setPassword}
              placeholder="Mínimo 6 caracteres"
              secureTextEntry
              isError={password.length > 0 && password.length < 6}
              errorMessage="A senha deve ter pelo menos 6 caracteres"
            />

            {/* Exibição do erro geral */}
            {errorMessage ? (
              <Text style={[Typography.bodySmall, styles.errorBanner, { color: theme.error }]}>
                ⚠️ {errorMessage}
              </Text>
            ) : null}
          </View>

          {/* ── Ação Primária ── */}
          <StitchButton
            text={isLoading ? 'Entrando...' : 'Entrar'}
            onClick={handleLogin}
            enabled={!isLoading}
            loading={isLoading}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 32,
    maxWidth: 480,   // limita largura em tablets
    alignSelf: 'center',
    width: '100%',
  },
  headerSection: {
    marginBottom: 40,
    gap: 8,
  },
  formSection: {
    marginBottom: 24,
  },
  errorBanner: {
    marginTop: 4,
    marginBottom: 8,
  },
});
