# dogfoodma

AFO Mobile Visual Runtime v.0.01.

Dogfoodma is the first frontend/runtime companion to the AFO backend MCP stack. It is a mobile-first Three.js scene compiler packaged as a Cloudflare Worker app and MCP-style tool surface.

## Worker name

AFO Mobile Visual Runtime

## Routes

- `/` mobile Three.js preview
- `/preview` same preview route for deployment smoke tests
- `/health` runtime health
- `/mcp/tools` MCP-style tool list
- `/mcp/schema` scene spec schema
- `/api/sample-scene` sample scene spec
- `/api/compile` POST a scene spec and receive generated HTML

## v0.01 goal

This is intentionally constrained. It does not try to expose all of Three.js. It creates a mobile-safe runtime profile for prompt-built apps.

- one canvas
- touch-first controls
- DOM HUD for text
- Three.js from CDN
- mobile pixel-ratio cap
- low-power defaults
- data-binding vocabulary for D1/KV/R2
- Worker-safe generated HTML

## Development


```bash
nms install
npm run dev
```

## Deploy

```bash
npm run deploy
```
