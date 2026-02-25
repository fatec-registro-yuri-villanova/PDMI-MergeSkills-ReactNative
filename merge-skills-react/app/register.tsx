import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { apiClient } from '../lib/api';
import Colors from '../constants/Colors';
import StitchButton from '../components/StitchButton';

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
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>Nova Conta</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    placeholderTextColor="#999"
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <StitchButton
                title="Criar Conta"
                onPress={handleRegister}
                loading={loading}
                style={styles.registerButton}
            />

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
        backgroundColor: Colors.dark.background,
        justifyContent: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.colors.stitchGreen,
        marginBottom: 40,
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        height: 56,
        backgroundColor: Colors.dark.surface,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: 'center'
    },
    input: {
        fontSize: 16,
        color: Colors.dark.text
    },
    registerButton: {
        marginTop: 24,
        marginBottom: 20
    },
    linkButton: {
        alignItems: 'center'
    },
    linkText: {
        color: '#999',
        fontSize: 14
    },
    linkHighlight: {
        color: Colors.colors.stitchGreen,
        fontWeight: 'bold'
    }
});
