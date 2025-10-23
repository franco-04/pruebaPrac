import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { colors, spacing, typography } from '../../theme';
import AppText from '../../components/AppText';
import ActionItemCard from '../../components/ActionItemCard';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
const Character = require('../../assets/Hombre.png');
/**
 * Módulo completo del Home:
 *  - Header (bienvenida)
 *  - Sección con acciones
 */
export default function HomeContent({ onGoRequests, onGoRegisterUser, onGoMarkets, onGoAccount }) {
  return (
    <View style={styles.container}>
      <HomeHeader />
      
      <View style={styles.body}>
        <Image source={Character} style={styles.char} resizeMode="contain" />
        <AppText weight="bold" size={18} style={{ marginBottom: spacing.md, color: colors.primary }}>
          ¿Qué haremos hoy?
        </AppText>

        <View style={{ gap: spacing.md }}>
          <ActionItemCard
            iconSet="ion"
            icon="time-outline"
            title="Solicitudes"
            subtitle="Revisa las solicitudes enviadas por comerciantes"
            onPress={onGoRequests}
          />
          <ActionItemCard
            iconSet="ion"
            icon="person-add-outline"
            title="Registrar nuevo usuario"
            subtitle="Registra un nuevo comerciante como usuario"
            onPress={onGoRegisterUser}
          />
          <ActionItemCard
            iconSet="mci"
            icon="map-outline"
            title="Ver lista de tianguis"
            subtitle="Agregar, revisar y editar los tianguis registrados"
            onPress={onGoMarkets}
          />
          <ActionItemCard
            iconSet="ion"
            icon="settings-outline"
            title="Cuenta"
            subtitle="Edita tus datos o cierra sesión"
            onPress={onGoAccount}
          />
        </View>
      </View>
      < HomeFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.white 
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl + 24, // compensa la curva del header
    backgroundColor: colors.white,
  },
  char: {
    position: 'absolute',
    right: -50,  // mantiene la separación del borde derecho
    top: -160,    // 🔼 súbelo ajustando este valor
    width: 250,
    height: 270,
    zIndex: 1,          // asegura que quede encima del fondo
  },
});

