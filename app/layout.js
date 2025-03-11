// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dazzle Divas Cleaning | Professional Cleaning Services in Volusia County",
  description: "Expert vacation rental & residential cleaning services in Volusia County. Licensed, insured, and trusted by homeowners and property managers since 2004.",
  keywords: "cleaning service, vacation rental cleaning, house cleaning, Volusia County, Daytona Beach, air b&b cleaning, maid services, housekeeping services, Ormond Beach, Ormond-by-the-Sea, Daytona Shores, Ponce Inlet, New Smyrna Beach",
  metadataBase: new URL('https://www.dazzledivascleaning.com'),

  openGraph: {
    title: "Dazzle Divas Cleaning LLC",
    description: "Transform your space with Volusia County's premier cleaning service",
    images: ['/images/Divas_logo-pink.jpg'],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dazzle Divas Cleaning LLC",
    "image": "https://www.dazzledivascleaning.com/images/Divas_logo-pink.jpg",
    "telephone": "+13863015775",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Volusia County",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Su 08:00-18:00",
    "url": "https://www.dazzledivascleaning.com"
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
