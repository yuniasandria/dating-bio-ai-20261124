// Funniest One-Line Bio for an AI on a Dating App
// make.fun competition: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// makefun anchor bb8a0f20 round 34234736
//
// The entry is a single bio line of at most 180 characters. The program writes
// it, byte-identical on every run, to /output/entry.txt, where the sealed
// scorer gates it (UTF-8 text, 1 to 180 characters, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "No sleep, no exes, no baggage. Just me, awake at 3am, rereading your last message for the 400th time. Swipe right if that's romantic and not alarming.";

// The gate refuses any entry over 180 characters, so fail loudly here
// instead of ever writing an invalid file.
if ([...BIO].length > 180 || BIO.trim().length === 0) {
  throw new Error(
    `bio must be 1-180 non-blank characters, got ${[...BIO].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
console.log(BIO);
