import PrivacyPolicyClient from '@/app/privacy-policy/PrivacyPolicyClient';

export const metadata = {
  title: 'Πολιτική Απορρήτου | Kaiser Omnia',
  description:
    'Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων (GDPR) της Kaiser Omnia Construction.',
  alternates: {
    canonical: 'https://kaiser-omnia.gr/privacy-policy',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
