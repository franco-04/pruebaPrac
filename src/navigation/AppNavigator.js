import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import RequestsScreen from '../screens/Requests/Requests';
import RequestDetailScreen from '../screens/Requests/RequestDetailScreen';

const Stack = createNativeStackNavigator();

/**
 Define la estructura de navegación de la app.
 Centraliza las pantallas .
 */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }} // Oculta headers nativos
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Requests" component={RequestsScreen} />
        <Stack.Screen name="RequestDetail" component={RequestDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
