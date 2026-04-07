import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Aula 04: Design System</Text>
        <Text style={styles.subtitle}>Ponto de partida para implementação.</Text>
        <Text style={styles.instruction}>
          Instruções:
          1. Configure os tokens em constants/Colors.ts
          2. Configure a Tipografia em constants/Typography.ts
          3. Crie o componente StitchButton em components/
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 24,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  instruction: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
  }
});
