/**
 * ==========================================================
 * INDEX.TSX — DESIGN SYSTEM SHOWCASE (PDMI Aula 04)
 * ==========================================================
 * 
 * Este arquivo serve como Playground para os alunos validarem
 * o Design System.
 */
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  useColorScheme 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { StitchButton } from '../components/StitchButton';

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
                MergeSkills KMP Framework
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

        {/* === COMPONENTES === */}
        <Section title="Components: StitchButton">
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
