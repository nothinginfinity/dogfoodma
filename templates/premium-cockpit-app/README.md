# Premium Cockpit App Template

This template is the first reusable Dogfoodma frontend app template.

It is designed for agent-built apps that need:

- mobile-first cockpit UI
- 3D visual scene shell
- MCP-style tool/runtime discovery
- D1 row binding contract
- R2 asset manifest contract
- KV theme config contract
- visual smoke receipts

## Files

- `scene.json` — default scene specification
- `theme.json` — design tokens and visual theme
- `bindings.json` — D1/R2/KV binding contract
- `template.manifest.json` — template metadata for agents

## Agent Flow

1. Load `template.manifest.json`.
2. Modify `scene.json` for the target app.
3. Modify `bindings.json` for app resources.
4. Use Dogfoodma `/api/compile` or `/mcp/call` to compile the shell.
5. Deploy through the Cloudflare/GitHub app factory pipeline.
