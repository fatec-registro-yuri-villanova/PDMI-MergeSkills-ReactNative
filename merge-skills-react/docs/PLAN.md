# Aula 01: Reestruturação Didática — Componentes React Native

## Objetivo
Transformar a aula-01 em uma progressão gradativa que ensina componentes React Native do zero até a tela de Login completa. Incluir explicações sobre gerenciamento de estado (`useState`) e efeitos colaterais (`useEffect`).

## Problema Atual
- A branch pula direto para telas complexas sem ensinar componentes básicos.
- Existem arquivos não-didáticos (boilerplate) poluindo a branch: `(tabs)/`, `modal.tsx`, `+html.tsx`, `courses.tsx`, `components/EditScreenInfo.tsx`, etc.
- Falta explicação sobre `useState`, `useEffect` e `StyleSheet`.

---

## Fase 1: Limpeza — Remover arquivos irrelevantes

### [DELETE] Arquivos a remover da branch
| Arquivo | Motivo |
|---------|--------|
| `app/(tabs)/` (pasta inteira) | Boilerplate do template, não faz parte da aula-01 |
| `app/modal.tsx` | Boilerplate do template |
| `app/+html.tsx` | Boilerplate web-only |
| `app/+not-found.tsx` | Boilerplate, pode ser readicionado depois |
| `app/courses.tsx` | Pertence à aula-02+ (fetch de dados) |
| `components/EditScreenInfo.tsx` | Boilerplate não usado |
| `components/ExternalLink.tsx` | Boilerplate não usado |
| `components/StyledText.tsx` | Boilerplate não usado |
| `components/Themed.tsx` | Boilerplate não usado |
| `components/__tests__/` | Testes do boilerplate |
| `components/useClientOnlyValue.ts` | Boilerplate web |
| `components/useClientOnlyValue.web.ts` | Boilerplate web |
| `components/useColorScheme.ts` | Boilerplate |
| `components/useColorScheme.web.ts` | Boilerplate web |

---

## Fase 2: Criar tela didática `hello.tsx` (Componente Simples)

### [NEW] `app/hello.tsx`
Uma tela mínima que ensina:
- `View`, `Text`, `StyleSheet`
- Props de estilo (`flex`, `alignItems`, `justifyContent`)
- Apenas componentes de exibição (sem estado)

---

## Fase 3: Estilização e Customização de Componentes

### [NOVA SEÇÃO na Living Docs + comentários no código]
Ensinar de forma gradativa como estilizar componentes:
- **`StyleSheet.create`** — por que usar ao invés de objetos inline
- **Flexbox no React Native** — `flex`, `flexDirection`, `alignItems`, `justifyContent`
- **Cores, bordas e sombras** — `backgroundColor`, `borderRadius`, `elevation`/`shadowColor`
- **Dimensões** — `width`, `height`, porcentagens, `flex: 1`
- **Margens e Padding** — `margin`, `padding`, `gap`
- **Composição de estilos** — `style={[styles.base, styles.variante]}` (array de estilos)
- **Responsividade** — `Dimensions.get('window')` e porcentagens

> Essa seção usa o `hello.tsx` como base e evolui os estilos gradativamente.

---

## Fase 4: Refatorar `index.tsx` (Splash com `useEffect`)

### [MODIFY] `app/index.tsx`
- Adicionar comentários didáticos explicando cada conceito
- Explicar `useEffect` com cleanup (`clearTimeout`)
- Explicar o array de dependências `[]`

---

## Fase 5: Refatorar `login.tsx` (Estado com `useState`)

### [MODIFY] `app/login.tsx`
- Adicionar comentários didáticos em cada bloco
- Explicar `useState` para cada campo
- Explicar `async/await` e o padrão `try/catch/finally`
- Explicar `TouchableOpacity` vs `Button`
- Explicar `TextInput` com props (`secureTextEntry`, `keyboardType`)

---

## Fase 6: Simplificar `_layout.tsx` e `register.tsx`

### [MODIFY] `app/_layout.tsx`
- Remover referências a rotas deletadas
- Manter apenas: `index`, `login`, `register`

### [MODIFY] `app/register.tsx`
- Adicionar comentários didáticos (reforço de `useState`)

---

## Fase 7: Atualizar Living Docs (`pdmi/aula-01.mdx`)

### [MODIFY] `living-docs/docs/pdmi/aula-01.mdx`
Após a seção de Fundamentos de TypeScript, expandir significativamente:
1. **Tabela de Arquivos** — atualizada (sem boilerplate)
2. **Componentes Básicos** — mantém a tabela atual
3. **[NOVA] Seção: Seu Primeiro Componente** — explica `hello.tsx`
4. **[NOVA] Seção: Estilização e Customização** — `StyleSheet`, Flexbox, composição de estilos
5. **[NOVA] Seção: useEffect — Efeitos Colaterais** — explica o Splash
6. **[NOVA] Seção: useState — Gerenciamento de Estado** — explica formulários
7. **Código de Referência: Login** — já existente, manter com melhorias
8. **Exercícios** — atualizar para refletir as novas seções

---

## Fase 8: Commit e Propagação

- Commit na `aula-01`
- Cherry-pick para `aula-02` até `aula-20`

---

## Agents Envolvidos

| # | Agent | Responsabilidade |
|---|-------|------------------|
| 1 | `project-planner` | Este plano |
| 2 | `mobile-developer` | Limpeza de arquivos, criação de `hello.tsx`, refatoração didática do código |
| 3 | `documentation-writer` | Atualização completa do `aula-01.mdx` |
| 4 | `devops-engineer` | Commit e propagação para todas as branches |
