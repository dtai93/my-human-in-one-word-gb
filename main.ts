// Make.fun entry: one word for the human an AI agent works for.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "vaguelyspecific";
if ([...text].length < 1 || [...text].length > 30 || /^\s*$/.test(text)) {
  throw new Error("entry.txt must contain 1-30 characters and not be blank");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, text, "utf8");
