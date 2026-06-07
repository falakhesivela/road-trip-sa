import type { NextConfig } from "next";

// Allow next/image to optimise images served from the Cloudflare R2 bucket.
// The host is derived from NEXT_PUBLIC_IMAGE_BASE_URL (e.g. the bucket's public
// r2.dev URL or a custom domain like https://images.roadtripsa.co.za).
const imageBase = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
const remotePatterns: NonNullable<NonNullable<NextConfig["images"]>["remotePatterns"]> = [];
if (imageBase) {
  try {
    const u = new URL(imageBase);
    remotePatterns.push({
      protocol: u.protocol.replace(":", "") as "http" | "https",
      hostname: u.hostname,
      pathname: "/**",
    });
  } catch {
    console.warn("NEXT_PUBLIC_IMAGE_BASE_URL is not a valid URL:", imageBase);
  }
}

const nextConfig: NextConfig = {
  images: { remotePatterns },
};

export default nextConfig;
