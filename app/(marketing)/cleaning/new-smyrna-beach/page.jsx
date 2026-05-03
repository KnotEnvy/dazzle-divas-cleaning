import {
  Heart,
  Sailboat,
  Waves,
  Repeat,
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
const PATH = '/cleaning/new-smyrna-beach';
const CITY = 'New Smyrna Beach';

export const metadata = {
  title: 'Vacation Rental Cleaning in New Smyrna Beach, FL | Dazzle Divas',
  description:
    'Vacation rental cleaning across New Smyrna Beach — Flagler Avenue condos, canal-front houses, Coronado Island, Bethune Beach. Boutique-rental focus, surf-tourism aware, photo-verified turnovers since 2018.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning in New Smyrna Beach, FL',
    description:
      'Boutique vacation rental turnovers across New Smyrna Beach, Coronado Island, and Bethune Beach.',
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
    icon: Heart,
    label: 'Boutique-rental focus',
    detail: 'Smaller properties, repeat-guest patterns, owner-managed standards.',
  },
  {
    icon: Sailboat,
    label: 'Canal & waterway experienced',
    detail: 'Boat docks, screened patios, pool decks part of standard scope.',
  },
  {
    icon: Waves,
    label: 'Surf-tourism aware',
    detail: 'Sand-and-salt protocols on every turnover, year-round.',
  },
  {
    icon: Repeat,
    label: 'Year-round demand handled',
    detail: 'Summer family rush layered on weekend surf bookings.',
  },
];

const neighborhoods = [
  'Flagler Avenue',
  'North Beach',
  'Bethune Beach',
  'Canal District',
  'Coronado Island',
  'Mary Avenue',
  'Smyrna Dunes',
  'Indian River Drive',
];

const mapPins = [
  { name: 'Flagler Ave', x: 62, y: 40 },
  { name: 'North Beach', x: 60, y: 18 },
  { name: 'Bethune Beach', x: 64, y: 80 },
  { name: 'Canal District', x: 35, y: 50 },
  { name: 'Coronado Island', x: 45, y: 30 },
  { name: 'Mary Ave', x: 30, y: 65 },
  { name: 'Smyrna Dunes', x: 55, y: 8 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Guest-ready in 2–4 hours. Photo-verified. Boutique-rental scope including outdoor spaces and waterway-facing details.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'Surprise bookings, no-show cleaners, hurricane recovery. 24/7 dispatch across New Smyrna Beach and Bethune Beach.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      'Built for NSB owners and small portfolios. Volume pricing, dedicated manager, calendar sync, monthly reporting.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Do you serve canal-front and Indian River properties?',
    answer:
      'Yes — many of our New Smyrna clients are canal-front houses and waterway condos along the Indian River. We handle outdoor spaces (boat dock areas, screened patios, pool decks) as part of the standard turnover scope, not as add-ons.',
  },
  {
    question: 'Can you handle small boutique vacation rentals?',
    answer:
      "Yes. New Smyrna's vacation rental mix skews smaller and more boutique than Daytona — many of our NSB properties are 1–2 bedroom units with longer-stay guests and higher repeat-booking rates. Pricing aligns with our standard tier ranges, and the same hospitality scope applies.",
  },
  {
    question: 'Do you serve Bethune Beach and the south end?',
    answer:
      'Yes. Bethune Beach (south of New Smyrna, just north of the Canaveral National Seashore boundary) is part of our New Smyrna Beach service area. Drive time from our Volusia base is comparable to central NSB, with no premium pricing.',
  },
  {
    question: 'How do you handle surf-tourism turnovers (sand, salt, surfboards)?',
    answer:
      'Sand and salt residue is the norm in NSB rentals. Our standard turnover includes patio and sliding-door rinse, deck sweep, and an exterior entry mat refresh — important for surf-heavy guest patterns. Many of our NSB clients are repeat surf-tourism rentals, so this protocol is built in.',
  },
  {
    question: 'Do you cover Coronado Island and the historic district?',
    answer:
      'Yes. Coronado Island, the historic Riverside Drive corridor, and the Canal District are all within our New Smyrna Beach service grid. Older homes with character details get the same hospitality scope as newer condos — we adapt protocols to property type.',
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dazzle Divas Cleaning LLC — New Smyrna Beach',
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Smyrna Beach',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'New Smyrna Beach',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.0258,
    longitude: -80.927,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.0258,
      longitude: -80.927,
    },
    geoRadius: '10000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function NewSmyrnaBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in New Smyrna Beach"
        subtitle="From Flagler Avenue beachside condos to canal-front houses along the Indian River. Boutique-rental focus, surf-tourism aware, photo-verified turnovers."
        image="/images/livingroom2_divas.jpg"
        imageAlt="Bright living space in a New Smyrna Beach vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="Cleaning New Smyrna Beach's vacation rentals"
        body={[
          "New Smyrna Beach is the boutique end of the Volusia vacation rental coast — smaller properties, a higher share of repeat guests, and a slower rhythm than Daytona. We turnover everything from Flagler Avenue beachside condos to canal-front houses along the Indian River, with a steady mix of historic Coronado Island homes and modern Smyrna Dunes units.",
          'Peak season layers summer family vacations onto a year-round base of surfing tourism and weekend getaway bookings. Most NSB rentals see longer stays than Daytona but more frequent turnovers than Ormond — a middle rhythm that rewards consistent quality over peak-volume capacity.',
          "We've built our NSB protocol around what makes these rentals different: sand and salt come standard, outdoor spaces matter as much as interiors, and many guests are repeat visitors who notice the small details. Our standard turnover scope reflects that — patio rinse, dock-area sweep, screened-porch detail — without surcharging for any of it.",
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Where we clean in New Smyrna Beach"
        subtitle="Coverage from North Beach south through Bethune Beach, plus the Canal District and Coronado Island."
        cityLabel="New Smyrna Beach"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Indian River"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="Across New Smyrna Beach"
        subtitle="If your neighborhood isn't listed, ask — these are our most-served areas, not our coverage limit."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Services in New Smyrna Beach" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What NSB hosts ask before booking"
        items={faqs}
      />
      <CTABand
        title="Cleaning your New Smyrna Beach rental?"
        subtitle="Free quote, no commitment. Boutique scope, hospitality standard."
      />
    </>
  );
}
