'use client';

import SiteHeader from './SiteHeader';
import Footer from '../Footer';
import MotionConfig from '../motion/MotionConfig';
import StickyQuotePill from '../motion/StickyQuotePill';

export default function PageShell({ children }) {
  return (
    <MotionConfig>
      <div className="flex flex-col min-h-screen bg-white">
        <SiteHeader />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <StickyQuotePill />
      </div>
    </MotionConfig>
  );
}
