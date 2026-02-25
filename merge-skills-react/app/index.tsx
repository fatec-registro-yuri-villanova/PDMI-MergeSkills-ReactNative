import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../constants/Colors';
import { apiClient } from '../lib/api';

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            // Pequeno delay para garantir que o SplashScreen do Expo foi exibido
            await new Promise(resolve => setTimeout(resolve, 2000));

            try {
                const authenticated = await apiClient.auth.isAuthenticated();
                if (authenticated) {
                    // Se estiver autenticado, vai para as abas (que criaremos em seguida)
                    // Por enquanto removemos a rota manual de courses para (tabs)
                    router.replace('/(tabs)');
                } else {
                    router.replace('/login');
                }
            } catch (error) {
                console.error('Erro no checkAuth:', error);
                router.replace('/login');
            }
        };

        checkAuth();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.logoContainer}>
                <View style={styles.logoSymbol}>
                    <Text style={styles.logoText}>M</Text>
                </View>
                <Text style={styles.brandName}>Merge Skills</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: 'center'
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
        fontSize: 57,
        fontWeight: 'bold',
        color: Colors.dark.background
    },
    brandName: {
        fontSize: 32,
        fontWeight: '600', // SemiBold
        color: Colors.colors.stitchGreen,
        letterSpacing: 1
    }
});
