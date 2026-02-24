import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Aula 02 - Data Interfaces e Safe Calls
interface UserProfile {
    name: string;
    role?: string; // Opcional para demonstrar Null Safety
}

export default function Aula02Screen() {
    const [activeProfile, setActiveProfile] = useState<UserProfile>({
        name: "Aluno MergeSkills",
        role: "Developer"
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Prática Aula 02</Text>

            <View style={styles.spacer} />

            {/* Demonstração de Row (FlexDirection: row) */}
            <View style={styles.profileRow}>
                {/* Avatar improvisado */}
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                        {activeProfile.name.charAt(0).toUpperCase()}
                    </Text>
                </View>

                <View style={styles.textColumn}>
                    <Text style={styles.nameText}>{activeProfile.name}</Text>
                    {/* Usando Nullish Coalescing (equivalente ao Elvis ?: do Kotlin) */}
                    <Text style={styles.roleText}>
                        {(activeProfile.role ?? "SEM CARGO").toUpperCase()}
                    </Text>
                </View>
            </View>

            <View style={styles.largeSpacer} />

            {/* Botões para simular mudanças de estado */}
            <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={() => setActiveProfile({ name: "Visitante", role: undefined })}
            >
                <Text style={styles.buttonText}>Simular Nullable (??)</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity
                style={[styles.button, styles.primaryButton]}
                onPress={() => setActiveProfile({ name: "Aluno Vip", role: "Senior RN Dev" })}
            >
                <Text style={[styles.buttonText, { color: '#fff' }]}>Restaurar Dev</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff0000', // Primary Red
    },
    spacer: {
        height: 16
    },
    largeSpacer: {
        height: 32
    },
    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    textColumn: {
        marginLeft: 16
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    roleText: {
        fontSize: 16,
        color: '#666'
    },
    button: {
        width: '100%',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center'
    },
    primaryButton: {
        backgroundColor: '#ff0000'
    },
    secondaryButton: {
        backgroundColor: '#f0f0f0'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600'
    }
});
