import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeContent from '../../modules/home/HomeContent';

import { colors } from '../../theme';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <HomeContent
        onGoRequests={() => navigation.navigate('Requests')}
        onGoRegisterUser={() => navigation.navigate('RegisterUser')}
        onGoMarkets={() => navigation.navigate('Markets')}
        onGoAccount={() => navigation.navigate('Account')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.white },
});
