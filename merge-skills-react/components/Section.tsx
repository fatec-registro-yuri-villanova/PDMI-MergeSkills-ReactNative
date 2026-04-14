/**
 * ==========================================================
 * SECTION.TSX — COMPONENTE DE SEÇÃO (Design System Showcase)
 * ==========================================================
 *
 * Componente interno de apoio para o Showcase.
 * Renderiza um bloco com título em caps e conteúdo abaixo.
 */
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
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

const styles = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
});
