/**
 * ==========================================================
 * LOGIN.TSX — GERENCIAMENTO DE ESTADO (useState na Prática)
 * ==========================================================
 *
 * Conceitos ensinados:
 * - useState: criar e atualizar variáveis reativas
 * - TextInput: componente de entrada de texto
 * - TouchableOpacity: botão com feedback visual
 * - async/await: chamadas assíncronas à API
 * - Padrão try/catch/finally: tratamento de erros
 */
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { apiClient } from '../lib/api';

export default function LoginScreen() {
    // ── useState: O que é? ──
    // useState cria uma variável REATIVA. Quando ela muda, a tela re-renderiza.
    //
    // Sintaxe: const [valor, setValor] = useState(valorInicial)
    //   - valor: o dado atual
    //   - setValor: a função para ATUALIZAR o dado
    //   - valorInicial: o valor que a variável começa tendo
    //
    // ⚠️ NUNCA modifique 'valor' diretamente (ex: email = "x")
    //    SEMPRE use o setter (ex: setEmail("x"))

    const [email, setEmail] = useState('');       // Começa vazio
    const [password, setPassword] = useState('');  // Começa vazio
    const [loading, setLoading] = useState(false); // Começa como false

    const router = useRouter();

    // ── Função Assíncrona (async/await) ──
    // 'async' marca a função como assíncrona
    // 'await' pausa a execução até a Promise resolver
    async function handleLogin() {
        setLoading(true); // Mostra o indicador de carregamento

        // ── try/catch/finally ──
        // try: tenta executar o código
        // catch: captura erros se algo falhar
        // finally: roda SEMPRE, com ou sem erro (ideal para loading)
        try {
            await apiClient.auth.signIn(email, password);
            router.replace('/register'); // Navega após sucesso
        } catch (error: any) {
            Alert.alert('Erro ao entrar', error.message || 'Verifique suas credenciais');
        } finally {
            setLoading(false); // Esconde o loading SEMPRE
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Merge Skills</Text>
            <Text style={styles.subheader}>Faça login para continuar</Text>

            {/* ── TextInput: Campo de texto ──
                Props importantes:
                - value: dado atual (vem do useState)
                - onChangeText: função chamada a cada tecla (atualiza o estado)
                - placeholder: texto exibido quando vazio
                - keyboardType: tipo de teclado (email-address, numeric, etc)
                - autoCapitalize: controla maiúsculas automáticas
                - secureTextEntry: esconde o texto (para senhas)
            */}
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="#B2BEC3" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#B2BEC3"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#B2BEC3" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#B2BEC3"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {/* ── TouchableOpacity vs Button ──
                TouchableOpacity: botão customizável, reduz opacidade ao tocar
                Button: botão nativo do sistema (não customizável)
                Sempre usamos TouchableOpacity para designs personalizados!
            */}
            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={loading}
            >
                {loading
                    ? <ActivityIndicator color="#fff" />
                    : <Text style={styles.buttonText}>Entrar</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/register')}>
                <Text style={styles.linkText}>Criar nova conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2D3436',
    },
    subheader: {
        fontSize: 16,
        color: '#636E72',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        borderWidth: 1,
        borderColor: '#DFE6E9',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#2D3436',
    },
    button: {
        width: '100%',
        height: 56,
        backgroundColor: '#FF6B6B',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 20,
    },
    buttonDisabled: {
        backgroundColor: '#FFA8A8',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#636E72',
        fontSize: 14,
    },
});
