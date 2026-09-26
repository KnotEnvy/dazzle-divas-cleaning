import { Fragment } from 'react';
import Link from 'next/link';
import {
  Home,
  MapPinned,
  Sun,
  Umbrella,
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
const PATH = '/cleaning/ormond-by-the-sea';
const CITY = 'Ormond-by-the-Sea';
const LINK_CLASS =
  'font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2';

export const metadata = {
  title: 'Vacation Rental Cleaning in Ormond-by-the-Sea',
  description:
    'Turnover cleaning for Ormond-by-the-Sea beach houses and small condos along A1A to the Flagler County line, on the same crew grid as Ormond Beach.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning in Ormond-by-the-Sea, FL',
    description:
      'Beach house and small-condo turnovers on the North Peninsula, run by our Ormond Beach crews.',
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
    icon: Home,
    label: 'Built for small owners',
    detail: 'One or two rentals is plenty; no portfolio required.',
  },
  {
    icon: MapPinned,
    label: 'Same grid as Ormond Beach',
    detail: 'Ormond crews cover the peninsula up to the county line.',
  },
  {
    icon: Sun,
    label: 'Long-stay resets',
    detail: 'Monthly and winter guests get a deeper appliance and linen reset.',
  },
  {
    icon: Umbrella,
    label: 'Quiet-beach houses',
    detail: 'Sand and salt cleared from older beach homes, inside and out.',
  },
];

const neighborhoods = [
  'Ocean Shore Blvd',
  'John Anderson Dr',
  'High Bridge Rd',
  'North Shore Park',
  'Bicentennial Park',
  'Halifax riverfront',
  'North Peninsula',
  'Ormond Beach line',
  'Flagler County line',
];

const mapPins = [
  { name: 'Flagler County line', x: 52, y: 20 },
  { name: 'N. Peninsula State Park', x: 40, y: 30 },
  { name: 'High Bridge Rd', x: 22, y: 40 },
  { name: 'Bicentennial Park', x: 58, y: 48 },
  { name: 'North Shore Park', x: 60, y: 60 },
  { name: 'John Anderson Dr', x: 24, y: 64 },
  { name: 'Ocean Shore Blvd', x: 56, y: 76 },
  { name: 'Ormond Beach line', x: 42, y: 90 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Priced by bedroom count at the same tiers as Ormond Beach, guest-ready in 2–4 hours, with a 30-point photo report.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'A 24/7 line for storm cleanup, early arrivals, and cancelled cleaners, with no rush fee on standard tiers.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      'Volume pricing starts at 3 properties, with calendar sync and monthly reporting for owners with a few places on the peninsula.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Is Ormond-by-the-Sea part of your Ormond Beach service area?',
    answer:
      'Yes. It runs on the same dispatch grid as Ormond Beach, with the same crews, rates, and response times, from the Ormond Beach city limits north along A1A and John Anderson Drive to the Flagler County line.',
  },
  {
    question: 'Do you work with owners who have just one rental?',
    answer:
      'Yes. You do not need a portfolio or a management company to book us. Single-rental owners get the same checklist, the same bedroom-count pricing, and the same photo report after every turnover.',
  },
  {
    question: 'How do you handle monthly and snowbird stays?',
    answer:
      'We treat the end of a long stay as a reset, not a quick flip. On top of the standard turnover we go into appliance interiors, fan blades, and baseboards and change every set of sheets and towels, then photograph the result.',
  },
  {
    question: 'Can you clean an older beach house without damaging original finishes?',
    answer:
      'Yes. Older houses can have original tile, wood, or windows that need gentler products. We note surface-specific instructions in the property brief so every crew member treats them the same way on every visit.',
  },
  {
    question: 'Do you help after storms on the peninsula?',
    answer:
      'Yes. Post-storm cleanup is part of our emergency service: tracked-in sand and debris removed, damp linens laundered, and a photo report before guests return. Share standing instructions before hurricane season and we follow them.',
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}${PATH}#localbusiness`,
  name: 'Dazzle Divas Cleaning LLC — Ormond-by-the-Sea',
  parentOrganization: { '@id': `${SITE_URL}/#business` },
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ormond-by-the-Sea',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Ormond-by-the-Sea',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.3491,
    longitude: -81.0664,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.3491,
      longitude: -81.0664,
    },
    geoRadius: '10000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function OrmondByTheSeaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in Ormond-by-the-Sea"
        subtitle="Beach houses and small condos along Ocean Shore Boulevard, from the Ormond Beach line north to Flagler County, cleaned by the crews that already work Ormond Beach."
        image="/images/backtard_divas.jpg"
        imageAlt="Ground-floor patio with outdoor seating at a Volusia County beach rental"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="Cleaning the North Peninsula"
        body={[
          <Fragment key="same-grid">
            {'We serve Ormond-by-the-Sea as part of our '}
            <Link href="/cleaning/ormond-beach" className={LINK_CLASS}>
              Ormond Beach
            </Link>
            {' routes: same crews, same dispatch grid, same response times. The community is unincorporated Volusia County, running up the peninsula from the Ormond Beach city limits to the Flagler County line, with the Atlantic on one side and the Halifax River and John Anderson Drive on the other.'}
          </Fragment>,
          'The rental stock looks different from the towers farther south. The area grew as a retirement community from the 1950s on, so owners here tend to have older single-family beach houses and small low-rise condos, and many run one or two rentals themselves rather than through a management company. Guests often stay a week, a month, or a whole winter.',
          'The beach sets the pace. North of Granada the county beach is a traffic-free zone, with no cars on the sand, and guests come for quiet stretches near Al Weeks Sr. North Shore Park, Bicentennial Park, and North Peninsula State Park. Quiet stays still leave sand and salt behind, and a month-long visit wears a house harder than a weekend, so turnovers cover slider glass, patios, appliance interiors, and a full linen change.',
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Ormond-by-the-Sea service map"
        subtitle="Coverage runs the full length of the community, from the Ormond Beach line up A1A and John Anderson Drive to the Flagler County line."
        cityLabel="Ormond-by-the-Sea"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Halifax River"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="North Peninsula streets and parks we cover"
        subtitle="Every address in Ormond-by-the-Sea is covered. These are the roads and landmarks our crews work around most."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Ormond-by-the-Sea services" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="North Peninsula owner questions"
        items={faqs}
      />
      <CTABand
        title="Renting a place in Ormond-by-the-Sea?"
        subtitle="Free quote within 24 hours. Same Ormond Beach crews, a little farther up A1A."
      />
    </>
  );
}
