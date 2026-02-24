import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { apiClient } from '../lib/api';

export default function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleRegister() {
        if (!name || !email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        setLoading(true);
        try {
            await apiClient.auth.signUp(name, email, password);
            Alert.alert('Sucesso', 'Conta criada com sucesso!', [
                { text: 'OK', onPress: () => router.back() }
            ]);
        } catch (error: any) {
            Alert.alert('Erro ao cadastrar', error.message || 'Ocorreu um erro inesperado');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastrar</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity
                style={[styles.button, loading ? styles.buttonDisabled : null]}
                onPress={handleRegister}
                disabled={loading}
            >
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Criar Conta</Text>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.linkText}>Voltar para o Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff0000',
        marginBottom: 40
    },
    input: {
        width: '100%',
        height: 56,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16
    },
    button: {
        width: '100%',
        height: 56,
        backgroundColor: '#ff0000',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
        marginBottom: 20
    },
    buttonDisabled: {
        backgroundColor: '#ffaaaa'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    linkText: {
        color: '#333',
        fontSize: 14
    }
});
