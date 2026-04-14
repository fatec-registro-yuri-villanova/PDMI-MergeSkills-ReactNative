/**
 * ==========================================================
 * LOGIN.TSX — TELA DE AUTENTICAÇÃO (MergeSkills)
 * ==========================================================
 *
 * Rota: /login (Expo Router)
 * Spec: lddm-specs/design/screens-mobile/login-screen.md
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
  ActivityIndicator,
  Alert,
  useColorScheme,
  TouchableOpacity,
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
  // Estados do formulário
  // Cada campo tem seu próprio estado local com useState
  // ─────────────────────────────────────────────────
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Validação básica: email e senha preenchidos
  const isFormValid = email.trim().length > 0 && password.length >= 6;

  // ─────────────────────────────────────────────────
  // Ação de Login (simulada - Aula 05)
  // Aula 07 implementará a chamada real ao Supabase
  // ─────────────────────────────────────────────────
  function handleLogin() {
    if (!isFormValid) {
      setErrorMessage('Preencha e-mail e senha (mínimo 6 caracteres).');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    // Simula delay de rede (será substituído pelo Supabase na aula 07)
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('✅ Login simulado', `Bem-vindo, ${email}!\n\nA integração com Supabase será feita na Aula 07.`);
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
              value={email}         → valor vem do estado
              onValueChange={setEmail} → atualiza o estado ao digitar
            */}
            <StitchTextField
              label="E-mail"
              value={email}
              onValueChange={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              isError={errorMessage !== null && email.trim().length === 0}
              errorMessage="O e-mail é obrigatório"
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

            {/* Exibição de erro geral */}
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

          {/* ── Link de Cadastro ── */}
          <View style={styles.registerRow}>
            <Text style={[Typography.bodyMedium, { color: theme.outline }]}>
              Não tem conta?{' '}
            </Text>
            <TouchableOpacity onPress={() => router.push('/register' as any)}>
              <Text style={[Typography.bodyMedium, { color: theme.primary, fontWeight: 'bold' }]}>
                Cadastrar-se
              </Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: 48,
    paddingBottom: 32,
    maxWidth: 480, // Limita largura em tablets
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
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
});
