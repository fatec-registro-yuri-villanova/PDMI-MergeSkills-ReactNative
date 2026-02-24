import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import * as Fundamentos from '../basics/FundamentosJS';

export default function HomeScreen() {

    useEffect(() => {
        console.log("=== EXECUTANDO A AULA 01 (FUNDAMENTOS JS) ===");
        Fundamentos.entendendoVariaveis();
        Fundamentos.lidandoComNulos();
        Fundamentos.checarAprovacao(8.5);
        Fundamentos.testandoLoops();

        const aluno = new Fundamentos.AlunoNormal("Yuri", 20);
        aluno.apresentar();

        const alunoVip = new Fundamentos.AlunoPremium(1, "yuri_dev", true);
        alunoVip.autenticar();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Merge Skills Mobile!</Text>
            <Text style={styles.subtitle}>(Aula 01 - Hello World)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        color: '#666'
    }
});
