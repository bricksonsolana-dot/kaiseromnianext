import TermsOfUseClient from '@/app/terms-of-use/TermsOfUseClient';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Όροι Χρήσης',
    description:
      'Όροι χρήσης του ιστότοπου kaiser-omnia.gr — Kaiser Omnia Construction.',
  },
  en: {
    title: 'Terms of Use',
    description:
      'Terms of use of the website kaiser-omnia.gr — Kaiser Omnia Construction.',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const url = locale === 'en' ? `${BASE_URL}/en/terms-of-use` : `${BASE_URL}/terms-of-use`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function TermsOfUsePage() {
  return <TermsOfUseClient />;
}
