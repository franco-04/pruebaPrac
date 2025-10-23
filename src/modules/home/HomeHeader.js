import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors, spacing, typography } from "../../theme";
import AppText from "../../components/AppText";
import { Ionicons } from "@expo/vector-icons";

// Cambia esta imagen por tu ilustración

export default function HomeHeader({
  name = "Antonio",
  role = "Administrador",
  place = "Tianguis Madero, Querétaro",
  onBellPress,
}) {
  return (
    <View style={styles.wrap}>
      {/* Barra superior con campana */}
      <View style={styles.topRow}>
        <View />
        <TouchableOpacity
          onPress={onBellPress}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name="notifications-outline"
            size={22}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      {/* Texto de bienvenida */}
      <View style={{ paddingRight: 140 }}>
        <AppText
          weight="bold"
          size={24}
          color={colors.white}
          style={{ marginBottom: 6 }}
        >
          {`¡Bienvenido, ${name}!`}
        </AppText>
        <AppText
          size={typography.small}
          color="#E3ECFF"
          style={{ marginBottom: 2 }}
        >
          {role}
        </AppText>
        <AppText size={typography.small} color="#E3ECFF">
          {place}
        </AppText>
      </View>

      {/* Curva inferior (simula la onda blanca) */}
      <View style={styles.curve} />
    </View>
  );
}

const HEADER_HEIGHT = 220;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    height: HEADER_HEIGHT,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    position: "relative",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  char: {
    position: "absolute",
    right: spacing.xl,
    bottom: 22,
    width: 120,
    height: 140,
  },
  curve: {
    position: "absolute",
    bottom: -24,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
