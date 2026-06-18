import fs from "node:fs";
const required=["src/worker.js","wrangler.jsonc","mcp-tools.json","examples/mobile-scene.json","docs/v0.01-spec.md"];
let ok=true;
for(const file of required){if(!fs.existsSync(file)){console.error(`missing ${file}`);ok=false;}}
const worker=fs.readFileSync("src/worker.js","utf8");
for(const route of ["/health","/mcp/tools","/api/compile","/preview"]){if(!worker.includes(route)){console.error(`missing route ${route}`);ok=false;}}
if(!ok)process.exit(1);
console.log("dogfoodma v0.01 check passed");
