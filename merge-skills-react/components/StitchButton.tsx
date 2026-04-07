/**
 * ==========================================================
 * STITCHBUTTON.TSX — COMPONENTE DE BOTÃO (MergeSkills)
 * ==========================================================
 * 
 * Sincronizado com lddm-specs/design/components/stitch-button.md
 */
import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  ViewStyle, 
  useColorScheme 
} from 'react-native';
import * as Haptics from 'expo-haptics';
import Colors from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface StitchButtonProps {
  text: string;
  onClick: () => void;
  enabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export const StitchButton: React.FC<StitchButtonProps> = ({
  text,
  onClick,
  enabled = true,
  loading = false,
  style,
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const handlePress = () => {
    if (enabled && !loading) {
      // Feedback Tátil (Impacto)
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onClick();
    }
  };

  // Cores dinâmicas baseadas no estado
  const backgroundColor = !enabled 
    ? `${theme.onSurface}1F` // onSurface com 12% alpha (hex 1F)
    : theme.primary;

  const textColor = !enabled
    ? `${theme.onSurface}61` // onSurface com 38% alpha (hex 61)
    : theme.onPrimary;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={!enabled || loading}
      style={[
        styles.button,
        { backgroundColor },
        style
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[Typography.titleMedium, { color: textColor }]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56, // StitchSizing.buttonHeight
    borderRadius: 12, // Material3 Medium Shape
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
});
