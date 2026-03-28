import TermsOfUseClient from '@/app/terms-of-use/TermsOfUseClient';

export const metadata = {
  title: 'Όροι Χρήσης | Kaiser Omnia',
  description:
    'Όροι χρήσης του ιστότοπου kaiser-omnia.gr — Kaiser Omnia Construction.',
  alternates: {
    canonical: 'https://kaiser-omnia.gr/terms-of-use',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfUsePage() {
  return <TermsOfUseClient />;
}
