/**
 * ==========================================================
 * AULA 01 - FUNDAMENTOS DE JAVASCRIPT/TYPESCRIPT (NIVELAMENTO)
 * ==========================================================
 * 
 * Antes de mergulharmos no React Native e Expo, 
 * precisamos entender a linguagem base: JavaScript (ES6+).
 */

// 1. VARIÁVEIS E MUTABILIDADE
export const entendendoVariaveis = () => {
    const nomeDoCurso = "Merge Skills: React Native";
    // nomeDoCurso = "Outro"; // ERRO!

    let versaoDoApp = 1;
    versaoDoApp = 2; // OK!

    console.log(`Curso: ${nomeDoCurso}, Versão: ${versaoDoApp}`);
}

// 2. NULABILIDADE (Optional Chaining & Nullish Coalescing)
export const lidandoComNulos = () => {
    let githubDoProfessor: string | null = null;
    
    // Equivante ao Safe Call ?. do Kotlin
    const letras = githubDoProfessor?.length; 

    // Equivalante ao Elvis Operator ?: do Kotlin
    const linkSeguro = githubDoProfessor ?? "Não Cadastrado";

    console.log(`Link: ${linkSeguro}`);
}

// 3. CONTROLE DE FLUXO (IF e Switch)
export const checarAprovacao = (notaMedia: number) => {
    const status = notaMedia >= 7.0 ? "Aprovado" : "Reprovado";

    // Switch Case no JS
    switch (true) {
        case notaMedia === 10.0:
            console.log("Aluno Perfeito!");
            break;
        case notaMedia >= 7.0:
            console.log("Aprovado com folga");
            break;
        default:
            console.log("Precisamos estudar mais");
    }
}

// 4. LOOPS E MÉTODOS DE ARRAY
export const testandoLoops = () => {
    const tecnologias = ["React Native", "Expo", "React Navigation", "Zustand"];

    // for...of (equivalente ao for in do Kotlin)
    for (const tech of tecnologias) {
        console.log(`Aprenderemos: ${tech}`);
    }

    // Programação Funcional (forEach)
    tecnologias.forEach(tech => {
        console.log(`Listando: ${tech}`);
    });
}

// 5. ORIENTAÇÃO A OBJETOS E CLASSES
export class AlunoNormal {
    constructor(public nome: string, public idade: number) {}

    apresentar() {
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// 6. HERANÇA
export class UsuarioPlataforma {
    constructor(public id: number, public nickname: string) {}

    autenticar() {
        console.log("Autenticando via email e senha padrão...");
    }
}

export class AlunoPremium extends UsuarioPlataforma {
    constructor(id: number, nickname: string, public beneficiosVip: boolean) {
        super(id, nickname);
    }

    autenticar() {
        super.autenticar();
        console.log("Acesso VIP Liberado instantaneamente!");
    }
}
