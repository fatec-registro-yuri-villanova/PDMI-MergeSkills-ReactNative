import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, ActivityIndicator, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { apiClient } from '../lib/api';
import Colors from '../constants/Colors';
import StitchButton from '../components/StitchButton';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleLogin() {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }
        setLoading(true);
        try {
            await apiClient.auth.signIn(email, password);
            router.replace('/(tabs)');
        } catch (error: any) {
            Alert.alert('Erro ao entrar', error.message || 'Verifique suas credenciais');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.header}>Merge Skills</Text>
            <Text style={styles.subheader}>Acesse sua jornada dev</Text>

            <View style={styles.spacer} />

            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color={Colors.dark.text} style={styles.icon} />
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
                <Ionicons name="lock-closed-outline" size={20} color={Colors.dark.text} style={styles.icon} />
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
                title="Entrar"
                onPress={handleLogin}
                loading={loading}
                style={styles.loginButton}
            />

            <TouchableOpacity style={styles.linkButton} onPress={() => router.push('/register')}>
                <Text style={styles.linkText}>Não tem uma conta? <Text style={styles.linkHighlight}>Cadastre-se</Text></Text>
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
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.colors.stitchGreen,
        textAlign: 'center'
    },
    subheader: {
        fontSize: 16,
        color: '#999',
        marginBottom: 40,
        textAlign: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        backgroundColor: Colors.dark.surface,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#333'
    },
    icon: {
        marginRight: 12
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.dark.text
    },
    loginButton: {
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
    },
    spacer: {
        height: 20
    }
});
