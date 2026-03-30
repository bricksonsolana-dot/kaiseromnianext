import PrivacyPolicyClient from '@/app/privacy-policy/PrivacyPolicyClient';

const BASE_URL = 'https://kaiser-omnia.gr';

const meta = {
  el: {
    title: 'Πολιτική Απορρήτου',
    description:
      'Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων (GDPR) της Kaiser Omnia Construction.',
  },
  en: {
    title: 'Privacy Policy',
    description:
      'Privacy policy and personal data protection (GDPR) of Kaiser Omnia Construction.',
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = locale === 'en' ? meta.en : meta.el;
  const url = locale === 'en' ? `${BASE_URL}/en/privacy-policy` : `${BASE_URL}/privacy-policy`;

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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
