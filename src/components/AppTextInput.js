import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';
import AppText from './AppText';


/**
 * Campo de texto con etiqueta arriba.
 label: texto de la etiqueta.
 secureTextEntry: oculta texto (contraseña).
 keyboardType: 'default' | 'email-address', etc.
 */
export default function AppTextInput({ label, placeholder, secureTextEntry, keyboardType }) {
  return (
    <View style={styles.wrapper}>
      <AppText weight="bold" size={typography.small} style={styles.label}>
        {label}
      </AppText>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { width: '100%', marginBottom: spacing.lg },
  label: { marginLeft: spacing.sm, color: colors.primary, marginBottom: spacing.xs },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: spacing.lg,
    fontSize: typography.body,
  },
});
