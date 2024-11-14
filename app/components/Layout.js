// app/components/Layout.js

'use client';

import '../globals.css'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import CustomCursor from './CustomCursor'

import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Layout({ children }) {
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dazzle Divas Cleaning</title>
        <meta name="description" content="Professional cleaning services in Volusia County" />
        <link rel="icon" href="/images/Divas_logo-pink.jpg" />
      </Head>
      <CustomCursor />
      <Header className="absolute top-0 left-0 right-0 z-30"/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}