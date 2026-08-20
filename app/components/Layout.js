// app/components/Layout.js
'use client';

import '../globals.css';
import Footer from './Footer';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Layout({ children }) {
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Head metadata is provided by app/layout.js */}
      <main className="flex-grow">
        <div className="relative w-full">{children}</div>
      </main>
      <Footer />
      {/* Clears the fixed mobile CTA bar so it never covers the footer */}
      <div aria-hidden="true" className="h-[68px] md:hidden" />
    </div>
  );
}
