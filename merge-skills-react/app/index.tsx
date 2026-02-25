import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../constants/Colors';

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.logoContainer}>
                {/* Mockup for the Logo - Per Spec: MergeSkillsLogo */}
                <View style={styles.logoPlaceholder}>
                    <Text style={styles.logoSymbol}>M</Text>
                </View>
                <Text style={styles.logoText}>Merge Skills</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center'
    },
    logoPlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 24,
        backgroundColor: Colors.colors.stitchGreen,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24
    },
    logoSymbol: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#000'
    },
    logoText: {
        fontSize: 48, // Display Large approx
        fontWeight: 'bold',
        color: Colors.dark.text,
        textAlign: 'center'
    }
});
