import type { MetadataRoute } from 'next'

const BASE_URL = 'https://kaiser-omnia.gr'

type Page = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

const pages: Page[] = [
  { path: '',           priority: 1.0, changeFrequency: 'monthly' },
  { path: '/services',  priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects',  priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/company',   priority: 0.8, changeFrequency: 'monthly' },
  { path: '/technology',priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact',   priority: 0.7, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        el: `${BASE_URL}/el${path || '/'}`,
        en: `${BASE_URL}/en${path || '/'}`,
        'x-default': `${BASE_URL}${path || '/'}`,
      },
    },
  }))
}
