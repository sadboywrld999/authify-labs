import { caseStudies } from "@/data/caseStudies";

export function GET() {
  const base = "https://www.authifylabs.com";
  const currentDate = new Date().toISOString();

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/solutions", priority: "0.9", changefreq: "monthly" },
    { path: "/case-studies", priority: "0.8", changefreq: "weekly" },
    { path: "/contact", priority: "0.7", changefreq: "monthly" }
  ];

  // Generate URLs for static pages
  const staticUrls = staticPages.map(page =>
    `<url>
      <loc>${base}${page.path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
  );

  // Generate URLs for case study detail pages
  const caseStudyUrls = caseStudies.map(study =>
    `<url>
      <loc>${base}/case-studies/${study.slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`
  );

  const allUrls = [...staticUrls, ...caseStudyUrls];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${allUrls.join("\n  ")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}


