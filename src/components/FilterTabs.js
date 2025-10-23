import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import AppText from "./AppText"; // ajusta la ruta si tu AppText vive en otro lado
import { colors, spacing } from "../theme";

/**
Componente: FilterTabs Muestra una fila de "chips" o botones pequeños para filtrar contenido. 
Cada chip representa una opción, y se marca visualmente cuando está seleccionada.

 Props:
options: array con objetos { label, value } → define las pestañas.
value: valor actual seleccionado.
onChange: función que se ejecuta al tocar un chip (recibe el valor).
compact: opcional, si es true reduce el tamaño de los chips.
 */
export default function SFilterTabs({ options, value, onChange, compact }) {
  return (
    <View style={[styles.container, compact && { gap: spacing.xs }]}>
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <Pressable
            key={opt.value}
            onPress={() => onChange(opt.value)}
            hitSlop={8}
            style={({ pressed }) => [
              styles.chip,
              selected ? styles.chipActive : styles.chipInactive,
              pressed && { opacity: 0.85 },
              compact && { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm },
            ]}
          >
            <AppText style={selected ? styles.textActive : styles.textInactive}>
              {opt.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: spacing.sm },
  chip: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipInactive: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  textActive: { color: colors.white },
  textInactive: { color: colors.primary },
});
