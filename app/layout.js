// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dazzle Divas Cleaning | Professional Cleaning Services in Volusia County",
  description: "Expert vacation rental & residential cleaning services in Volusia County. Licensed, insured, and trusted by homeowners and property managers since 2004.",
  keywords: "cleaning service, vacation rental cleaning, house cleaning, Volusia County, Daytona Beach",
  metadataBase: new URL('https://dazzledivascleaning.vercel.app'),

  openGraph: {
    title: "Dazzle Divas Cleaning LLC",
    description: "Transform your space with Volusia County's premier cleaning service",
    images: ['/images/Divas_logo-pink.jpg'],
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
