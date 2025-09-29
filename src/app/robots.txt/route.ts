export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://www.authifylabs.com/sitemap.xml`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}


