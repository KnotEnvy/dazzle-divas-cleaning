// app/components/Layout.js
'use client';

import { useEffect, useState } from 'react';
import '../globals.css'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  useSmoothScroll();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Head metadata is provided by app/layout.js */}
      {mounted && window.innerWidth > 1024 && <CustomCursor />}

      {/* <Header className="absolute top-0 left-0 right-0 z-30"/> */}
      <main className="flex-grow"><div className="relative w-full">
          {children}
        </div></main>
      <Footer />
    </div>
  )
}
