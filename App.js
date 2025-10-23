import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Login/Login';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; //Exporto el tipo de letra

import { View, ActivityIndicator } from 'react-native';

export default function App() {
    // Cargar las fuentes Roboto 
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  // Si las fuentes aún no se cargan, muestra un spinner de carga
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0A2472" />
      </View>
    );
  }
 // Si las fuentes se cargaron, muestra la pantalla de Login
  return (
    <>
    
      <LoginScreen />
      <StatusBar style="dark" />
    </>
  );
}
