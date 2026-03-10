/**
 * ==========================================================
 * REGISTER.TSX — REFORÇO DE useState E VALIDAÇÃO
 * ==========================================================
 *
 * Esta tela reforça os conceitos do login.tsx:
 * - Múltiplos useState (nome, email, senha)
 * - Validação básica de formulário
 * - Navegação com router.back()
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
import { apiClient } from '../lib/api';
import Colors from '../constants/Colors';
import StitchButton from '../components/StitchButton';

export default function RegisterScreen() {
    // Reforço: cada campo do formulário tem seu próprio useState
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleRegister() {
        // Validação simples: checa se todos os campos foram preenchidos
        if (!name || !email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return; // Interrompe a execução se faltar algo
        }

        setLoading(true);
        try {
            await apiClient.auth.signUp(name, email, password);
            Alert.alert('Sucesso', 'Conta criada com sucesso!', [
                { text: 'OK', onPress: () => router.back() } // Volta à tela anterior
            ]);
        } catch (error: any) {
            Alert.alert('Erro ao cadastrar', error.message || 'Ocorreu um erro inesperado');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>Nova Conta</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                placeholderTextColor="#B2BEC3"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#B2BEC3"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#B2BEC3"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleRegister}
                disabled={loading}
            >
                {loading
                    ? <ActivityIndicator color="#fff" />
                    : <Text style={styles.buttonText}>Criar Conta</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()} style={styles.linkButton}>
                <Text style={styles.linkText}>Já tem uma conta? <Text style={styles.linkHighlight}>Entre aqui</Text></Text>
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
        marginBottom: 40,
    },
    inputContainer: {
        width: '100%',
        height: 56,
        borderWidth: 1,
        borderColor: '#DFE6E9',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: '#fff',
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
