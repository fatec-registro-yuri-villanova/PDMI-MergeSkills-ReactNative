/**
 * ==========================================================
 * HELLO.TSX — SEU PRIMEIRO COMPONENTE REACT NATIVE
 * ==========================================================
 *
 * Este arquivo ensina os conceitos básicos de um componente:
 * - View, Text e StyleSheet
 * - Flexbox para layout
 * - Estilização e customização visual
 */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// ✅ Um componente React Native é uma FUNÇÃO que retorna JSX (UI)
export default function HelloScreen() {
    return (
        // View = o <div> do React Native. Todo layout começa com View.
        <View style={styles.container}>

            {/* ── SEÇÃO 1: Texto Básico ── */}
            <Text style={styles.titulo}>Olá, React Native! 👋</Text>
            <Text style={styles.subtitulo}>Meu primeiro componente</Text>

            {/* ── SEÇÃO 2: Flexbox em Ação ── */}
            {/* flexDirection: 'row' = itens lado a lado (horizontal) */}
            <View style={styles.row}>
                <View style={[styles.box, { backgroundColor: '#FF6B6B' }]}>
                    <Text style={styles.boxText}>1</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#4ECDC4' }]}>
                    <Text style={styles.boxText}>2</Text>
                </View>
                <View style={[styles.box, { backgroundColor: '#45B7D1' }]}>
                    <Text style={styles.boxText}>3</Text>
                </View>
            </View>

            {/* ── SEÇÃO 3: Composição de Estilos ── */}
            {/* style={[base, variante]} → Combina múltiplos estilos! */}
            <View style={[styles.card, styles.cardDestaque]}>
                <Text style={styles.cardTitulo}>Card com Sombra</Text>
                <Text style={styles.cardTexto}>
                    Aqui usamos borderRadius, elevation (Android)
                    e shadowColor (iOS) para criar profundidade.
                </Text>
            </View>
        </View>
    );
}

// ── STYLESHEET: Por que usar? ──
// 1. Performance: Cria os estilos uma vez, não a cada render
// 2. Autocomplete: O editor sugere propriedades
// 3. Validação: Erros de digitação são detectados
const { width } = Dimensions.get('window'); // Largura da tela para responsividade

const styles = StyleSheet.create({
    // ── Layout Principal (Flexbox) ──
    container: {
        flex: 1,                    // Ocupa 100% do espaço disponível
        backgroundColor: '#F8F9FA', // Cor de fundo
        alignItems: 'center',       // Centraliza filhos horizontalmente
        justifyContent: 'center',   // Centraliza filhos verticalmente
        padding: 24,                // Espaçamento interno
    },

    // ── Tipografia ──
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: '#636E72',
        marginBottom: 32,
    },

    // ── Flexbox Row (horizontal) ──
    row: {
        flexDirection: 'row',       // Itens lado a lado
        gap: 12,                    // Espaço entre itens
        marginBottom: 32,
    },

    // ── Boxes coloridos ──
    box: {
        width: 80,
        height: 80,
        borderRadius: 16,           // Bordas arredondadas
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    // ── Card com Sombra ──
    card: {
        width: width - 48,          // Responsivo: tela menos padding
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    cardDestaque: {
        // Sombra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // Sombra Android
        elevation: 4,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    cardTexto: {
        fontSize: 14,
        color: '#636E72',
        lineHeight: 20,
    },
});
