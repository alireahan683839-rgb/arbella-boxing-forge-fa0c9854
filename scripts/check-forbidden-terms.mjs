#!/usr/bin/env node
// Fails if any forbidden term (e.g. "sauna") appears in src/.
// Recovery on the retreat is ice bath — never sauna. Update FORBIDDEN below
// to add more terms over time.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const FORBIDDEN = ["sauna"];
const ROOTS = ["src"];
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".css", ".html"]);

/** @type {{file: string, line: number, term: string, text: string}[]} */
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (EXTS.has(extname(name)) && name !== "routeTree.gen.ts") scan(p);
  }
}

function scan(file) {
  const lines = readFileSync(file, "utf8").split("\n");
  for (const term of FORBIDDEN) {
    const re = new RegExp(`\\b${term}\\b`, "i");
    lines.forEach((text, i) => {
      if (re.test(text)) hits.push({ file, line: i + 1, term, text: text.trim() });
    });
  }
}

for (const r of ROOTS) walk(r);

if (hits.length === 0) {
  console.log(`✓ No forbidden terms found (${FORBIDDEN.join(", ")}).`);
  process.exit(0);
}

console.error(`✗ Found ${hits.length} forbidden term occurrence(s):\n`);
for (const h of hits) {
  console.error(`  ${h.file}:${h.line}  [${h.term}]  ${h.text}`);
}
console.error(`\nReplace "sauna" with "ice bath" (or remove) and re-run.`);
process.exit(1);