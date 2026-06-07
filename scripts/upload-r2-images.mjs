#!/usr/bin/env node
// ---------------------------------------------------------------------------
// Download chosen images and upload them to Cloudflare R2 under the keys the
// site expects (guides/<slug>-hero.jpg, -card.jpg).
//
// 1. Pick photos (see the curated links the assistant gave you). On Unsplash,
//    open the photo, right-click the image → "Copy image address" — that gives
//    a direct https://images.unsplash.com/... URL. Paste it next to the key.
//    (Leave "" to skip a key; you can paste the same URL for hero and card.)
// 2. Auth wrangler once: `npx wrangler login`  (or set CLOUDFLARE_API_TOKEN
//    and CLOUDFLARE_ACCOUNT_ID in your env).
// 3. Run:  R2_BUCKET=<your-bucket-name> node scripts/upload-r2-images.mjs
//    (R2_BUCKET is the bucket NAME from the R2 dashboard, not the r2.dev URL.)
// ---------------------------------------------------------------------------
import { execFileSync } from "node:child_process";
import { writeFileSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BUCKET = process.env.R2_BUCKET;
if (!BUCKET) {
  console.error("✗ Set R2_BUCKET to your R2 bucket name, e.g. R2_BUCKET=roadtripsa node scripts/upload-r2-images.mjs");
  process.exit(1);
}

// key (object path in the bucket)  ->  source image URL you picked
const MAP = {
  "guides/kruger-safari-guide-hero.jpg": "",
  "guides/kruger-safari-guide-card.jpg": "",
  "guides/garden-route-7-day-itinerary-hero.jpg": "",
  "guides/garden-route-7-day-itinerary-card.jpg": "",
  "guides/budget-weekend-getaways-joburg-hero.jpg": "",
  "guides/budget-weekend-getaways-joburg-card.jpg": "",
  "guides/travel-during-load-shedding-hero.jpg": "",
  "guides/travel-during-load-shedding-card.jpg": "",
  "guides/best-time-to-visit-south-africa-hero.jpg": "",
  "guides/best-time-to-visit-south-africa-card.jpg": "",
  "guides/is-south-africa-safe-for-tourists-hero.jpg": "",
  "guides/is-south-africa-safe-for-tourists-card.jpg": "",
  "guides/renting-a-car-in-south-africa-hero.jpg": "",
  "guides/renting-a-car-in-south-africa-card.jpg": "",
  "guides/driving-in-south-africa-hero.jpg": "",
  "guides/driving-in-south-africa-card.jpg": "",
};

const contentType = (k) =>
  k.endsWith(".png") ? "image/png" : k.endsWith(".webp") ? "image/webp" : "image/jpeg";

let ok = 0;
let skipped = 0;
let failed = 0;

for (const [key, url] of Object.entries(MAP)) {
  if (!url) {
    skipped++;
    continue;
  }
  const tmp = join(tmpdir(), key.replace(/[\/]/g, "_"));
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`download HTTP ${res.status}`);
    writeFileSync(tmp, Buffer.from(await res.arrayBuffer()));
    execFileSync(
      "npx",
      ["wrangler", "r2", "object", "put", `${BUCKET}/${key}`, `--file=${tmp}`, `--content-type=${contentType(key)}`, "--remote"],
      { stdio: "inherit" }
    );
    unlinkSync(tmp);
    console.log(`✓ ${key}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${key}: ${e.message}`);
    failed++;
    try { unlinkSync(tmp); } catch {}
  }
}

console.log(`\nDone. uploaded ${ok}, skipped ${skipped}, failed ${failed}.`);
