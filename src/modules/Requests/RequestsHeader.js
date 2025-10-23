import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "../../theme";
import AppText from "../../components/AppText";
import { useNavigation } from "@react-navigation/native";

export default function RequestsHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrap}>
      {/* Fila superior */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>

        <AppText weight="bold" size={20} color={colors.white}>
          Solicitudes de lugar
        </AppText>
      </View>

      {/* Subtítulo */}
      <AppText size={14} color={colors.white} style={{ marginTop: spacing.xs }}>
        Aprueba, rechaza o agrega en lista de espera solicitudes de comerciantes.
      </AppText>

      {/* Curva inferior */}
      <View style={styles.curve} />
    </View>
  );
}

const HEADER_HEIGHT = 150;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    height: HEADER_HEIGHT,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl + 10,
    position: "relative",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
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
