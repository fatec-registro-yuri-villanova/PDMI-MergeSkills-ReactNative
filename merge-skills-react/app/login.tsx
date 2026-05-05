/**
 * ==========================================================
 * LOGIN.TSX — TELA DE LOGIN (PDMI Aula 07)
 * ==========================================================
 *
 * EXERCÍCIO: Implemente a tela de Login do MergeSkills.
 *
 * Requisitos:
 * 1. Dois campos de texto: e-mail e senha (com ícones Ionicons)
 * 2. Botão "Entrar" que chama apiClient.auth.signIn(email, password)
 * 3. Enquanto carrega, exibir ActivityIndicator no lugar do botão
 * 4. Em caso de erro, exibir Alert com a mensagem
 * 5. Em caso de sucesso, navegar para '/courses' com router.replace
 * 6. Link "Criar nova conta" que navega para '/register'
 *
 * Imports úteis:
 * - apiClient (../lib/api)
 * - useRouter (expo-router)
 * - Ionicons (ex: "mail-outline", "lock-closed-outline")
 * - View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet
 * ==========================================================
 */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { apiClient } from '../lib/api';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleLogin() {
        // TODO: implementar o login usando apiClient.auth.signIn
    }

    return (
        <View style={styles.container}>
            {/* TODO: construir o layout da tela de login */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
