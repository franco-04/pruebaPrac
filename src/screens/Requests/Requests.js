import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Requests from "../../modules/Requests/Requests";
import { colors, spacing } from "../../theme";

/**
 Pantalla de Login.
 Controla la navegación y pasa el handler al formulario.
 */
export default function RequestsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Requests />
    </SafeAreaView>
  );
}

