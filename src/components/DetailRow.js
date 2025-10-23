import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import AppText from "./AppText";
import { colors, spacing } from "../theme";


/**
 * Componente: DetailRow
 Muestra una fila con una etiqueta (label), un valor (value)
Props:
label: texto descriptivo del campo (ej. "Folio")
value: valor o dato que se muestra (ej. "#01-022")
 actionLabel: texto del botón opcional (ej. "Editar")
onActionPress: función que se ejecuta al presionar el botón
 */
export default function DetailRow({
  label,
  value,
  actionLabel,
  onActionPress,
}) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <AppText size={12} style={styles.label}>{label}</AppText>
      </View>
      <View style={styles.separator} />
      <View style={styles.right}>
        <AppText style={styles.value}>{value}</AppText>
        {actionLabel ? (
          <Pressable style={styles.actionBtn} onPress={onActionPress}>
            <AppText weight="bold" style={{ color: colors.white }}>
              {actionLabel}
            </AppText>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  left: { width: 110, paddingRight: spacing.sm },
  label: { color: colors.muted },
  separator: {
    width: 1,
    height: 18,
    backgroundColor: "#E6E7EA",
    marginRight: spacing.md,
  },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    justifyContent: "space-between",
  },
  value: { color: colors.text },
  actionBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});
