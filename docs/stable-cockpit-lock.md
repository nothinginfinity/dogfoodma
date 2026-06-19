# Stable Cockpit Lock

## Status

The stable cockpit runtime is the current source of truth for Dogfoodma.

## Version

0.0.4-stable-cockpit

## Source file

src/worker.js

## Required live behavior

The browser must show only Dogfoodma concept nodes:

- Design System
- Scene Compiler
- MCP Tools
- Visual Receipt
- Three Runtime
- Data Adapter
- Asset Adapter
- App Factory

The browser must not show city/location demo nodes such as London, Tokyo, Dana Point, or Long Beach.

## Required controls

- Drag/fly scene
- Brake
- Reset
- Boost
- Speed label updates
- Crosshair targeting
- Tap/select drawer
- Studio / Tools / Schema / Sample / Receipt panels

## Lock rule

Do not change the visible cockpit sample or interaction loop when adding future MCP, template, or adapter features. Future features should be additive, isolated, or placed in separate routes/workers until manually approved.
