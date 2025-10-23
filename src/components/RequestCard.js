import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { colors, spacing } from "../theme";
//Datos estaticos para mostarr en el card
export default function RequestCard({
  status = "pending",
  folio = "#01-022",
  dateLabel = "Jueves, 22 de septiembre",
  marketName = "Mercado la cruz",
  stallName = "Tacos Toluqueños",
  category = "Comida",
  locationCode = "A23",
  metricValue = "5 mts",
  metricLabel = "Mercado",
  managerName = "Jorge Madero",
  placeLabel = "Plaza",
  onPress,
}) {
  const s = getStylesByStatus(status);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { borderColor: s.border },
        pressed && { opacity: 0.9 },
      ]}
    >
      {/* Tag superior */}
      <View style={[styles.tag, { backgroundColor: s.tagBg }]}>
        <AppText weight="bold" size={12} style={{ color: s.tagText }}>
          {folio}
        </AppText>
        <Ionicons name="chevron-forward" size={16} color={s.tagText} />
      </View>

      {/* Cuerpo */}
      <View style={styles.body}>
        {/* Columna izquierda */}
        <View style={{ flex: 1 }}>
          <AppText weight="bold" size={16} style={{ color: s.status }}>
            {labelByStatus(status)}
          </AppText>

          <AppText
            weight="bold"
            size={16}
            style={{ color: colors.primary, marginTop: 2 }}
          >
            {marketName}
          </AppText>

          <AppText style={{ color: colors.text, marginTop: 2 }}>
            {stallName}
          </AppText>

          <AppText size={12} style={{ color: colors.muted, marginTop: 2 }}>
            {category}
          </AppText>

          <View style={{ marginTop: spacing.sm }}>
            <AppText style={{ color: colors.text }}>{managerName}</AppText>
            <AppText size={12} style={{ color: colors.muted }}>
              {placeLabel}
            </AppText>
          </View>
        </View>

        {/* Columna derecha */}
        <View style={{ alignItems: "flex-end", minWidth: 90 }}>
          <AppText size={12} style={{ color: colors.muted }}>
            {dateLabel}
          </AppText>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: spacing.sm,
            }}
          >
            <Ionicons name="location-outline" size={16} color={colors.primary} />
            <AppText
              weight="bold"
              style={{ color: colors.primary, marginLeft: 4 }}
            >
              {locationCode}
            </AppText>
          </View>

          <View style={{ alignItems: "flex-end", marginTop: spacing.md }}>
            <AppText weight="bold" size={18} style={{ color: colors.primary }}>
              {metricValue}
            </AppText>
            <AppText size={12} style={{ color: colors.muted }}>
              {metricLabel}
            </AppText>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function labelByStatus(status) {
  switch (status) {
    case "approved":
      return "Confirmada";
    case "rejected":
      return "Rechazada";
    case "review":
      return "Por revisar";
    default:
      return "Pendiente";
  }
}

function getStylesByStatus(status) {
  const palette = {
    pending: {
      border: "#FDBA21",
      tagBg: "#FFF7E5",
      tagText: "#C88800",
      status: "#E59F00",
    },
    review: {
      border: "#9AA0A6",
      tagBg: "#F2F3F5",
      tagText: "#6B7280",
      status: "#6B7280",
    },
    approved: {
      border: "#2DBE86",
      tagBg: "#E9FFF4",
      tagText: "#1E9E6A",
      status: "#1E9E6A",
    },
    rejected: {
      border: "#E45959",
      tagBg: "#FFECEC",
      tagText: "#C53E3E",
      status: "#D64545",
    },
  };
  return palette[status] || palette.pending;
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 14,
    backgroundColor: colors.white,
    padding: spacing.md,
    marginBottom: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 1,
  },
  tag: {
    position: "absolute",
    top: -10,
    left: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.04)",
  },
  body: {
    marginTop: spacing.sm + 4,
    flexDirection: "row",
    gap: spacing.md,
  },
});
