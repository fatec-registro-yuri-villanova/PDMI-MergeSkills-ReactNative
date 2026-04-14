/**
 * ==========================================================
 * STITCHCARD.TSX — COMPONENTE DE CARD (MergeSkills)
 * ==========================================================
 *
 * Camada Atômica: Molecule
 * Sincronizado com lddm-specs/design/components/stitch-card.md
 *
 * Uso:
 *   <StitchCard onPress={() => navigation.navigate('Detalhe')}>
 *     <Text>Título</Text>
 *   </StitchCard>
 */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';

interface StitchCardProps {
  /** Conteúdo interno do card */
  children: React.ReactNode;
  /** Ação ao pressionar. Se omitido, o card não é interativo. */
  onPress?: () => void;
  /** Cor de fundo. Padrão: Colors.surface do tema atual */
  containerColor?: string;
  /** Estilos adicionais para o container */
  style?: ViewStyle;
}

export const StitchCard: React.FC<StitchCardProps> = ({
  children,
  onPress,
  containerColor,
  style,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const backgroundColor = containerColor ?? theme.surface;

  // Card interativo: usa TouchableOpacity
  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[styles.card, { backgroundColor }, style]}
      >
        {children}
      </TouchableOpacity>
    );
  }

  // Card estático: usa View simples
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,    // Material3 Medium Shape
    padding: 16,         // Padding interno padrão
    marginBottom: 12,    // Espaçamento entre cards em lista
    // Sombra universal (iOS + Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,        // Android elevation (~2dp)
  },
});
