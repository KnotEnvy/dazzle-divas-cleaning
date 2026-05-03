import {
  Flag,
  Clock,
  Building2,
  Waves,
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
const PATH = '/cleaning/daytona-beach';
const CITY = 'Daytona Beach';

export const metadata = {
  title: 'Vacation Rental Cleaning in Daytona Beach, FL | Dazzle Divas',
  description:
    'Vacation rental cleaning across Daytona Beach — beachside condos along North Atlantic Avenue, Daytona Beach Shores, the South Peninsula. Race-week capacity reserved, photo-verified turnovers, since 2018.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning in Daytona Beach, FL',
    description:
      'High-volume vacation rental turnovers across Daytona Beach with race-week capacity reserved.',
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
    icon: Flag,
    label: 'Race-week capacity reserved',
    detail: 'Speedweeks, Bike Week, Biketoberfest, Daytona 500.',
  },
  {
    icon: Clock,
    label: '4-hour tight turnovers',
    detail: '11am check-out / 4pm check-in — standard scope, photo-verified.',
  },
  {
    icon: Building2,
    label: 'High-rise condo experienced',
    detail: 'Parking, key drops, garage codes — coordinated, not improvised.',
  },
  {
    icon: Waves,
    label: 'Sand-and-salt aware',
    detail: 'Patio rinse, sliding-door cleaning, entry mat refresh standard.',
  },
];

const neighborhoods = [
  'North Atlantic Ave',
  'Daytona Beach Shores',
  'South Peninsula',
  'Beachside',
  'Wilbur-by-the-Sea',
  'Pelican Bay',
  'Indigo Lakes',
  'Halifax Plantation',
];

const mapPins = [
  { name: 'N. Atlantic Ave', x: 65, y: 25 },
  { name: 'Beachside', x: 60, y: 45 },
  { name: 'Beach Shores', x: 65, y: 65 },
  { name: 'South Peninsula', x: 60, y: 82 },
  { name: 'Wilbur-by-the-Sea', x: 60, y: 90 },
  { name: 'Pelican Bay', x: 25, y: 55 },
  { name: 'Indigo Lakes', x: 30, y: 75 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Guest-ready in 2–4 hours. Photo-verified. Built for tight Daytona check-in/out windows and high-volume booking calendars.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'Race-week emergencies, no-show cleaners, post-storm cleanup. 24/7 dispatch across Daytona Beach and the Shores.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      'Built for Daytona hosts running 6+ rentals. Reserved peak-week capacity, dedicated manager, monthly portfolio reporting.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Do you handle race-week and Bike-Week turnover spikes?',
    answer:
      'Yes — race weeks are our peak season. We reserve crew capacity in advance for Speedweeks, Bike Week, Biketoberfest, and Daytona 500 weeks. Hosts who book us through the year get priority capacity in those weeks; walk-in race-week emergencies are handled when capacity allows.',
  },
  {
    question: 'Can you turn over oceanfront condos with strict check-in/out windows?',
    answer:
      'Yes. We specialize in tight 4-hour turnover windows common in Daytona oceanfront condos (typical 11am checkout / 4pm check-in). Many of our long-term clients are condos along North Atlantic Avenue and Daytona Beach Shores where back-to-back bookings are the norm.',
  },
  {
    question: 'Do you serve Daytona Beach Shores?',
    answer:
      'Yes. Daytona Beach Shores is one of our most-served areas — high-density vacation rental zone with condos, single-family homes, and townhomes. We turnover from Sunglow Pier south through the Shores corridor.',
  },
  {
    question: 'How do you handle parking at multi-unit beachside properties?',
    answer:
      'Many beachside Daytona properties have shared garages, valet, or limited guest parking. Our crew vehicles are tagged for short-term loading, and we coordinate with property managers on key drops, garage codes, and parking pass logistics. No surprises on turnover day.',
  },
  {
    question: 'Do you cover Wilbur-by-the-Sea and the South Peninsula?',
    answer:
      'Yes. Wilbur-by-the-Sea, the South Peninsula, and Ponce Inlet are part of our Daytona Beach service grid — same crews, same response times. Drive time south from Beach Shores adds a few minutes but no premium pricing.',
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dazzle Divas Cleaning LLC — Daytona Beach',
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Daytona Beach',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Daytona Beach',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.2108,
    longitude: -81.0228,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.2108,
      longitude: -81.0228,
    },
    geoRadius: '12000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function DaytonaBeachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in Daytona Beach"
        subtitle="From beachside condos along North Atlantic Avenue to oceanfront homes on the South Peninsula. Race-week capacity reserved, hospitality-grade turnovers, photo-verified."
        image="/images/livingroom_divas.jpg"
        imageAlt="Living area in a Daytona Beach vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="Cleaning Daytona Beach's vacation rentals"
        body={[
          "Daytona Beach has the highest turnover volume on Volusia's vacation rental coast — a different rhythm than Ormond or New Smyrna. Short-stay guests, race-event spikes, and a much wider mix of property types: high-rise condos along North Atlantic Avenue, single-family rentals on the South Peninsula, oceanfront homes in Daytona Beach Shores, and family vacation properties inland.",
          'Race weeks (Speedweeks, Bike Week, Biketoberfest) compress 30 days of bookings into 4-day windows. We reserve crew capacity in advance for those weeks for clients on annual schedules, and we plan dispatch routes around known event traffic on International Speedway Boulevard and A1A.',
          "Daytona properties run on tight check-in/out windows — typical 11am checkout / 4pm check-in with back-to-back guests. Our standard scope is built around that constraint: photo-verified turnover, restock, and a 30-point checklist sent to your phone before we leave. We don't ask for extra time when the booking calendar is full.",
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Where we clean in Daytona Beach"
        subtitle="Coverage from North Atlantic Avenue south through Daytona Beach Shores and the Peninsula."
        cityLabel="Daytona Beach"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Halifax River"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="Across Daytona Beach"
        subtitle="If your neighborhood isn't listed, ask — these are our most-served areas, not our coverage limit."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Services in Daytona Beach" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What Daytona hosts ask before booking"
        items={faqs}
      />
      <CTABand
        title="Cleaning your Daytona Beach rental?"
        subtitle="Free quote, no commitment. Race-week capacity confirmed at booking."
      />
    </>
  );
}
