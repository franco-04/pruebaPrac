import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors, spacing, typography } from '../theme';
import AppText from './AppText';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

/**
Tarjeta con iconos, título, subtítulo y chevron a la derecha.
Props:
 iconSet: 'ion' | 'mci' (ionicons / material-community)
icon: nombre del ícono (ej. 'notifications-outline')
title, subtitle
onPress
 */
export default function ActionItemCard({ iconSet='ion', icon, title, subtitle, onPress }) {
  const LeftIcon = iconSet === 'mci' ? MaterialCommunityIcons : Ionicons;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={styles.card}>
      <View style={styles.row}>
        <View style={styles.iconWrap}>
          <LeftIcon name={icon} size={22} color={colors.text} />
        </View>

        <View style={styles.texts}>
          <AppText weight="bold" size={typography.body} style={{ marginBottom: 2 }}>
            {title}
          </AppText>
          <AppText size={typography.small} color={colors.text}>
            {subtitle}
          </AppText>
        </View>

        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.card,
    borderRadius: 14,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: colors.text,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  iconWrap: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: colors.card,
    alignItems: 'center', justifyContent: 'center',
    marginRight: spacing.md,
  },
  texts: { flex: 1 },
});
