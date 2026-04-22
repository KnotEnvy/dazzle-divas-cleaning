// app/privacy-policy/page.jsx
import Layout from '../components/Layout';
import PrivacyPolicy from '../components/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Dazzle Divas Cleaning LLC collects, uses, and protects your personal information when you contact us or use our Volusia County cleaning services.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Dazzle Divas Cleaning',
    description:
      'How Dazzle Divas Cleaning LLC collects, uses, and protects your personal information.',
    url: '/privacy-policy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Dazzle Divas Cleaning',
    description:
      'How Dazzle Divas Cleaning LLC collects, uses, and protects your personal information.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  );
}
