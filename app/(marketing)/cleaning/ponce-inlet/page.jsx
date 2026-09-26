import { Fragment } from 'react';
import Link from 'next/link';
import {
  Gem,
  Fish,
  Route,
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
const PATH = '/cleaning/ponce-inlet';
const CITY = 'Ponce Inlet';
const LINK_CLASS =
  'font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2';

export const metadata = {
  title: 'Vacation Rental Cleaning in Ponce Inlet, FL',
  description:
    'Turnover cleaning for Ponce Inlet oceanfront condos and riverfront homes, from the North Turn to Lighthouse Point. Photo-verified, quotes in 24 hours.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning in Ponce Inlet, FL',
    description:
      "Detail-first turnovers for Ponce Inlet's oceanfront and riverfront vacation rentals.",
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
    icon: Gem,
    label: 'Detail-first turnovers',
    detail: 'Fewer, higher-end units get unhurried, photo-documented cleans.',
  },
  {
    icon: Fish,
    label: 'Angler & boater aware',
    detail: 'Balconies, patios, and gear areas checked on every visit.',
  },
  {
    icon: Route,
    label: 'Two crews within reach',
    detail: 'Daytona Beach Shores route, with New Smyrna Beach backup.',
  },
  {
    icon: Waves,
    label: 'Salt film cleared',
    detail: 'Oceanfront glass and slider tracks detailed each turn.',
  },
];

const neighborhoods = [
  'S Atlantic Ave',
  'S Peninsula Dr',
  'North Turn beachfront',
  'Lighthouse Point',
  'Lighthouse Dr',
  'Inlet Harbor Rd',
  'Halifax riverfront',
  'Wilbur-by-the-Sea',
];

const mapPins = [
  { name: 'Wilbur-by-the-Sea', x: 56, y: 18 },
  { name: 'S Peninsula Dr', x: 26, y: 34 },
  { name: 'North Turn', x: 62, y: 38 },
  { name: 'S Atlantic Ave', x: 60, y: 56 },
  { name: 'Inlet Harbor', x: 24, y: 60 },
  { name: 'Lighthouse', x: 42, y: 76 },
  { name: 'Lighthouse Point Park', x: 54, y: 90 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Photo-verified turnovers for oceanfront and riverfront units, typically done in 2–4 hours between checkout and check-in.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'A 24/7 line for late checkouts, spills, and cancelled cleaners, with no holiday surcharge on standard tiers.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      'Volume pricing from 3 properties and a dedicated manager from 6, for owners with units in Ponce Inlet and beyond.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Do you cover all of Ponce Inlet, including the river side?',
    answer:
      'Yes. We clean from the Wilbur-by-the-Sea line to Lighthouse Point Park: oceanfront condos on South Atlantic Avenue and homes along South Peninsula Drive and the Halifax River. Pricing matches the rest of Volusia County, with no distance surcharge.',
  },
  {
    question: 'Is Ponce Inlet too far out for same-day help?',
    answer:
      'No. Ponce Inlet shares a route with our Daytona Beach Shores condos, and New Smyrna Beach crews can come up through Port Orange when needed. We aim to dispatch within 2 hours during business hours, and the 24/7 line covers after-hours problems.',
  },
  {
    question: 'Do your turnovers account for fishing and boating guests?',
    answer:
      'Yes. Charter anglers and sandbar boaters leave sand, salt spray, and wet gear behind. Every turnover includes balcony and slider cleaning, a patio sweep, and a grill check, and we photograph anything that needs your attention.',
  },
  {
    question: 'Can you follow a detailed owner checklist for a high-end unit?',
    answer:
      'Yes. Send us your checklist and staging photos and we add them to the property brief, down to how pillows, towels, and welcome items are set. Our 30-point photo report lets you compare the unit to your standard before the next guest arrives.',
  },
  {
    question: 'Do you also serve Wilbur-by-the-Sea and Daytona Beach Shores?',
    answer:
      'Yes. Wilbur-by-the-Sea sits just north of the town line and the Shores is next up the peninsula, both on the same route. Our NSB team covers New Smyrna Beach across the inlet.',
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}${PATH}#localbusiness`,
  name: 'Dazzle Divas Cleaning LLC — Ponce Inlet',
  parentOrganization: { '@id': `${SITE_URL}/#business` },
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ponce Inlet',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Ponce Inlet',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.0964,
    longitude: -80.937,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.0964,
      longitude: -80.937,
    },
    geoRadius: '6000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function PonceInletPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in Ponce Inlet"
        subtitle="Oceanfront condos on South Atlantic Avenue and riverfront homes near Inlet Harbor, turned over with the care a small, high-end rental market expects."
        image="/images/master_divas.jpg"
        imageAlt="Bed made with fresh linens and staged towels in a Volusia County vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="Turnovers at the southern tip of the peninsula"
        body={[
          'We treat Ponce Inlet as a detail market: fewer rentals than Daytona, and owners who expect each one to match its listing photos. The town fills the southern end of the barrier island between the Halifax River and the Atlantic and is known for strict land-use rules, so rentals are oceanfront condos and private homes along South Atlantic Avenue and South Peninsula Drive.',
          "Many guests come for the water. Anglers book around charters out of Inlet Harbor and Sea Love Marina, boaters head for the Disappearing Island sandbar, and families spend the day at Lighthouse Point Park, the jetty, or the Marine Science Center's sea turtle hospital. That shows up at checkout as wet gear, salt on the glass, and inlet sand in every slider track, so balconies and entries get extra attention on each turnover.",
          <Fragment key="routing">
            {'Routing is the other half of the job. There is no bridge across the inlet, so every trip into town comes down the peninsula through '}
            <Link href="/cleaning/daytona-beach-shores" className={LINK_CLASS}>
              Daytona Beach Shores
            </Link>
            {' and Wilbur-by-the-Sea. We run Ponce Inlet on the same route as our Shores condos, and our '}
            <Link href="/cleaning/new-smyrna-beach" className={LINK_CLASS}>
              New Smyrna Beach
            </Link>
            {' crews are a short drive away through Port Orange, so there is backup when a same-day problem comes up.'}
          </Fragment>,
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Ponce Inlet coverage"
        subtitle="The whole town is covered, from the Wilbur-by-the-Sea line south to Lighthouse Point Park, ocean side and river side."
        cityLabel="Ponce Inlet"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Halifax River"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="Ponce Inlet streets and landmarks we serve"
        subtitle="Small town, full coverage. If your rental has a Ponce Inlet address, we clean there."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Ponce Inlet services" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="Ponce Inlet questions we hear"
        items={faqs}
      />
      <CTABand
        title="Have a Ponce Inlet rental to turn over?"
        subtitle="Free quote within 24 hours. Send us the unit details and your checklist."
      />
    </>
  );
}
