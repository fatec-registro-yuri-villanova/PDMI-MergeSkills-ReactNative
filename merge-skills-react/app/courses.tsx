import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { apiClient } from '../lib/api';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cursos Disponíveis</Text>
                <TouchableOpacity onPress={fetchCourses}>
                    <Ionicons name="refresh" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {loading ? (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="#ff0000" />
                    <Text style={styles.loadingText}>Carregando cursos...</Text>
                </View>
            ) : (
                <FlatList
                    data={courses}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                    ListEmptyComponent={
                        <View style={styles.centered}>
                            <Ionicons name="school-outline" size={64} color="#ccc" />
                            <Text style={styles.emptyText}>Nenhum curso encontrado.</Text>
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
        backgroundColor: '#fff'
    },
    header: {
        height: 64,
        backgroundColor: '#ff0000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        elevation: 4
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    list: {
        padding: 20
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 12
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    cardDesc: {
        fontSize: 14,
        color: '#666',
        marginTop: 4
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    loadingText: {
        marginTop: 12,
        color: '#666'
    },
    emptyText: {
        marginTop: 16,
        color: '#ccc',
        fontSize: 18
    }
});
