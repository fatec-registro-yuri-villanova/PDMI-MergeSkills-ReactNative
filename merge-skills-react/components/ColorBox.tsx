/**
 * ==========================================================
 * COLORBOX.TSX — COMPONENTE DE COR (Design System Showcase)
 * ==========================================================
 *
 * Componente interno de apoio para o Showcase.
 * Exibe uma amostra de cor circular com label abaixo.
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '../constants/Typography';

interface ColorBoxProps {
  color: string;
  label: string;
  tint: string;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ color, label, tint }) => (
  <View style={styles.container}>
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={[Typography.labelSmall, { color: tint }]}>Aa</Text>
    </View>
    <Text style={[Typography.labelSmall, { marginTop: 4 }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
