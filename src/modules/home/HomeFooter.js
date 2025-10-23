import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../theme';
import { useNavigation } from '@react-navigation/native';
export default function HomeFooter() {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.item}>
        <Ionicons name="home-outline" size={24} color={colors.white} />
        <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Ionicons name="list-outline" size={24} color={colors.white} />
        <Text style={styles.text}>Lista</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.qrButton}>
        <Ionicons name="qr-code-outline" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity  style={styles.item}>
        <Ionicons name="people-outline" size={24} color={colors.white} />
        <Text style={styles.text}>Usuarios</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.item}>
        <Ionicons name="card-outline" size={24} color={colors.white} />
        <Text style={styles.text}>Pagos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    backgroundColor: colors.footer,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  item: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: colors.white,
  },
  qrButton: {
    backgroundColor: colors.text,
    padding: 12,
    borderRadius: 30,
    marginBottom: 15,
  },
});
