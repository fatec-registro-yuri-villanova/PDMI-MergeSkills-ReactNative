/**
 * ==========================================================
 * INDEX.TSX — TELA SPLASH (useEffect na Prática)
 * ==========================================================
 *
 * Conceitos ensinados:
 * - useEffect: executar código quando o componente monta
 * - Cleanup function: limpar recursos ao desmontar
 * - Array de dependências: controlar quando o efeito roda
 * - Navegação com expo-router (router.replace)
 */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../constants/Colors';
import { apiClient } from '../lib/api';

export default function SplashScreen() {
    const router = useRouter();

    // ── useEffect: O que é? ──
    // useEffect roda código APÓS o componente ser renderizado na tela.
    // É usado para: timers, chamadas de API, listeners, etc.
    //
    // Sintaxe: useEffect(callback, dependências)
    //   - callback: função que será executada
    //   - dependências: array que controla QUANDO re-executar
    //     - [] (vazio) = roda apenas 1 vez (ao montar)
    //     - [variavel] = roda quando 'variavel' muda
    //     - sem array = roda a cada re-render (CUIDADO!)
    useEffect(() => {
        // Após 2 segundos, navega para a tela de login
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 2000);

        // ── Cleanup Function ──
        // Retornar uma função dentro do useEffect é o "cleanup".
        // Ela roda quando o componente SAI da tela (desmonta).
        // Aqui: cancela o timer caso o usuário saia antes dos 2s.
        return () => clearTimeout(timer);
    }, []); // [] = este efeito roda APENAS uma vez, quando a tela abre

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.logoContainer}>
                <Ionicons name="school" size={80} color="#FF6B6B" />
                <Text style={styles.logoText}>Merge Skills</Text>
                <Text style={styles.tagline}>Carregando...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoSymbol: {
        width: 80,
        height: 80,
        backgroundColor: Colors.colors.stitchGreen,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    logoText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2D3436',
        marginTop: 16,
    },
    tagline: {
        fontSize: 14,
        color: '#B2BEC3',
        marginTop: 8,
    },
});
