import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/en'],
      disallow: [
        '/services', '/en/services',
        '/projects', '/en/projects',
        '/company', '/en/company',
        '/technology', '/en/technology',
        '/contact', '/en/contact',
        '/privacy-policy', '/en/privacy-policy',
        '/terms-of-use', '/en/terms-of-use',
        '/api/', '/_next/',
      ],
    },
    sitemap: 'https://kaiser-omnia.gr/sitemap.xml',
  }
}
