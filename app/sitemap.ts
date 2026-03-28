import type { MetadataRoute } from 'next'

const BASE_URL = 'https://kaiser-omnia.gr'

type Page = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  lastModified: string
}

const pages: Page[] = [
  { path: '',            priority: 1.0, changeFrequency: 'monthly', lastModified: '2026-03-28' },
  { path: '/services',   priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-03-28' },
  { path: '/projects',   priority: 0.9, changeFrequency: 'weekly',  lastModified: '2026-03-28' },
  { path: '/company',    priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-28' },
  { path: '/technology', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-03-28' },
  { path: '/contact',    priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-03-28' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const { path, priority, changeFrequency, lastModified } of pages) {
    const greekUrl = `${BASE_URL}${path || '/'}`
    const englishUrl = `${BASE_URL}/en${path || ''}`

    // Greek page (canonical, root URL)
    entries.push({
      url: greekUrl,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          el: greekUrl,
          en: englishUrl,
          'x-default': greekUrl,
        },
      },
    })

    // English page
    entries.push({
      url: englishUrl,
      lastModified,
      changeFrequency,
      priority: priority * 0.9,
      alternates: {
        languages: {
          el: greekUrl,
          en: englishUrl,
          'x-default': greekUrl,
        },
      },
    })
  }

  return entries
}
