// app/page.js

import Main from './components/Main';

// Rebuild once a day so year-relative copy ("last year") stays correct
// without a redeploy, and without a client/server hydration mismatch.
export const revalidate = 86400;

export default function Page() {
  const lastYear = new Date().getFullYear() - 1;
  return <Main lastYear={lastYear} />;
}
