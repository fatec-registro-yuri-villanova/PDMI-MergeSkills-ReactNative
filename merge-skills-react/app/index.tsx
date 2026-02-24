import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

export default function Aula03Screen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Ionicons name="person" size={100} color="#ff0000" />
                <Text style={styles.logoText}>Merge Skills</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center'
    },
    logoText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 16
    }
});
