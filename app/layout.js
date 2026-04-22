// app/layout.js

import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.dazzledivascleaning.com";
const BUSINESS_NAME = "Dazzle Divas Cleaning";
const BUSINESS_LEGAL_NAME = "Dazzle Divas Cleaning LLC";
const BUSINESS_PHONE = "+13863015775";
const BUSINESS_PHONE_DISPLAY = "(386) 301-5775";
const BUSINESS_EMAIL = "info@dazzledivascleaning.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ec4899" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dazzle Divas Cleaning | Vacation Rental & House Cleaning in Volusia County, FL",
    template: "%s | Dazzle Divas Cleaning",
  },
  description:
    "Top-rated vacation rental turnover & residential cleaning in Volusia County, FL. Serving Daytona Beach, Ormond Beach, New Smyrna Beach, Port Orange & Ponce Inlet. Licensed, insured, and trusted by homeowners and Airbnb hosts since 2018. Book today: (386) 301-5775.",
  applicationName: BUSINESS_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "cleaning service Volusia County",
    "vacation rental cleaning Daytona Beach",
    "Airbnb cleaning Volusia County",
    "house cleaning Ormond Beach",
    "maid service New Smyrna Beach",
    "deep cleaning Port Orange",
    "turnover cleaning Ponce Inlet",
    "residential cleaning Daytona Shores",
    "eco-friendly cleaning Florida",
    "property management cleaning",
    "short-term rental cleaning",
    "VRBO cleaning service",
    "licensed insured cleaners",
    "housekeeping Volusia County",
    "professional cleaners Florida",
  ],
  authors: [{ name: BUSINESS_LEGAL_NAME, url: SITE_URL }],
  creator: BUSINESS_LEGAL_NAME,
  publisher: BUSINESS_LEGAL_NAME,
  category: "Cleaning Services",
  classification: "Local Business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS_LEGAL_NAME,
    title:
      "Dazzle Divas Cleaning | Vacation Rental & House Cleaning in Volusia County",
    description:
      "Volusia County's premier vacation rental & residential cleaning service. Licensed, insured, and trusted since 2018. Book now: (386) 301-5775.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dazzle Divas Cleaning | Volusia County's Premier Cleaning Service",
    description:
      "Professional vacation rental & residential cleaning in Daytona Beach, Ormond Beach, New Smyrna Beach & all of Volusia County. Licensed & insured since 2018.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/Divas_logo-pink.jpg", type: "image/jpeg" },
    ],
    shortcut: "/images/Divas_logo-pink.jpg",
    apple: "/images/Divas_logo-pink.jpg",
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Volusia County",
    "og:phone_number": BUSINESS_PHONE_DISPLAY,
    "og:email": BUSINESS_EMAIL,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_LEGAL_NAME,
  alternateName: BUSINESS_NAME,
  legalName: BUSINESS_LEGAL_NAME,
  description:
    "Professional vacation rental turnover, Airbnb, and residential cleaning services throughout Volusia County, Florida. Licensed, insured, and trusted by homeowners and short-term rental hosts since 2018.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  foundingDate: "2018",
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Check, Credit Card, Venmo, Zelle",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Daytona Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Volusia County",
    },
    { "@type": "City", name: "Daytona Beach" },
    { "@type": "City", name: "Daytona Beach Shores" },
    { "@type": "City", name: "Ormond Beach" },
    { "@type": "City", name: "Ormond-by-the-Sea" },
    { "@type": "City", name: "New Smyrna Beach" },
    { "@type": "City", name: "Port Orange" },
    { "@type": "City", name: "Ponce Inlet" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://facebook.com/dazzledivascleaning",
    "https://instagram.com/dazzledivascleaning",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      contactType: "customer service",
      areaServed: "US-FL",
      availableLanguage: ["English"],
    },
  ],
  knowsAbout: [
    "Vacation Rental Cleaning",
    "Airbnb Turnover Service",
    "VRBO Cleaning",
    "Residential House Cleaning",
    "Deep Cleaning",
    "Move-In / Move-Out Cleaning",
    "Eco-Friendly Cleaning",
    "Property Management Cleaning",
  ],
  slogan: "Volusia County's premier cleaning service",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vacation Rental Turnover Cleaning",
          description:
            "Fast, reliable turnover cleaning for Airbnb, VRBO, and short-term rental hosts. 2-4 hour average turnover.",
          serviceType: "Vacation Rental Cleaning",
          areaServed: "Volusia County, FL",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential House Cleaning",
          description:
            "Recurring and one-time residential cleaning for homeowners throughout Volusia County.",
          serviceType: "House Cleaning",
          areaServed: "Volusia County, FL",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Cleaning Service",
          description:
            "Top-to-bottom deep clean for homes and rental properties, including baseboards, appliances, and detailed sanitization.",
          serviceType: "Deep Cleaning",
          areaServed: "Volusia County, FL",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Property Management Cleaning",
          description:
            "Ongoing cleaning support for property managers handling multiple short-term and long-term rentals.",
          serviceType: "Property Management Cleaning",
          areaServed: "Volusia County, FL",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Eco-Friendly Cleaning",
          description:
            "Green cleaning using eco-friendly, non-toxic products safe for guests, families, and pets.",
          serviceType: "Eco-Friendly Cleaning",
          areaServed: "Volusia County, FL",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_LEGAL_NAME,
  publisher: { "@id": `${SITE_URL}/#business` },
  inLanguage: "en-US",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  },
  sameAs: [
    "https://facebook.com/dazzledivascleaning",
    "https://instagram.com/dazzledivascleaning",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          id="ld-json-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
