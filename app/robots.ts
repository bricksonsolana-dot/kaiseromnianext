import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],  // only block these — never public pages
    },
    sitemap: 'https://www.kaiser-omnia.gr/sitemap.xml',
  }
}