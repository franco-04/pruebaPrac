import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeContent from '../../modules/home/HomeContent';

import { colors } from '../../theme';

export default function HomeScreen() {
  const navigation = useNavigation(); // Hook que permite manejar la navegación entre pantallas


  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      {/* Componente principal que muestra el contenido del Home */}
      <HomeContent
      // Al presionar un boton dentro de HomeContent, se navega a la pantalla "Requests"
        onGoRequests={() => navigation.navigate('Requests')}
      />
    </SafeAreaView>
  );
}
// Estilos 
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
});
