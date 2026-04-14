/**
 * ==========================================================
 * INDEX.TSX — DESIGN SYSTEM SHOWCASE (PDMI Aula 04 → 05)
 * ==========================================================
 *
 * Este arquivo serve como Playground para os alunos validarem
 * o Design System. Na Aula 05, incluímos os novos componentes:
 *   - StitchCard  → container para listas
 *   - FlatList    → renderização performática de coleções
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
            <Text style={[Typography.labelLarge, { color: theme.outline, marginTop: 4 }]}>LABEL LARGE (Inter SemiBold)</Text>
        </Section>

        {/* === STITCH BUTTON === */}
        <Section title="StitchButton">
            <StitchButton
                text="Explorar Cursos"
                onClick={() => console.log('Click!')}
            />

            <View style={{ height: 16 }} />

            <StitchButton
                text="Entrar"
                loading={true}
                onClick={() => {}}
            />

            <View style={{ height: 16 }} />

            <StitchButton
                text="Continuar"
                enabled={false}
                onClick={() => {}}
            />
        </Section>

        {/* ── AULA 05: FLATLIST + STITCHCARD ── */}
        <Section title="Aula 05 — FlatList + StitchCard">
          <Text style={[Typography.bodySmall, { color: theme.outline, marginBottom: 16 }]}>
            O FlatList renderiza apenas os itens visíveis na tela, garantindo
            performance mesmo com listas longas. Cada item é um StitchCard.
          </Text>

          {/*
            FlatList: Renderização performática de arrays
            ─────────────────────────────────────────────
            data          → array de itens (nosso estado/mock)
            keyExtractor  → função que retorna chave única por item
            renderItem    → função que retorna o JSX de cada item
            scrollEnabled → false, pois o pai já tem ScrollView
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

// --- Componentes Internos de Apoio ---

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
    return (
        <View style={styles.section}>
            <Text style={[Typography.titleSmall, { color: theme.outline, marginBottom: 12 }]}>
                {title.toUpperCase()}
            </Text>
            {children}
        </View>
    );
};

const ColorBox = ({ color, label, tint }: { color: string; label: string, tint: string }) => (
    <View style={styles.colorContainer}>
        <View style={[styles.colorBox, { backgroundColor: color, justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[Typography.labelSmall, { color: tint }]}>Aa</Text>
        </View>
        <Text style={[Typography.labelSmall, { marginTop: 4 }]}>{label}</Text>
    </View>
);

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
  section: {
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  colorContainer: {
    alignItems: 'center',
  },
  colorBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
});
