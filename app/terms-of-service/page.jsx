// app/terms-of-service/page.jsx

import Layout from '../components/Layout';
import TermsOfService from '../components/TermsOfService';

export const metadata = {
  title: 'Terms of Service',
  description:
    'Terms and conditions governing cleaning services provided by Dazzle Divas Cleaning LLC throughout Volusia County, Florida.',
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Dazzle Divas Cleaning',
    description:
      'Terms governing cleaning services provided by Dazzle Divas Cleaning LLC.',
    url: '/terms-of-service',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Dazzle Divas Cleaning',
    description:
      'Terms governing cleaning services provided by Dazzle Divas Cleaning LLC.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServiceRoute() {
  return (
    <Layout>
      <TermsOfService />
    </Layout>
  );
}
