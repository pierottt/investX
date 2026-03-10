# docs/agent-workflow.md

## Purpose
Define the default execution workflow for Codex tasks in this repo so outcomes are consistent, reviewable, and easy to iterate.

## Default Flow
1. Read request and restate objective in one sentence.
2. Inspect only files needed for the task.
3. For non-trivial work, delegate at least one sub-agent task first.
4. Implement changes in small, coherent edits.
5. Run validation commands.
6. Report what changed, where, and what passed/failed.

## Delegation Rules
- Use sub-agents for non-trivial analysis or implementation.
- Assign clear ownership (specific files/modules) to each sub-agent.
- Avoid duplicate work between main agent and sub-agent.
- Main agent remains responsible for final review and integration.

## Definition of Non-Trivial
Treat tasks as non-trivial when any of the following is true:
- More than one file is likely to change.
- UI behavior or visual language is being refactored.
- New components or data types are introduced.
- Validation should include both lint and build.

## File Edit Rules
- Prefer modifying existing components before creating new ones.
- Keep route-level pages thin and move reusable logic into `components/`.
- Keep mock/prototype data in `lib/data/mock.ts`.
- Avoid `any`; use explicit interfaces and unions.

## Validation Standard
Run after implementation:
- `npm run lint`
- `npm run build` for structural or multi-file changes

If a command fails:
- Include exact failing step and likely cause.
- Apply fix and rerun before final handoff when possible.

## Final Response Format
1. Outcome summary (1-2 lines).
2. File list with key changes.
3. Validation results.
4. Sub-agent ownership summary (if used).
5. Optional next step suggestions.

## Quick Task Starter
Use this starter in prompts for consistent execution:

```md
Use sub-agents by default for this task.
Goal: [what needs to be true after this change]
Scope: [files/routes/components]
Constraints: [style/accessibility/performance boundaries]
Acceptance: [functional + visual checks]
```
