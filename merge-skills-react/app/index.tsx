/**
 * ==========================================================
 * INDEX.TSX — DESIGN SYSTEM SHOWCASE (PDMI Aula 04 → 05)
 * ==========================================================
 *
 * Playground para validar os tokens e componentes do Design System.
 * Na Aula 05, adicionamos: StitchCard + FlatList (Listas).
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { StitchButton } from '../components/StitchButton';
import { StitchCard } from '../components/StitchCard';
import { Section } from '../components/Section';
import { ColorBox } from '../components/ColorBox';

// ─────────────────────────────────────────────────
// Dados mock para o FlatList (Aula 05)
// Na Aula 08, estes dados virão da API real
// ─────────────────────────────────────────────────
interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
}

const MOCK_COURSES: Course[] = [
  { id: '1', title: 'Kotlin para Android', description: 'Aprenda a linguagem moderna para desenvolvimento Android nativo.', lessons: 12 },
  { id: '2', title: 'React Native Essentials', description: 'Do zero à publicação de um app mobile multiplataforma.', lessons: 10 },
  { id: '3', title: 'Design System MergeSkills', description: 'Tokens, componentes e padrões UI do ecossistema MergeSkills.', lessons: 6 },
  { id: '4', title: 'Supabase & Backend', description: 'Autenticação, banco de dados e storage com Supabase.', lessons: 8 },
];

export default function DesignSystemShowcase() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* === HEADER === */}
        <View style={styles.header}>
          <Text style={[Typography.headlineMedium, { color: theme.primary }]}>
            Design System
          </Text>
          <Text style={[Typography.bodyMedium, { color: theme.onSurface }]}>
            MergeSkills — Aula 05: Listas e Formulários
          </Text>
        </View>

        {/* === TOKENS DE CORES === */}
        <Section title="Color Tokens">
          <View style={styles.row}>
            <ColorBox color={theme.primary} label="Primary" tint={theme.onPrimary} />
            <ColorBox color={theme.surfaceVariant} label="Variant" tint={theme.onSurface} />
            <ColorBox color={theme.error} label="Error" tint="#FFF" />
          </View>
        </Section>

        {/* === TIPOGRAFIA === */}
        <Section title="Typography Scale">
          <Text style={[Typography.displaySmall, { color: theme.text }]}>Display Small</Text>
          <Text style={[Typography.headlineSmall, { color: theme.text }]}>Headline Small</Text>
          <Text style={[Typography.titleLarge, { color: theme.text }]}>Title Large</Text>
          <Text style={[Typography.bodyMedium, { color: theme.text, marginTop: 4 }]}>
            Body Medium: Texto de parágrafo longo para testar a legibilidade do sistema.
          </Text>
          <Text style={[Typography.labelLarge, { color: theme.outline, marginTop: 4 }]}>
            LABEL LARGE (Inter SemiBold)
          </Text>
        </Section>

        {/* === STITCH BUTTON === */}
        <Section title="StitchButton">
          <StitchButton text="Explorar Cursos" onClick={() => console.log('Click!')} />
          <View style={{ height: 16 }} />
          <StitchButton text="Entrar" loading={true} onClick={() => {}} />
          <View style={{ height: 16 }} />
          <StitchButton text="Continuar" enabled={false} onClick={() => {}} />
        </Section>

        {/* === AULA 05: FLATLIST + STITCHCARD === */}
        <Section title="Aula 05 — FlatList + StitchCard">
          <Text style={[Typography.bodySmall, { color: theme.outline, marginBottom: 16 }]}>
            O FlatList renderiza apenas os itens visíveis na tela, garantindo performance
            mesmo com listas longas. Cada item é um StitchCard.
          </Text>

          {/*
            FlatList: Renderização performática de arrays
            ─────────────────────────────────────────────
            data          → array de itens (mock ou estado)
            keyExtractor  → chave única por item (evita re-renders desnecessários)
            renderItem    → função que retorna o JSX de cada item
            scrollEnabled → false, pois o ScrollView pai já controla o scroll
          */}
          <FlatList
            data={MOCK_COURSES}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <StitchCard onPress={() => console.log('Curso:', item.title)}>
                <Text style={[Typography.titleMedium, { color: theme.onSurface }]}>
                  {item.title}
                </Text>
                <Text style={[Typography.bodySmall, { color: theme.outline, marginTop: 4 }]}>
                  {item.description}
                </Text>
                <Text style={[Typography.labelSmall, { color: theme.primary, marginTop: 8 }]}>
                  {item.lessons} lições
                </Text>
              </StitchCard>
            )}
          />
        </Section>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
});
