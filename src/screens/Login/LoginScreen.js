import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../modules/auth/LoginForm";
import { colors, spacing } from "../../theme";

/**
 Pantalla de Login.
 Controla la navegación y pasa el handler al formulario.
 */
export default function LoginScreen() {
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate("Home"); // Navega a la pantalla "Home"
  };

  return (
    <SafeAreaView style={styles.safe}>
      <LoginForm onLoginPress={handleGoToHome} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
  },
});
