import {
  Sun,
  Home,
  Calendar,
  Anchor,
  Camera,
  Zap,
  Building,
} from 'lucide-react';
import ServiceHero from '../../../components/service/ServiceHero';
import LocalContext from '../../../components/city/LocalContext';
import ServiceAreaMap from '../../../components/city/ServiceAreaMap';
import NeighborhoodGrid from '../../../components/city/NeighborhoodGrid';
import CrossSell from '../../../components/service/CrossSell';
import ServiceFAQ from '../../../components/service/ServiceFAQ';
import CTABand from '../../../components/service/CTABand';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
const PATH = '/cleaning/ormond-beach';
const CITY = 'Ormond Beach';

export const metadata = {
  title: 'Vacation Rental Cleaning in Ormond Beach, FL | Dazzle Divas',
  description:
    'Vacation rental cleaning in Ormond Beach — from oceanfront condos along Ocean Shore Boulevard to mainland homes in Halifax Plantation and The Trails. Snowbird-season specialty, same-day available, since 2018.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning in Ormond Beach, FL',
    description:
      'Hospitality-grade vacation rental turnovers across Ormond Beach and Ormond-by-the-Sea.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas' },
  { name: CITY },
];

const highlights = [
  {
    icon: Sun,
    label: 'Snowbird-season specialty',
    detail: 'Long-stay turnovers with deep-clean protocol Oct–Apr.',
  },
  {
    icon: Home,
    label: 'HOA-aware crews',
    detail: 'Ocean Shore, Hammock Beach, Plantation Bay protocols documented.',
  },
  {
    icon: Anchor,
    label: 'Both sides of the Granada',
    detail: 'Beachside and mainland properties on the same dispatch grid.',
  },
  {
    icon: Calendar,
    label: 'Same-day available',
    detail: 'Including weekends and holidays. No rush fees on standard tiers.',
  },
];

const neighborhoods = [
  'Ocean Shore Blvd',
  'Granada Blvd',
  'Halifax Plantation',
  'The Trails',
  'Tomoka Estates',
  'Plantation Pines',
  'Riverside Drive',
  'Ormond-by-the-Sea',
];

const mapPins = [
  { name: 'Ocean Shore', x: 65, y: 30 },
  { name: 'Granada', x: 45, y: 50 },
  { name: 'Halifax Plantation', x: 20, y: 25 },
  { name: 'The Trails', x: 25, y: 65 },
  { name: 'Tomoka Estates', x: 35, y: 80 },
  { name: 'Riverside', x: 18, y: 50 },
  { name: 'Ormond-by-the-Sea', x: 55, y: 12 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Guest-ready in 2–4 hours. Photo-verified. Same hospitality standards across every Ormond Beach property.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'Surprise bookings, no-show cleaners, hurricane recovery. 24/7 dispatch across Ormond Beach and Ormond-by-the-Sea.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      'Built for Ormond hosts running 3+ rentals. Volume pricing, dedicated manager, calendar sync, monthly reporting.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Do you serve oceanfront condos with HOA cleaning requirements?',
    answer:
      'Yes — we work with Ocean Shore Boulevard, Hammock Beach, and Plantation Bay HOAs. We follow association-specific protocols (parking rules, key drop procedures, after-hours noise restrictions) and document compliance per turnover.',
  },
  {
    question: 'How do you handle snowbird-season turnovers in Ormond Beach?',
    answer:
      'Long-stay (30+ day) snowbird turnovers get extra deep-clean attention: oven, fridge interior, baseboards, ceiling fans, and full linen rotation. We schedule snowbird departures in our peak-week capacity reservation so you never lose a turn between guests.',
  },
  {
    question: 'Can you handle properties on the barrier island and the mainland?',
    answer:
      'Yes — both. Our crews route between Ocean Shore Boulevard, A1A, and the Granada Bridge corridor daily. Mainland Ormond properties (Tomoka Estates, Halifax Plantation, The Trails) are on the same dispatch grid as beachside units, so response times are similar.',
  },
  {
    question: 'Do you cover Ormond-by-the-Sea?',
    answer:
      'Yes. Ormond-by-the-Sea (north of the Granada Bridge along A1A) is part of our standard Ormond Beach service area — same rates, same response times, same crews.',
  },
  {
    question: 'Do you handle race-week and Bike-Week traffic in north Ormond?',
    answer:
      "Yes. Race weeks and Bike Week increase dispatch traffic across A1A — we plan crew routes accordingly and reserve capacity in advance for clients who book through the year. We've handled multiple Speedweeks and Biketoberfest seasons in the Ormond beachside corridor.",
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dazzle Divas Cleaning LLC — Ormond Beach',
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ormond Beach',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Ormond Beach',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.2858,
    longitude: -81.0559,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.2858,
      longitude: -81.0559,
    },
    geoRadius: '10000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function OrmondBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in Ormond Beach"
        subtitle="From oceanfront condos along Ocean Shore Boulevard to mainland homes in Halifax Plantation. Hospitality-grade turnovers, photo-verified, same-day available."
        image="/images/stairsOcean_divas.jpg"
        imageAlt="Ocean view from a Volusia County coastal vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="Cleaning Ormond Beach's vacation rentals"
        body={[
          "Ormond Beach sits at the north end of Volusia's vacation rental coast — quieter than Daytona to the south, with a higher concentration of long-stay guests, snowbird rentals, and oceanfront condos. We turnover everything from compact 1BR units along Ocean Shore Boulevard to multi-bedroom homes in Halifax Plantation and The Trails.",
          'Peak season runs October through April for snowbird inflows and overlaps with race weeks and Bike Week traffic on A1A. Summer brings family vacations and surf-tourism guests across the Granada corridor and Ormond-by-the-Sea. Our dispatch routes Ormond as a single service area: barrier island and mainland properties get the same response times.',
          "Most of our Ormond clients are owner-managed rentals or small portfolios — and we've built protocols around that: HOA-aware crews, documented property briefs, photo verification per turnover, and snowbird-season deep cleans baked into our standard scope.",
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Where we clean in Ormond Beach"
        subtitle="Coverage across Ormond Beach and Ormond-by-the-Sea, both sides of the Granada Bridge."
        cityLabel="Ormond Beach"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Halifax River"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="Across Ormond Beach"
        subtitle="If you don't see your neighborhood listed, ask — these are our most-served areas, not our coverage limit."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Services in Ormond Beach" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What Ormond hosts ask before booking"
        items={faqs}
      />
      <CTABand
        title="Cleaning your Ormond Beach rental?"
        subtitle="Free quote, no commitment. Most Ormond quotes returned within 2 hours during business hours."
      />
    </>
  );
}
