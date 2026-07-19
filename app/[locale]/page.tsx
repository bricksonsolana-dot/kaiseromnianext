import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { homePageQuery, featuredProjectsQuery } from '@/sanity/lib/queries';
import HomeClient from '@/app/HomeClient';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Kaiser Omnia | Κατασκευαστική Εταιρεία Αθήνα',
    description:
      'Kaiser Omnia – Κατασκευαστική εταιρεία με 40+ χρόνια εμπειρίας στην Αθήνα. Αρχιτεκτονική, μελέτη και κατασκευή υψηλών προδιαγραφών.',
    ogAlt: 'Kaiser Omnia — Κατασκευαστική Εταιρεία',
  },
  en: {
    title: 'Kaiser Omnia | Construction Company Athens',
    description:
      'Kaiser Omnia – Construction company with 40+ years of experience in Athens. Architecture, engineering and high-spec construction.',
    ogAlt: 'Kaiser Omnia — Construction Company',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const url = locale === 'en' ? `${BASE_URL}/en` : BASE_URL;

  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        'el-GR': BASE_URL,
        'en-US': `${BASE_URL}/en`,
        'x-default': BASE_URL,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url,
      siteName: 'Kaiser Omnia',
      locale: locale === 'en' ? 'en_US' : 'el_GR',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: [`${BASE_URL}/images/home/homehero.png`],
    },
  };
}

export default async function HomePage() {
  const [{ data: sanityData }, { data: featuredProjects }] = await Promise.all([
    sanityFetch({ query: homePageQuery }),
    sanityFetch({ query: featuredProjectsQuery }),
  ]);

  return <HomeClient sanityData={sanityData} featuredProjects={featuredProjects ?? []} />;
}
