"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";

const cover: CSSProperties = { objectFit: "cover" };

/**
 * next/image wrapper that fills its parent and, on load failure, renders
 * nothing — revealing the striped placeholder behind it instead of a broken
 * image. Remote (R2) images are served `unoptimized` so the browser loads them
 * straight from the bucket, bypassing the server-side optimizer (which can't
 * always reach R2, e.g. on WSL2 or Cloudflare Pages).
 */
export function SmartImage({
  src,
  alt,
  priority = false,
  sizes,
  unoptimized = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes ?? "100vw"}
      unoptimized={unoptimized}
      style={cover}
      onError={() => setFailed(true)}
    />
  );
}
