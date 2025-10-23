import React, { useMemo, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import FilterTabs from "../../components/FilterTabs";
import { colors, spacing } from "../../theme";

export default function MarketSelector({ onClose }) {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all"); // "all" | "nearby"

  const alphabet = useMemo(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={onClose} hitSlop={8} style={({ pressed }) => pressed && { opacity: 0.7 }}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </Pressable>
        <AppText weight="bold" size={18}>Seleccionar tianguis</AppText>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={colors.text} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Busca tu tianguis"
          placeholderTextColor={colors.muted ?? "#9AA0A6"}
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      {/* Filtros (reutilizable) */}
      <View style={styles.filterContainer}>
        <FilterTabs
          value={filter}
          onChange={(v) => setFilter(v)}
          options={[
            { label: "Todos", value: "all" },
            { label: "Cerca de ti", value: "nearby" },
          ]}
        />
      </View>

      {/* Lista alfabética */}
      <FlatList
        data={alphabet}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.alphabetList}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              // Hook para filtrar por inicial o scrollear a sección
              // console.log("Ir a letra:", item);
            }}
            style={({ pressed }) => [styles.letterButton, pressed && { opacity: 0.6 }]}
            hitSlop={6}
          >
            <AppText style={styles.letterText}>{item}</AppText>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.xl,
    gap: spacing.md,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    marginHorizontal: spacing.xl,
    marginVertical: spacing.md,
    borderRadius: 8,
    padding: spacing.sm,
  },
  searchIcon: { marginRight: spacing.xs },
  searchInput: { flex: 1, fontSize: 16, color: colors.text },
  filterContainer: { paddingHorizontal: spacing.xl, marginBottom: spacing.md },
  alphabetList: { paddingHorizontal: spacing.xl, paddingBottom: spacing.lg },
  letterButton: { paddingVertical: spacing.xs },
  letterText: { fontSize: 16, color: colors.text },
});
