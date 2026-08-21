// app/components/Main.js
import Layout from './Layout';
import ModernDazzleDivasWebsite from './testSite.js';

export default function Main({ lastYear }) {
  return (
    <Layout>
      <ModernDazzleDivasWebsite lastYear={lastYear} />
    </Layout>
  );
}
