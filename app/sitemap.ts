import type { MetadataRoute } from 'next';
import { absolute } from '@/lib/seo';

/**
 * One route, because the site is one page. Fragment URLs (#work, #contact) are
 * deliberately absent: a sitemap lists documents, and every anchor here
 * resolves to the same document — listing them invites duplicate-content
 * handling rather than helping discovery.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absolute(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
