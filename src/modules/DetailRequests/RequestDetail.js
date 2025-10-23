import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import DetailRow from "../../components/DetailRow";
import { colors, spacing } from "../../theme";
import  DetailHeader from "./DetailHeader";



export default function RequestDetail({ route, navigation }) {
  const params = route?.params || {};
  const [status, setStatus] = useState(params.status || "pending");

  const Radio = ({ value, label }) => {
    const checked = status === value;
    return (
      <Pressable style={styles.radioRow} onPress={() => setStatus(value)} hitSlop={8}>
        <View style={[styles.radio, checked && styles.radioChecked]}>
          {checked ? <View style={styles.dot} /> : null}
        </View>
        <AppText style={styles.radioLabel}>{label}</AppText>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
        <DetailHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.formCard}>
          <DetailRow label="Folio" value={(params.folio || "").replace("#", "")} />
          <DetailRow label="Tianguis" value={params.marketName || "—"} />
          <DetailRow label="Comercio" value={params.stallName || "—"} />
          <DetailRow label="Lugar" value={params.locationCode || "—"} actionLabel="Asignar" onActionPress={() => {}} />
          <DetailRow label="Medida" value={params.metricValue || "—"} actionLabel="Cambiar" onActionPress={() => {}} />
          <DetailRow label="Categoría" value={params.category || "—"} />
          <DetailRow label="Titular" value={params.holderName || "Eric Hernández"} />
          <DetailRow label="Encargado" value={params.managerName || "Jorge Madero"} />
          <DetailRow label="Fecha solicitud" value={params.dateLabel || "—"} />
          <DetailRow label="Fecha Aprobada" value="Por aprobar" />
          <DetailRow label="Clase" value="Plaza" actionLabel="Cambiar" onActionPress={() => {}} />
          <DetailRow label="Puesto" value="Tianguis" actionLabel="Cambiar" onActionPress={() => {}} />

          {/* Estado solicitud */}
          <View style={{ marginTop: spacing.md }}>
            <View style={styles.rowHeader}>
              <AppText size={12} style={styles.sectionLabel}>
                Estado Solicitud
              </AppText>
            </View>

            <View style={styles.radioGroup}>
              <Radio value="pending" label="Pendiente" />
              <Radio value="approved" label="Aprobar" />
              <Radio value="rejected" label="Rechazar" />
              <Radio value="waitlist" label="En lista de espera" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable style={[styles.btn, styles.btnGhost]} onPress={() => navigation.goBack()}>
          <AppText weight="bold" style={{ color: colors.primary }}>Cancelar</AppText>
        </Pressable>
        <Pressable
          style={[styles.btn, styles.btnPrimary]}
          onPress={() => {
            // TODO: persistir cambios
            navigation.goBack();
          }}
        >
          <AppText weight="bold" style={{ color: colors.white }}>Guardar cambios</AppText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const BORDER_SOFT = "#E6E7EA";
const LABEL_MUTED = "#9AA0A6";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },

  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,              // más alto
    borderBottomLeftRadius: 24,               // radio más grande
    borderBottomRightRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  formCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER_SOFT,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    // sombra muy ligera
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },

  rowHeader: { flexDirection: "row", alignItems: "center" },
  sectionLabel: { color: LABEL_MUTED },

  radioGroup: { marginTop: spacing.sm, gap: 10 },

  radioRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  radio: {
    width: 20, height: 20, borderRadius: 10,
    borderWidth: 2, borderColor: colors.border || BORDER_SOFT,
    alignItems: "center", justifyContent: "center",
    backgroundColor: colors.white,
  },
  radioChecked: { borderColor: colors.primary, backgroundColor: "#EEF3FF" },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
  radioLabel: { color: colors.text },

  footer: {
    flexDirection: "row",
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: "#EEF0F4",
    backgroundColor: colors.white,
  },

  btn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 24, // pill
    alignItems: "center",
    justifyContent: "center",
  },
  btnGhost: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  btnPrimary: {
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
});
