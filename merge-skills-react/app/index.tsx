/**
 * ==========================================================
 * INDEX.TSX — SPLASH SCREEN (PDMI Aula 07)
 * ==========================================================
 *
 * EXERCÍCIO: Implemente a Splash Screen do MergeSkills.
 *
 * Requisitos:
 * 1. Exibir o logo/ícone do app e o nome "Merge Skills" centralizados
 * 2. Após 2 segundos, redirecionar automaticamente para a tela de Login
 *    Dica: use useEffect + setTimeout + router.replace('/login')
 *
 * Imports úteis:
 * - useRouter (expo-router)
 * - Ionicons (ex: name="person")
 * - View, Text, StyleSheet (react-native)
 * ==========================================================
 */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen() {
    const router = useRouter();

    // TODO: redirecionar para '/login' após 2 segundos

    return (
        <View style={styles.container}>
            {/* TODO: exibir ícone e nome do app */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
