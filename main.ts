import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The streetlight flickered on just as I looked up, like the city had been waiting for me to notice it.";

// Gate: one sentence of 1-200 characters, no newlines, no whitespace-only.
const len = [...TEXT].length;
if (len < 1 || len > 200) throw new Error(`entry length ${len} outside gate 1-200`);
if (/\r|\n/.test(TEXT)) throw new Error("entry must be a single line");
if (!TEXT.trim()) throw new Error("entry must not be whitespace-only");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to /output/entry.txt`);
