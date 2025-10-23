import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../../components/AppText";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { colors, spacing, typography } from "../../theme";

const Logo = require("../../assets/Logo.png");

/**
 * Formulario de inicio de sesión.
 Muestra logo, título, inputs y acciones.
 Recibe la prop onLoginPress para manejar la navegación.
 */
export default function LoginForm({ onLoginPress }) {
  const handleLogin = () => {
    onLoginPress(); // Llama la función pasada desde el padre
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <AppText weight="bold" size={typography.h1} style={styles.title}>
        Inicia sesión
      </AppText>

      <AppTextInput
        label="Correo"
        placeholder="Escribe tu correo"
        keyboardType="email-address"
      />
      <AppTextInput label="Contraseña" placeholder="********" secureTextEntry />

      {/* Botón principal */}
      <AppButton title="Iniciar Sesión" onPress={handleLogin} />

      <AppText style={styles.forgot}>¿Olvidaste tu contraseña?</AppText>

      <View style={styles.footer}>
        <AppText>¿Eres comerciante?</AppText>
        <AppText style={styles.link}>Regístrate para comenzar a vender</AppText>
        <AppText>o</AppText>
        <AppText style={styles.link}>Entra como invitado</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", width: "100%" },
  logo: { width: 250, height: 250, marginBottom: spacing.md },
  title: { color: colors.primary, marginBottom: spacing.xl },
  forgot: {
    color: colors.primary,
    textDecorationLine: "underline",
    marginTop: spacing.md,
    fontSize: typography.small,
  },
  footer: { marginTop: spacing.xxl, alignItems: "center", gap: 6 },
  link: {
    color: colors.link,
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});
