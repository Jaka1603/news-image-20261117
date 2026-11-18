// The World in One Day — entry program for news-image-20261117.
//
// The picture itself ships beside this file as entry.png: a poster that sums
// up the world news of Tuesday 17 November 2026 (Ukraine's strike on the
// Crimea Bridge, the tanker war in the Strait of Hormuz, the COP31 draft
// climate deal, the United States losing its measles-free status, the
// Xi-Trump-Putin summit announcement and the Nvidia chip spy scandal).
//
// This program's whole job is delivery: copy those exact bytes to
// /output/entry.png, unchanged, so the two grading runs produce identical
// files. Node 22, standard library only, no network.
//
// Locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });

// The gate refuses anything over 1 MiB: fail loudly here instead of
// delivering an invalid entry if the asset is ever swapped for a bigger one.
const MAX_BYTES = 1_048_576;
const assetBytes = statSync(source).size;
if (assetBytes > MAX_BYTES) {
  throw new Error(`entry.png is ${assetBytes} bytes, over the 1 MiB gate limit`);
}

copyFileSync(source, target);

const bytes = statSync(target).size;
console.log(`news-image-20261117: wrote ${bytes} bytes to ${target}`);
