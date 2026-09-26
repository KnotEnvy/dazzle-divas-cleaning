import { Fragment } from 'react';
import Link from 'next/link';
import {
  Building2,
  ShoppingCart,
  Layers,
  Flag,
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
const PATH = '/cleaning/daytona-beach-shores';
const CITY = 'Daytona Beach Shores';
const LINK_CLASS =
  'font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2';

export const metadata = {
  title: 'Daytona Beach Shores Vacation Rental Cleaning',
  description:
    'Condo tower turnovers in Daytona Beach Shores, with front-desk keys, elevators, and loading zones planned ahead, from Frank Rendon Park to Sunglow Pier.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Daytona Beach Shores Vacation Rental Cleaning',
    description:
      "High-rise condo turnovers along South Atlantic Avenue, planned around each building's rules.",
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
    icon: Building2,
    label: 'Tower logistics planned',
    detail: 'Front desk, key log, and contractor sign-in handled per building.',
  },
  {
    icon: ShoppingCart,
    label: 'Elevator-ready carts',
    detail: 'Linens and supplies staged to cut trips up and down.',
  },
  {
    icon: Layers,
    label: 'Several units, one tower',
    detail: 'Same-day changeovers sequenced floor by floor.',
  },
  {
    icon: Flag,
    label: 'Event-week capacity',
    detail: 'Held for regular clients during race weeks and Bike Week.',
  },
];

const neighborhoods = [
  'S Atlantic Ave (A1A)',
  'Oceanfront towers',
  'Frank Rendon Park',
  'Sunglow Pier',
  'Dunlawton Ave',
  'S Peninsula Dr',
  'Halifax riverside',
  'Wilbur-by-the-Sea',
];

const mapPins = [
  { name: 'Daytona Beach line', x: 50, y: 22 },
  { name: 'Frank Rendon Park', x: 56, y: 34 },
  { name: 'S Peninsula Dr', x: 26, y: 42 },
  { name: 'Oceanfront towers', x: 58, y: 48 },
  { name: 'Dunlawton Ave', x: 34, y: 58 },
  { name: 'Sunglow Pier', x: 62, y: 66 },
  { name: 'Wilbur-by-the-Sea', x: 54, y: 88 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Guest-ready in 2–4 hours on most units, building rules followed, 30-point photo checklist included.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'A 24/7 line and a 2-hour dispatch goal in business hours for when the front desk says a unit is not ready.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      '10% off at 3–5 units and 15% off plus a dedicated manager at 6–15, whether they share a tower or spread along A1A.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Do you handle front-desk key pickup and contractor sign-in?',
    answer:
      'Yes. Front desk, lockbox, or security sign-in, we record the process in the property brief and follow it every visit. Need a certificate of insurance on file? We send it before the first turnover.',
  },
  {
    question: 'How do you deal with elevators and parking in the towers?',
    answer:
      'We plan for both. Crews move linens and supplies on carts sized for a standard elevator, use the service elevator where the building requires it, and park only where the association allows loading.',
  },
  {
    question: 'Can you turn over several units in the same building on one day?',
    answer:
      'Yes. When several units share a check-in time, we split the building between crew members and send each owner a separate photo report.',
  },
  {
    question: 'Do you reserve capacity for race weeks and Bike Week?',
    answer:
      'Yes, for clients on a regular schedule. Speedweeks, Bike Week, and Biketoberfest push Daytona demand into the Shores, so we hold crew time for standing clients. One-off event requests are taken as capacity allows.',
  },
  {
    question: 'Is Daytona Beach Shores part of your Daytona Beach service area?',
    answer:
      'Yes. The same crews cover both, but the Shores is a separate city with a condo-tower rhythm of its own, so it gets its own page. Rates match the rest of Volusia County.',
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}${PATH}#localbusiness`,
  name: 'Dazzle Divas Cleaning LLC — Daytona Beach Shores',
  parentOrganization: { '@id': `${SITE_URL}/#business` },
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Daytona Beach Shores',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Daytona Beach Shores',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.1761,
    longitude: -80.9828,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.1761,
      longitude: -80.9828,
    },
    geoRadius: '5000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function DaytonaBeachShoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in Daytona Beach Shores"
        subtitle="High-rise condo turnovers along South Atlantic Avenue, with front-desk keys, elevator timing, and parking worked out before turnover day."
        image="/images/master2_divas.jpg"
        imageAlt="Oceanfront condo bedroom with a balcony view of the Atlantic"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="Turnovers in a city of condo towers"
        body={[
          <Fragment key="building-first">
            {'We plan every Daytona Beach Shores turnover around the building, not just the unit. The Shores is its own small city on the peninsula between '}
            <Link href="/cleaning/daytona-beach" className={LINK_CLASS}>
              Daytona Beach
            </Link>
            {' and Wilbur-by-the-Sea, and most residents live in high-rise condominiums along South Atlantic Avenue. For a cleaning crew, the clock starts at the loading zone.'}
          </Fragment>,
          'Each tower runs its own rules. Some release keys at a front desk and sign contractors in, some reserve the service elevator for carts, and some limit where a van can wait. We confirm the rules with the association before the first visit, save them in the property brief, and stage supplies on carts to keep elevator trips down.',
          <Fragment key="event-weeks">
            {'Event weeks are the stress test. When Speedweeks, Bike Week, or Biketoberfest fill Daytona, overflow lands in Shores condos with back-to-back bookings and one check-in hour across a whole building, and regular clients get reserved capacity for those weeks. The Dunlawton Avenue causeway also puts '}
            <Link href="/cleaning/port-orange" className={LINK_CLASS}>
              Port Orange
            </Link>
            {' rentals on our Shores route, and '}
            <Link href="/cleaning/ponce-inlet" className={LINK_CLASS}>
              Ponce Inlet
            </Link>
            {' is just down the peninsula.'}
          </Fragment>,
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Daytona Beach Shores coverage"
        subtitle="Every Shores building is in range, from the Daytona Beach line past Frank Rendon Park and Sunglow Pier to Wilbur-by-the-Sea."
        cityLabel="Daytona Beach Shores"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Halifax River"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="Shores buildings and blocks we cover"
        subtitle="The whole city is in our service area; these are the stretches our crews work most."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Services for Shores condo owners" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="Questions from Shores condo owners"
        items={faqs}
      />
      <CTABand
        title="Own a condo in Daytona Beach Shores?"
        subtitle="Free quote within 24 hours. Tell us the building and we will plan around its rules."
      />
    </>
  );
}
