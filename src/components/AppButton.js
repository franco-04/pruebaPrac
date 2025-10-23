import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { colors, spacing, typography } from "../theme";
import AppText from "./AppText";

/**
 * Botón reutilizable.
 Muestra el título con fuente bold del tema.
 onPress: callback al pulsar.
 disabled: desactiva el botón y baja opacidad.
 */
export default function AppButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.btn, disabled && { opacity: 0.6 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <AppText
        weight="bold"
        size={typography.button}
        style={{ color: colors.white }}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingVertical: spacing.xl,
    alignItems: "center",
    marginTop: spacing.md,
  },
});
