/**
 * ==========================================================
 * AULA 01 - FUNDAMENTOS DE TYPESCRIPT (NIVELAMENTO)
 * ==========================================================
 * 
 * Antes de mergulharmos no React Native e Expo, 
 * precisamos entender a linguagem base: TypeScript (ES6+).
 * Estas seções espelham os fundamentos de Kotlin do PDMII.
 */

// 1. CONST E LET — VARIÁVEIS E CONSTANTES (Equivalente ao val/var)
export const entendendoVariaveis = () => {
    // const: variável IMUTÁVEL (val)
    const pi: number = 3.14;
    const nomeDoCurso = "Merge Skills: React Native"; // Inferência de tipo

    // let: variável MUTÁVEL (var)
    let count: number = 0;
    count = 1; // Permitido

    console.log(`Curso: ${nomeDoCurso}, Versão: ${count}`);
}

// 2. TIPAGEM FORTE E TIPOS PRIMITIVOS
export const entendendoTipos = () => {
    // Tipos Primitivos Básicos
    const nome: string = "Yuri";
    const idade: number = 28;
    const isDeveloper: boolean = true;

    // Inferência vs Tipagem Explícita
    let cidade = "São Paulo"; // TS infere que é string
    // cidade = 10; // ERRO: O TS não permite mudar o tipo associado

    // Union Types (Permite mais de um tipo, muito usado com null)
    let telefone: string | null = null;
    telefone = "11999999999";

    // O perigo do 'any' (Foge da verificação do TS - EVITE!)
    let variavelDinamica: any = "Texto";
    variavelDinamica = 100;
    variavelDinamica.metodoInexistente(); // O TS não avisa o erro aqui!
}

// 3. NULL SAFETY (Optional Chaining & Nullish Coalescing)

export const lidandoComNulos = (githubDoProfessor: string | null = null) => {

    // Opcional Chaining `?.` (Equivalente ao Safe Call ?. do Kotlin)
    const letras = githubDoProfessor?.length;

    // Nullish Coalescing `??` (Equivalente ao Elvis Operator ?: do Kotlin)
    const linkSeguro = githubDoProfessor ?? "Não Cadastrado";

    console.log(`Link: ${linkSeguro}`);
}

// 3. FUNÇÕES (Arrow Functions e Default Params)
export const funcoes = () => {
    // Função tradicional
    function saudacao(nome: string): string {
        return `Olá, ${nome}`;
    }

    // Arrow Function (Single-expression)
    const somar = (a: number, b: number) => a + b;

    // Função com valor padrão
    const saudar = (nome: string, saudacao: string = "Olá") => {
        console.log(`${saudacao}, ${nome}!`);
    }

    saudar("Yuri"); // Olá, Yuri!
}

// 4. CONTROLE DE FLUXO (IF, Switch e Loops)
export const controleDeFluxo = (notaMedia: number) => {
    // Ternário como expressão
    const status = notaMedia >= 7.0 ? "Aprovado" : "Reprovado";

    // Switch Case potente
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

    // For...of (Equivalente ao for in do Kotlin)
    const tecnologias = ["React Native", "Expo", "TypeScript"];
    for (const tech of tecnologias) {
        console.log(`Aprenderemos: ${tech}`);
    }
}

// 5. COLEÇÕES E PIPELINE FUNCIONAL (Array, Map, Filter)
export const exemploColecoes = () => {
    const notas = [8, 7, 9, 10];

    // Map: transforma a lista
    const quadrados = notas.map(n => n * n);

    // Filter: filtra a lista
    const aprovados = notas.filter(n => n >= 7);

    // Pipeline (Encadeamento)
    notas
        .filter(n => n > 8)
        .map(n => n * 10)
        .forEach(n => console.log(n));
}

// 6. INTERFACES (Contratos de Dados - Equivalente a Data Classes)
export interface Aluno {
    id: number;
    nome: string;
    nota: number;
    email?: string; // Opcional
}

export const exemploInterface = () => {
    const novoAluno: Aluno = {
        id: 1,
        nome: "João",
        nota: 8.5
    };
    console.log(`Aluno: ${novoAluno.nome}`);
}

// 7. DESESTRUTURAÇÃO E SPREAD OPERATOR
export const manipulandoObjetos = () => {
    const usuario = { id: 1, nickname: "Yvillanova", cargo: "Dev" };

    // Destructuring
    const { nickname, cargo } = usuario;

    // Spread (Cópia e Merge)
    const usuarioPremium = { ...usuario, vip: true };
    const listaAtualizada = [...[1, 2], 3];
}

// 8. OOP E CLASSES
export class UsuarioPlataforma {
    constructor(public id: number, public nickname: string) { }

    autenticar() {
        console.log("Autenticando via email e senha...");
    }
}

export class AlunoPremium extends UsuarioPlataforma {
    constructor(id: number, nickname: string, public beneficiosVip: boolean) {
        super(id, nickname);
    }

    override autenticar() {
        super.autenticar();
        console.log("Acesso VIP Liberado!");
    }
}
