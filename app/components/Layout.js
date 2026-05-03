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
      {/* <Header className="absolute top-0 left-0 right-0 z-30"/> */}
      <main className="flex-grow">
        <div className="relative w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
