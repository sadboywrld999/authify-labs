export function GET() {
  const base = "https://www.authifylabs.com";
  const urls = ["/", "/services", "/solutions", "/case-studies", "/contact"].map(
    (p) => `<url><loc>${base}${p}</loc></url>`
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}


