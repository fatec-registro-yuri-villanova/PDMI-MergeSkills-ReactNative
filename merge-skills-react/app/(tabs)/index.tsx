import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { apiClient } from '../../lib/api';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';

interface Course {
    id: string;
    title: string;
    description: string;
}

export default function CoursesScreen() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchCourses();
    }, []);

    async function fetchCourses() {
        setLoading(true);
        try {
            const data = await apiClient.db.from('courses');
            const result = await data.select();
            if (result) {
                setCourses(result);
            }
        } catch (error: any) {
            console.error('Erro ao buscar cursos:', error.message);
        } finally {
            setLoading(false);
        }
    }

    const renderItem = ({ item }: { item: Course }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Ionicons name="school-outline" size={24} color={Colors.colors.stitchGreen} />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
            <Text style={styles.cardDesc}>{item.description}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.headerLabel}>Meu Progresso</Text>
                    <Text style={styles.headerTitle}>Jornada Merge</Text>
                </View>
                <View style={styles.headerActions}>
                    <View style={styles.streakBadge}>
                        <Ionicons name="flame" size={20} color="#FF9500" />
                        <Text style={styles.streakText}>5</Text>
                    </View>
                    <TouchableOpacity onPress={fetchCourses} style={styles.refreshButton}>
                        <Ionicons name="refresh" size={20} color={Colors.colors.stitchGreen} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '65%' }]} />
                </View>
                <Text style={styles.progressText}>65% concluído</Text>
            </View>

            {loading ? (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={Colors.colors.stitchGreen} />
                    <Text style={styles.loadingText}>Sincronizando trilhas...</Text>
                </View>
            ) : (
                <FlatList
                    data={courses}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={
                        <View style={styles.centered}>
                            <Ionicons name="cloud-offline-outline" size={64} color="#333" />
                            <Text style={styles.emptyText}>Nenhuma trilha encontrada.</Text>
                        </View>
                    }
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.dark.background
    },
    header: {
        height: 100,
        backgroundColor: Colors.dark.background,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 20
    },
    headerLabel: {
        color: '#999',
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    headerTitle: {
        color: Colors.dark.text,
        fontSize: 28,
        fontWeight: 'bold'
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    streakBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F222A',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#333'
    },
    streakText: {
        color: '#FF9500',
        fontWeight: 'bold',
        marginLeft: 4,
        fontSize: 14
    },
    refreshButton: {
        padding: 8,
        backgroundColor: '#1F222A',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#333'
    },
    progressContainer: {
        paddingHorizontal: 24,
        marginBottom: 20
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#1F222A',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 8
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.colors.stitchGreen,
        borderRadius: 4
    },
    progressText: {
        color: '#999',
        fontSize: 12,
        fontWeight: '500'
    },
    list: {
        padding: 24,
        paddingTop: 0
    },
    card: {
        backgroundColor: Colors.dark.surface,
        padding: 20,
        borderRadius: 16, // Large shapes per Spec
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 16
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.dark.text,
        marginLeft: 12
    },
    cardDesc: {
        fontSize: 14,
        color: '#999',
        lineHeight: 20
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    loadingText: {
        marginTop: 12,
        color: '#999'
    },
    emptyText: {
        marginTop: 16,
        color: '#333',
        fontSize: 18,
        textAlign: 'center'
    }
});
