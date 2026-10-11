import type { MetadataRoute } from "next";

// Required for `output: "export"` (static export).
export const dynamic = "force-static";

// Set NEXT_PUBLIC_SITE_URL in your hosting settings, or edit the fallback below.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adesojifagadesolicitors.com"
).replace(/\/$/, "");

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/client-information", priority: 0.5 },
  { path: "/complaints-procedure", priority: 0.5 },
  { path: "/privacy-notice", priority: 0.5 },
  // Add { path: "/cookie-information", priority: 0.3 } once that page exists.
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    // Trailing slash matches `trailingSlash: true` in next.config.
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`,
    lastModified,
    priority,
  }));
}