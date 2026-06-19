# Dogfoodma / AFO Mobile Visual Runtime

Dogfoodma is a premium frontend MCP-style runtime for agent-built mobile visual apps.

Live runtime:
https://afo-mobile-visual-runtime.jaredtechfit.workers.dev

Current version: 0.0.3

## What it does

Dogfoodma lets agents describe a frontend as a high-level design and scene spec, then compiles that spec into mobile-first visual output.

It is not just a Three.js demo. It is a frontend template generator.

## v0.03 routes

- `/studio`
- `/health`
- `/llms.txt`
- `/openapi.json`
- `/agent-actions`
- `/mcp/tools`
- `/mcp/schema`
- `/mcp/call`
- `/api/sample-scene`
- `/api/design/presets`
- `/api/design/compile`
- `/api/scene/export/three-json`
- `/api/scene/export/r3f`
- `/api/scene/export/gltf-manifest`
- `/api/compile`
- `/api/receipt`

## v0.03 tools

- `create_design_system`
- `create_scene_spec`
- `create_premium_mobile_shell`
- `compile_three_worker_page`
- `compile_three_object_graph`
- `compile_r3f_component_tree`
- `compile_gltf_manifest`
- `validate_mobile_performance_budget`
- `generate_visual_receipt`

## Next target

v0.04 should add a formal MCP transport wrapper, D1 live adapter, R2 signed asset adapter, and screenshot smoke receipts.
