import React from "react";
import { Text, StyleSheet } from "react-native";
import { typography } from "../theme";

/**
 * Texto base de la app.
Aplica tipografía del tema.
Acepta peso (regular/bold), tamaño y color.
 */
export default function AppText({
  children,
  weight = "regular",
  size = typography.body,
  color,
  style,
  ...rest
}) {
  return (
    <Text
      style={[
        styles.base,
        {
          fontSize: size,
          color,
          fontFamily:
            weight === "bold" ? typography.fontBold : typography.fontRegular,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({ base: {} }); // Espacio para estilos comunes 
