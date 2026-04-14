/**
 * ==========================================================
 * STITCHTEXTFIELD.TSX — COMPONENTE DE INPUT (MergeSkills)
 * ==========================================================
 *
 * Camada Atômica: Atom
 * Sincronizado com lddm-specs/design/components/stitch-text-field.md
 *
 * Uso básico:
 *   const [email, setEmail] = useState('');
 *   <StitchTextField
 *     label="E-mail"
 *     value={email}
 *     onValueChange={setEmail}
 *     keyboardType="email-address"
 *   />
 *
 * Com erro:
 *   <StitchTextField
 *     label="Senha"
 *     value={password}
 *     onValueChange={setPassword}
 *     secureTextEntry
 *     isError={password.length > 0 && password.length < 6}
 *     errorMessage="A senha deve ter pelo menos 6 caracteres"
 *   />
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  useColorScheme,
} from 'react-native';
import Colors from '../constants/Colors';
import { Typography } from '../constants/Typography';

interface StitchTextFieldProps {
  /** Texto do rótulo exibido acima do input */
  label: string;
  /** Valor controlado via useState */
  value: string;
  /** Callback chamado ao digitar. Conectar ao setState. */
  onValueChange: (text: string) => void;
  /** Placeholder interno do campo */
  placeholder?: string;
  /** Marca o campo como inválido, alterando a cor da borda */
  isError?: boolean;
  /** Mensagem de erro exibida abaixo do campo quando isError=true */
  errorMessage?: string;
  /** Oculta o texto digitado (para senhas) */
  secureTextEntry?: boolean;
  /** Tipo de teclado a exibir no foco */
  keyboardType?: KeyboardTypeOptions;
  /** Desabilita a auto-capitalização (útil para e-mails) */
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export const StitchTextField: React.FC<StitchTextFieldProps> = ({
  label,
  value,
  onValueChange,
  placeholder,
  isError = false,
  errorMessage,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
}) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  // Estado local para controlar se o campo está em foco
  const [isFocused, setIsFocused] = useState(false);

  // Cores dinâmicas baseadas no estado
  const getBorderColor = () => {
    if (isError) return theme.error;
    if (isFocused) return theme.primary;
    return theme.outline;
  };

  const getLabelColor = () => {
    if (isError) return theme.error;
    if (isFocused) return theme.primary;
    return theme.outline;
  };

  return (
    <View style={styles.wrapper}>
      {/* Label acima do input */}
      <Text style={[Typography.bodySmall, styles.label, { color: getLabelColor() }]}>
        {label}
      </Text>

      {/* Container do Input com borda dinâmica */}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: getBorderColor(),
            backgroundColor: theme.surface,
          },
        ]}
      >
        <TextInput
          style={[styles.input, { color: theme.onSurface }]}
          value={value}
          onChangeText={onValueChange}
          placeholder={placeholder}
          placeholderTextColor={theme.outline}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      {/* Mensagem de erro */}
      {isError && errorMessage ? (
        <Text style={[Typography.bodySmall, styles.errorText, { color: theme.error }]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
  },
  inputContainer: {
    height: 56,
    borderWidth: 1.5,
    borderRadius: 12,      // Material3 Medium Shape
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    marginTop: 4,
  },
});
