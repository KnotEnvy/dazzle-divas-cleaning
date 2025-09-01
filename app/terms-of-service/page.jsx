// app/terms-of-service/page.jsx


import Layout from '../components/Layout';
import TermsOfService from '../components/TermsOfService';

export const metadata = {
  title: 'Terms of Service - Dazzle Divas Cleaning',
  description: 'Terms governing services provided by Dazzle Divas Cleaning LLC.',
};

export default function TermsOfServiceRoute() {
  return (
    <Layout>
      <TermsOfService />
    </Layout>  

  );
}
