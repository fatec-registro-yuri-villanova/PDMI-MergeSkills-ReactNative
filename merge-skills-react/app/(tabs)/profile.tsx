import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import { apiClient } from '../../lib/api';

export default function ProfileScreen() {
    const router = useRouter();

    const handleLogout = async () => {
        await apiClient.auth.signOut();
        router.replace('/login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Meu Perfil</Text>
                </View>

                <View style={styles.profileSection}>
                    <View style={styles.avatarPlaceholder}>
                        <Ionicons name="person" size={50} color={Colors.colors.stitchGreen} />
                    </View>
                    <Text style={styles.userName}>Estudante Merge</Text>
                    <Text style={styles.userEmail}>estudante@mergeskills.com</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Ionicons name="flame" size={24} color="#FF9500" />
                        <Text style={styles.statValue}>5</Text>
                        <Text style={styles.statLabel}>Ofensiva</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Ionicons name="trophy" size={24} color="#FFD60A" />
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel}>Aulas</Text>
                    </View>
                </View>

                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="settings-outline" size={20} color={Colors.dark.text} />
                        <Text style={styles.menuText}>Configurações</Text>
                        <Ionicons name="chevron-forward" size={16} color="#444" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                        <Ionicons name="log-out-outline" size={20} color={Colors.colors.stitchError} />
                        <Text style={[styles.menuText, { color: Colors.colors.stitchError }]}>Sair da Conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    container: {
        padding: 24
    },
    header: {
        marginBottom: 32
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.dark.text
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 32
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: Colors.dark.surface,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 2,
        borderColor: Colors.colors.stitchGreen
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.dark.text
    },
    userEmail: {
        fontSize: 16,
        color: '#999',
        marginTop: 4
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32
    },
    statCard: {
        backgroundColor: Colors.dark.surface,
        width: '48%',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center'
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.dark.text,
        marginTop: 8
    },
    statLabel: {
        fontSize: 12,
        color: '#999',
        marginTop: 2
    },
    menu: {
        backgroundColor: Colors.dark.surface,
        borderRadius: 16,
        overflow: 'hidden'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1F222A'
    },
    menuText: {
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
        color: Colors.dark.text
    }
});
