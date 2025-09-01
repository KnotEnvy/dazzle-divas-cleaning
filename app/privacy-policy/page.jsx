// app/privacy-policy/page.jsx
import Layout from '../components/Layout';
import PrivacyPolicy from '../components/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy - Dazzle Divas Cleaning',
  description: 'How Dazzle Divas Cleaning LLC collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  );
}
