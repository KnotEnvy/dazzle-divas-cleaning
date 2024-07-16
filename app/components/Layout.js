// components/Layout.js

'use client';

import '../globals.css'

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Dazzle Divas Cleaning Service</title>
        <meta name="description" content="Professional cleaning services in Volusia County" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="absolute top-0 left-0 right-0 z-30"/>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}