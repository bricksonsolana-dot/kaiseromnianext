import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/privacy-policy', '/terms-of-use', '/legal'],
    },
    sitemap: 'https://kaiser-omnia.gr/sitemap.xml',
  }
}
