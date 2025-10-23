import React, { useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RequestsHeader from "./RequestsHeader";
import MarketSelector from "./MarketSelector";
import AppText from "../../components/AppText";
import FilterTabs from "../../components/FilterTabs";
import RequestCard from "../../components/RequestCard";
import { colors, spacing } from "../../theme";

export default function Requests() {
  const [showSelector, setShowSelector] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");

  const today = new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const data = useMemo(
    () => [
      {
        id: "1",
        status: "pending",
        folio: "#01-022",
        dateLabel: "Jueves, 22 de septiembre",
        marketName: "Mercado la cruz",
        stallName: "Tacos Toluqueños",
        category: "Comida",
        locationCode: "A23",
        metricValue: "5 mts",
        metricLabel: "Mercado",
        managerName: "Jorge Madero",
        placeLabel: "Plaza",
      },
      {
        id: "2",
        status: "review",
        folio: "#01-023",
        dateLabel: "Viernes, 23 de septiembre",
        marketName: "Tianguis Santiago",
        stallName: "Puestos Don Pepe",
        category: "Verduras",
        locationCode: "B14",
        metricValue: "Medida",
        metricLabel: "Temporal",
        managerName: "Encargado",
        placeLabel: "Ambulante",
      },
      {
        id: "3",
        status: "approved",
        folio: "#01-024",
        dateLabel: "Sábado, 24 de septiembre",
        marketName: "Tianguis Querétaro",
        stallName: "Puesto Charly",
        category: "Ropa",
        locationCode: "C07",
        metricValue: "4 mts",
        metricLabel: "Mercado",
        managerName: "Encargado",
        placeLabel: "Plaza",
      },
      {
        id: "4",
        status: "rejected",
        folio: "#01-025",
        dateLabel: "Domingo, 25 de septiembre",
        marketName: "Tianguis El Pueblito",
        stallName: "Puesto X",
        category: "Diversos",
        locationCode: "D20",
        metricValue: "3 mts",
        metricLabel: "Ambulante",
        managerName: "Persona",
        placeLabel: "Calle",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (statusFilter === "all") return data;
    return data.filter((i) => i.status === statusFilter);
  }, [statusFilter, data]);

  if (showSelector) return <MarketSelector onClose={() => setShowSelector(false)} />;

  return (
    <View style={styles.container}>
      <RequestsHeader />

      <View style={styles.dateContainer}>
        <AppText weight="bold" size={15} style={styles.dateText}>
          {today}
        </AppText>

        <TouchableOpacity
          style={styles.locationButton}
          onPress={() => setShowSelector(true)}
        >
          <Ionicons name="location-outline" size={20} color={colors.primary} />
          <AppText style={styles.locationText}>Mercado la Cruz, Qro</AppText>
          <Ionicons name="chevron-down" size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search-outline" size={18} color={colors.muted} />
          <AppText style={styles.searchText}>¿A quién buscas?</AppText>
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          <FilterTabs
            value={statusFilter}
            onChange={(v) => setStatusFilter(v)}
            options={[
              { label: "Todos", value: "all" },
              { label: "Por revisar", value: "review" },
              { label: "Aprobados", value: "approved" },
              { label: "Rechazados", value: "rejected" },
            ]}
          />
        </ScrollView>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: spacing.xl,
          paddingBottom: spacing.xl,
        }}
        renderItem={({ item }) => (
          <RequestCard {...item} onPress={() => {}} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  dateContainer: {
    paddingHorizontal: spacing.xl,
    paddingTop: 0,
    marginTop: -12,
  },
  dateText: {
    marginBottom: spacing.xs,
    color: colors.footer,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: spacing.xl,
    gap: spacing.xs,
  },
  locationText: { color: colors.primary, fontSize: 14, fontWeight: "500" },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e2e2ebff",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 10,
    marginTop: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  searchText: { color: "#A0A0A0", fontSize: 16, marginLeft: spacing.xs },
  filterScroll: { marginTop: spacing.lg, paddingBottom: spacing.sm, gap: spacing.sm },
});
