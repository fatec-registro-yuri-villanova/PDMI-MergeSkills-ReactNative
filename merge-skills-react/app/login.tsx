import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Entrar</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('Login attempt')}
            >
                <Text style={styles.buttonText}>Acessar Plataforma</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/register')}>
                <Text style={styles.linkText}>Não possui conta? Cadastre-se</Text>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 56,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16
    },
    icon: {
        marginRight: 12
    },
    input: {
        flex: 1,
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
