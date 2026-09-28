import { Fragment } from 'react';
import Link from 'next/link';
import {
  Plane,
  Route,
  KeyRound,
  CalendarClock,
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
const PATH = '/cleaning/port-orange';
const CITY = 'Port Orange';
const LINK_CLASS =
  'font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2';

export const metadata = {
  title: 'Vacation Rental Cleaning in Port Orange, FL',
  description:
    'Turnover and home cleaning in Port Orange, from Spruce Creek and Cypress Head to the Halifax riverfront, by crews that also work the beachside.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning in Port Orange, FL',
    description:
      'Photo-verified turnovers and custom-quoted home cleaning for Port Orange rentals and second homes.',
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
    icon: Plane,
    label: 'Fly-In & gated communities',
    detail: 'Gate codes, hangar-home access, and HOA rules in every property brief.',
  },
  {
    icon: Route,
    label: 'One crew, both sides of the river',
    detail: 'Mainland houses and Shores condos share a route over the causeway.',
  },
  {
    icon: KeyRound,
    label: 'Second-home check-ins',
    detail: 'Perishables cleared, linens rotated, photos sent while you are away.',
  },
  {
    icon: CalendarClock,
    label: 'Quotes within 24 hours',
    detail: 'Turnovers at published tier prices; deep cleans from $200; home cleans custom-quoted.',
  },
];

const neighborhoods = [
  'Dunlawton Ave',
  'Nova Rd',
  'Spruce Creek Fly-In',
  'Cypress Head',
  'Waters Edge',
  'Countryside',
  'Riverwood Plantation',
  'Old Sugar Mill Rd',
  'Rose Bay',
];

const mapPins = [
  { name: 'Countryside', x: 30, y: 24 },
  { name: 'Dunlawton Ave', x: 44, y: 36 },
  { name: 'Causeway', x: 60, y: 28 },
  { name: 'Waters Edge', x: 24, y: 46 },
  { name: 'Cypress Head', x: 22, y: 66 },
  { name: 'Sugar Mill Gardens', x: 44, y: 62 },
  { name: 'Spruce Creek Fly-In', x: 20, y: 84 },
  { name: 'Rose Bay', x: 56, y: 86 },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Published tiers from $100–140 for a studio or 1BR. Guest-ready in 2–4 hours, with a photo checklist.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day',
    description:
      'A 2-hour dispatch goal in business hours for early check-ins and no-show cleaners, with no same-day surcharge.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management',
    description:
      '10% off at 3–5 properties and 15% off plus a dedicated manager at 6–15, for owners with mainland and beachside rentals.',
    href: '/services/property-management',
  },
];

const faqs = [
  {
    question: 'Do you clean mainland and longer-term rentals in Port Orange, not just beach condos?',
    answer:
      'Yes. Many Port Orange rentals are houses, not condos, and they get the same checklist we use beachside: linens, kitchen, bathrooms, floors, restock, and a photo report. Between longer leases we can quote a move-out clean within 24 hours.',
  },
  {
    question: 'Can one crew handle my Port Orange house and my Daytona Beach Shores condo?',
    answer:
      'Yes. The Port Orange Causeway on Dunlawton Avenue puts the Shores a short drive east, so both properties go on the same route and the same photo-verified standard. One cleaning company instead of two.',
  },
  {
    question: 'Do you work inside the Spruce Creek Fly-In and other gated neighborhoods?',
    answer:
      "Yes. The Fly-In's manned gate registers every contractor, and Cypress Head and Waters Edge are gated too, so we log gate procedures, guest-access rules, and parking in the property brief before the first visit.",
  },
  {
    question: 'What does a turnover cost in Port Orange?',
    answer:
      'The same as the rest of Volusia County: $100–140 for a studio or 1BR, $140–200 for a 2BR, and $200–280 for 3BR and up, depending on size and condition. Deep cleans are twice the standard clean, with a $200 minimum. Homes with 4+ bedrooms and residential cleans are custom-quoted within 24 hours.',
  },
  {
    question: 'Can you look after a second home while I am away?',
    answer:
      'Yes. We clean before you arrive and after you leave, clear perishables, rotate linens, and send photos so you can check on the house from wherever you are.',
  },
];

const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}${PATH}#localbusiness`,
  name: 'Dazzle Divas Cleaning LLC — Port Orange',
  parentOrganization: { '@id': `${SITE_URL}/#business` },
  image: `${SITE_URL}/images/Divas_logo-pink.jpg`,
  telephone: '+13863015775',
  url: `${SITE_URL}${PATH}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Port Orange',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Port Orange',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Volusia County' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.1387,
    longitude: -80.9968,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 29.1387,
      longitude: -80.9968,
    },
    geoRadius: '10000',
  },
  openingHours: 'Mo-Su 08:00-18:00',
  priceRange: '$$',
};

export default function PortOrangePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <ServiceHero
        eyebrow="Service Area"
        title="Vacation Rental Cleaning in Port Orange"
        subtitle="Turnovers for mainland rentals and second homes, from the Spruce Creek Fly-In to the Halifax riverfront, by the crews that also clean beachside condos across the causeway."
        image="/images/diningRoom_divas.jpg"
        imageAlt="Dining room with plantation shutters in a Volusia County rental home"
        breadcrumbs={breadcrumbs}
      />
      <LocalContext
        eyebrow="Local context"
        title="How we clean Port Orange homes and rentals"
        body={[
          'We clean Port Orange rentals to the same standard as an oceanfront condo: full turnover, restock, and photo checklist, whether the house backs onto the Cypress Head golf course or sits near the Sugar Mill Gardens. Port Orange is a mainland city of neighborhoods, not hotel strips, so the work here leans toward single-family homes, second homes, and longer-stay rentals whose owners are often away.',
          <Fragment key="causeway">
            {'Our routes follow Dunlawton Avenue, Nova Road, and Spruce Creek Road, then cross the Port Orange Causeway to '}
            <Link href="/cleaning/daytona-beach-shores" className={LINK_CLASS}>
              Daytona Beach Shores
            </Link>
            {'. If you own a mainland rental and a beachside condo, both can run on one crew schedule and one checklist. Riverfront homes near Rose Bay get the same patio and glass care as a beach house; salt air does not stop at the bridge.'}
          </Fragment>,
          <Fragment key="long-stays">
            {'Longer stays change the scope. A family in a Port Orange house for a week or a month cooks more and leaves more in the fridge than a two-night beach guest, so our turnover checks appliances, resets the kitchen, and rotates every linen set. Owners between tenants can add a '}
            <Link href="/services/deep-cleaning" className={LINK_CLASS}>
              deep clean
            </Link>
            {', custom-quoted within 24 hours.'}
          </Fragment>,
        ]}
        highlights={highlights}
      />
      <ServiceAreaMap
        title="Our Port Orange service area"
        subtitle="We cover all of Port Orange, from the Spruce Creek Fly-In and Cypress Head in the west to Rose Bay and the causeway."
        cityLabel="Port Orange"
        neighborhoods={mapPins}
        showRiver
        riverLabel="Spruce Creek"
      />
      <NeighborhoodGrid
        eyebrow="Neighborhoods served"
        title="Port Orange neighborhoods we clean"
        subtitle="Every Port Orange neighborhood is in range; these are the ones our crews visit most, not the edge of our coverage."
        neighborhoods={neighborhoods}
      />
      <CrossSell title="Port Orange services" items={services} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="Port Orange owners ask us"
        items={faqs}
      />
      <CTABand
        title="Need a cleaner for your Port Orange property?"
        subtitle="Free quote within 24 hours for turnovers, second homes, and mainland rentals."
      />
    </>
  );
}
