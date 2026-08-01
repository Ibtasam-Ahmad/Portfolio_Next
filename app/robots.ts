import type { MetadataRoute } from 'next';
import { SITE_URL, absolute } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        /* Next's build output and image optimiser endpoint carry no indexable
           content and only waste crawl budget. */
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: absolute('sitemap.xml'),
    host: SITE_URL,
  };
}
