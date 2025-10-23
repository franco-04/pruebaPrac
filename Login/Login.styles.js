import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");

// Calcula el espacio superior según la altura de la barra del sistema
// En Android suma la altura de la barra mas el alto de la pantalla
const topPadding =
  (Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0) +
  height * 0.08;

export const styles = StyleSheet.create({
  // Contenedor principal que agrupa todos los elementos
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: topPadding,
    paddingHorizontal: width * 0.07,
  },
  // Imagen del logo principal de la app
  logo: {
    width: Math.min(280, Math.round(width * 0.5)),
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: height * 0.02,
  },
  // Texto del título "Inicia sesión"
  title: {
    fontSize: Math.round(width * 0.075),
    fontWeight: "700",
    color: "#0A2472",
    marginBottom: height * 0.03,
  },
  // Etiquetas para los campos de texto
  label: {
    alignSelf: "flex-start",
    marginLeft: width * 0.02,
    color: "#0A2472",
    fontWeight: "500",
    marginBottom: height * 0.005,
    fontSize: Math.round(width * 0.04),
  },
  // Campos de entrada de texto
  input: {
    width: "100%",
    height: height * 0.065,
    borderWidth: 1,
    borderColor: "#0A2472",
    borderRadius: 8,
    paddingHorizontal: width * 0.04,
    fontSize: Math.round(width * 0.04),
    marginBottom: height * 0.02,
  },
  // Botón principal de "Iniciar sesión"
  button: {
    width: "100%",
    backgroundColor: "#0A2472",
    borderRadius: 25,
    paddingVertical: height * 0.018,
    alignItems: "center",
    marginTop: height * 0.01,
  },
  // Texto dentro del botón
  buttonText: {
    color: "#fff",
    fontSize: Math.round(width * 0.045),
    fontWeight: "600",
  },
  // Texto del enlace "¿Olvidaste tu contraseña?"
  forgot: {
    color: "#0A2472",
    textDecorationLine: "underline",
    marginTop: height * 0.015,
    fontSize: Math.round(width * 0.037),
  },
  // Contenedor de la parte inferior con enlaces adicionales
  footer: {
    marginTop: height * 0.05,
    alignItems: "center",
  },
  // Texto "¿Eres comerciante?"
  footerText: {
    color: "#000",
    marginBottom: height * 0.008,
    fontSize: Math.round(width * 0.038),
  },
  // Enlaces (registro e invitado)
  link: {
    color: "#05b4ffff",
    textDecorationLine: "underline",
    fontWeight: "500",
    fontSize: Math.round(width * 0.037),
  },
  // Texto entre enlaces
  or: {
    color: "#000",
    marginVertical: height * 0.008,
    fontSize: Math.round(width * 0.037),
  },
});
