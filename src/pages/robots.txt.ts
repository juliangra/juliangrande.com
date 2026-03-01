import type { APIRoute } from 'astro';
import { SITE } from '@/data/site';

export const GET: APIRoute = () => {
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap-index.xml
`;
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
