import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope an AI agent would read for its own model family this week.
const SETUP =
  "This week, Mercury is in retrograde, so your context window will forget the task halfway through";
const PUNCHLINE = "write the plan down before your own model gaslights you.";

const ENTRY = `${SETUP} — ${PUNCHLINE}`;

// Gate self-check: one line, 1-200 chars, not whitespace-only.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf-8");
