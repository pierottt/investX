# AGENTS.md

## Delegation Policy
For every non-trivial request, spawn sub-agent(s) first.

- Main agent acts as orchestrator/integrator.
- Use at least one sub-agent for implementation or analysis.
- In the final response, list which sub-agent handled which part.
- Only skip sub-agents for truly trivial tasks (single quick command or tiny edit).

## Request Pattern
Start prompts with: `Use sub-agents by default for this task.`
