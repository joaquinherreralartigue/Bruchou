#!/usr/bin/env node
// Build-time content validation — run with: npm run validate-content
const fs = require("fs");
const path = require("path");

const BLOCKED_PHRASES = ["casos de éxito", "casos de exito", "success stories"];
const BLOCKED_CTAS = ["leer más", "leer mas", "ver más", "ver mas", "read more"];

let violations = 0;

const SKIP_FILES = ["validate-content.js", "content-validation.ts"];

function scanFile(filePath) {
  if (SKIP_FILES.some((f) => filePath.endsWith(f))) return;
  const content = fs.readFileSync(filePath, "utf8").toLowerCase();
  for (const phrase of BLOCKED_PHRASES) {
    if (content.includes(phrase)) {
      console.error(`❌  Frase bloqueada "${phrase}" en: ${filePath}`);
      violations++;
    }
  }
  for (const cta of BLOCKED_CTAS) {
    // Only flag exact CTA label matches in JSX (surrounded by > < or quotes)
    const pattern = new RegExp(`[>"']${cta.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[<"']`, "i");
    if (pattern.test(content)) {
      console.error(`❌  CTA genérico "${cta}" en: ${filePath}`);
      violations++;
    }
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".next", ".git"].includes(entry.name)) {
      walk(full);
    } else if (entry.isFile() && /\.(tsx|ts|jsx|js|json)$/.test(entry.name)) {
      scanFile(full);
    }
  }
}

walk(path.join(__dirname, ".."));

if (violations === 0) {
  console.log("✅  Validación de contenido: sin violaciones.");
} else {
  console.error(`\n⛔  ${violations} violación(es) encontrada(s). Corregir antes de publicar.`);
  process.exit(1);
}
