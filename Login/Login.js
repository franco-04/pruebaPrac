import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./Login.styles";

const Logo = require("../assets/Logo.png");

export default function LoginScreen() {
  return (
    // Contenedor principal que organiza todos los elementos
    <View style={styles.container}>
      {/* Muestra el logo en la parte superior */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      {/* Muestra los textos y titulos*/}
      <Text style={styles.title}>Inicia sesión</Text>

      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
      />
      
      {/* Botón para iniciar sesión */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>¿Eres comerciante?</Text>
        <Text style={styles.link}>Regístrate para comenzar a vender</Text>
        <Text style={styles.or}>o</Text>
        <Text style={styles.link}>Entra como invitado</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
