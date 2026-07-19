import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import { projectsQuery, projectsPageQuery, projectCategoriesQuery } from '@/sanity/lib/queries';
import ProjectsClient from '@/app/projects/ProjectsClient';
import StructuredData from '@/app/components/StructuredData';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Portfolio Κατασκευών',
    description:
      'Δείτε το portfolio κατασκευαστικών έργων της Kaiser Omnia. Κατοικίες και εμπορικά κτίρια υψηλών προδιαγραφών σε όλη την Αθήνα.',
    keywords: ['κατασκευαστικά έργα αθήνα', 'portfolio αρχιτεκτονική', 'κατασκευή κατοικιών'],
    ogTitle: 'Έργα μας | Portfolio Κατασκευών | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Portfolio Κατασκευών',
  },
  en: {
    title: 'Construction Portfolio',
    description:
      'View the construction portfolio of Kaiser Omnia. High-spec residential and commercial buildings across Athens.',
    keywords: ['construction projects athens', 'architecture portfolio', 'residential construction'],
    ogTitle: 'Our Projects | Construction Portfolio | Kaiser Omnia',
    ogAlt: 'Kaiser Omnia — Construction Portfolio',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const elUrl = `${BASE_URL}/projects`;
  const enUrl = `${BASE_URL}/en/projects`;
  const url = locale === 'en' ? enUrl : elUrl;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: url,
      languages: {
        'el-GR': elUrl,
        'en-US': enUrl,
        'x-default': elUrl,
      },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.description,
      url,
      siteName: 'Kaiser Omnia',
      locale: locale === 'en' ? 'en_US' : 'el_GR',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/images/home/erga/villaview1.png`,
          width: 1200,
          height: 630,
          alt: t.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.description,
      images: [`${BASE_URL}/images/home/erga/villaview1.png`],
    },
  };
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` },
  ],
};

export default async function ProjectsPage() {
  const [{ data: projects }, { data: pageData }, { data: categories }] = await Promise.all([
    sanityFetch({ query: projectsQuery }),
    sanityFetch({ query: projectsPageQuery }),
    sanityFetch({ query: projectCategoriesQuery }),
  ]);

  return (
    <>
      <StructuredData schema={breadcrumbSchema} />
      <ProjectsClient sanityProjects={projects ?? []} sanityPageData={pageData} sanityCategories={categories ?? []} />
    </>
  );
}
