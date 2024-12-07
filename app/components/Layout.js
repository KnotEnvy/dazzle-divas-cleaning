// app/components/Layout.js
'use client';

import { useEffect, useState } from 'react';
import '../globals.css'
import Head from 'next/head'
import Header from './Header'
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
      <Head>
        <title>Dazzle Divas Cleaning</title>
        <meta name="description" content="Professional cleaning services in Volusia County" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/images/Divas_logo-pink.jpg" />
      </Head>
      {mounted && window.innerWidth > 1024 && <CustomCursor />}

      <Header className="absolute top-0 left-0 right-0 z-30"/>
      <main className="flex-grow"><div className="relative w-full">
          {children}
        </div></main>
      <Footer />
    </div>
  )
}