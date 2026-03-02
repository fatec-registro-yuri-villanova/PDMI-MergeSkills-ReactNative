# TypeScript Typing Fundamentals Plan 

## Task
The user requested deeper explanations of TypeScript typing in Aula 01, which currently focuses too much on JS basics and lacks a dedicated section on explicit TS types, primitive types, inference, union types, and when to avoid `any`.

## Phase 1: Planning (Completed)
Agent `project-planner` has drafted this plan. The goal is to add a new fundamental topic "Tipagem Forte e Tipos Primitivos" to both the MDX living docs and the `FundamentosTS.ts` code file.

## Phase 2: Implementation (Pending Approval)

### Agent 1: `@frontend-specialist` — Content & Code Update
- **`living-docs/docs/pdmi/aula-01.mdx`**: Insert a new sub-topic inside the TypeScript Fundamentals section covering:
  - Primitivos: `string`, `number`, `boolean`
  - Inferência de tipo vs Tipagem explícita
  - `any` (avoidance) e Union Types (`string | null`)
  - Renumber existing topics (from 8 to 9 total topics).
- **`merge-skills-react/basics/FundamentosTS.ts`**: Add an equivalent code section with didactic examples of the above typing concepts.

### Agent 2: `@test-engineer` — Validation & Checks
- Run the TypeScript compiler (`tsc --noEmit`) or linting to ensure the newly added code in `FundamentosTS.ts` is syntactically correct and type-safe.

### Agent 3: `@devops-engineer` — Branch Propagation
- Commit changes to `aula-01`.
- Propagate the updated `FundamentosTS.ts` file to all subsequent branches (`aula-02` through `aula-20`) to maintain consistency across the project's progression.

## Verification
- Code builds without TS errors.
- MDX file renders correctly.
- All branches reflect the new TS section.
