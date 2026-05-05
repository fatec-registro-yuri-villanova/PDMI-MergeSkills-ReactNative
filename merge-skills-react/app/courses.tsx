/**
 * ==========================================================
 * COURSES.TSX — HOME / LISTA DE CURSOS (PDMI Aula 07)
 * ==========================================================
 *
 * EXERCÍCIO: Implemente a tela Home com a lista de cursos.
 *
 * Requisitos:
 * 1. Ao montar a tela, buscar cursos via: apiClient.db.from('courses') → .select()
 * 2. Enquanto carrega, exibir ActivityIndicator centralizado
 * 3. Renderizar a lista usando FlatList com cards (título + descrição)
 * 4. Exibir uma mensagem/ícone quando não houver cursos
 * 5. Header fixo com título "Cursos Disponíveis" e botão de refresh
 *
 * Interface esperada:
 *   interface Course { id: string; title: string; description: string; }
 *
 * Imports úteis:
 * - apiClient (../lib/api)
 * - FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity
 * - Ionicons (ex: "refresh", "school-outline")
 * ==========================================================
 */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { apiClient } from '../lib/api';
import { Ionicons } from '@expo/vector-icons';

interface Course {
    id: string;
    title: string;
    description: string;
}

export default function CoursesScreen() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourses();
    }, []);

    async function fetchCourses() {
        // TODO: buscar cursos usando apiClient.db.from('courses')
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* TODO: construir o layout da tela de cursos */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
