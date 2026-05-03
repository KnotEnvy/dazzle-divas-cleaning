import {
  Clock,
  Camera,
  Zap,
  Shield,
  CalendarCheck,
  Sparkles,
  Package,
  Bed,
  ShowerHead,
  UtensilsCrossed,
  Sofa,
  Building,
} from 'lucide-react';
import ServiceHero from '../../../components/service/ServiceHero';
import AtAGlance from '../../../components/service/AtAGlance';
import ProcessSteps from '../../../components/service/ProcessSteps';
import IncludedChecklist from '../../../components/service/IncludedChecklist';
import PricingGrid from '../../../components/service/PricingGrid';
import BeforeAfter from '../../../components/service/BeforeAfter';
import ServiceFAQ from '../../../components/service/ServiceFAQ';
import CrossSell from '../../../components/service/CrossSell';
import CTABand from '../../../components/service/CTABand';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
const PATH = '/services/vacation-rental-turnover';

export const metadata = {
  title: 'Vacation Rental Turnover Cleaning | Dazzle Divas Cleaning',
  description:
    'Guest-ready vacation rental turnovers in Volusia County. 2-4 hour turnaround, 30-point photo verification, hospitality-trained crews. Serving Daytona Beach, Ormond Beach, and New Smyrna Beach.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Turnover Cleaning',
    description:
      'Photo-verified, guest-ready turnovers in 2-4 hours. Trusted by 500+ vacation rentals across Volusia County.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/vacation-rental-turnover' },
  { name: 'Vacation Rental Turnover' },
];

const stats = [
  { icon: Clock, value: '2-4 hr', label: 'Average turnover' },
  { icon: Camera, value: '30+ pt', label: 'Photo checklist' },
  { icon: Zap, value: 'Same-day', label: 'Booking available' },
  { icon: Shield, value: '5-star', label: 'Review protection' },
];

const steps = [
  {
    icon: CalendarCheck,
    title: 'Pre-arrival check',
    description:
      'We confirm your checkout time, sync our crew schedule, and review property-specific notes before we ever set foot in your rental.',
  },
  {
    icon: Sparkles,
    title: 'Full clean & laundry',
    description:
      'Every surface wiped, beds stripped and remade, towels rotated, floors vacuumed and mopped. Hospitality-grade, not house-cleaning grade.',
  },
  {
    icon: Package,
    title: 'Restock & stage',
    description:
      'Toilet paper, hand soap, coffee, paper towels — all replenished. Welcome touches reset to your standard, ready for the next 5-star review.',
  },
  {
    icon: Camera,
    title: 'Photo verification',
    description:
      "30-point photo checklist sent to your phone before we leave. If anything's missed, we return at no charge.",
  },
];

const categories = [
  {
    icon: Bed,
    name: 'Bedrooms',
    items: [
      'Linens stripped & remade',
      'All surfaces wiped & sanitized',
      'Carpets vacuumed, hard floors mopped',
      'Mirrors & glass cleaned',
      'Trash removed',
    ],
  },
  {
    icon: ShowerHead,
    name: 'Bathrooms',
    items: [
      'Toilets, showers, tubs scrubbed',
      'Sinks & faucets polished',
      'Mirrors streak-free',
      'Fresh towels staged',
      'Toiletries restocked',
    ],
  },
  {
    icon: UtensilsCrossed,
    name: 'Kitchen',
    items: [
      'Dishes loaded & run',
      'Counters, stove, microwave wiped',
      'Fridge interior checked & wiped',
      'Trash & recycling out',
      'Coffee, paper towels restocked',
    ],
  },
  {
    icon: Sofa,
    name: 'Living & Outdoor',
    items: [
      'Floors vacuumed & mopped',
      'Dust & surface wipe-down',
      'Sliding doors & glass cleaned',
      'Patio swept, grill checked',
      'AC reset to guest-ready temp',
    ],
  },
];

const tiers = [
  {
    name: 'Studio & 1 Bedroom',
    tagline: 'Compact rentals, condos, in-laws',
    price: '$100–$140',
    priceSuffix: 'per turnover',
    priceNote: 'Price varies by square footage and condition.',
    features: [
      'Up to 1 bathroom',
      'Linens & laundry included',
      '30-point photo verification',
      'Restock of guest essentials',
      'Same-day availability',
    ],
  },
  {
    name: '2 Bedroom',
    tagline: 'Most-booked tier — typical Volusia rental',
    price: '$140–$200',
    priceSuffix: 'per turnover',
    priceNote: 'Includes up to 2 bathrooms and standard outdoor area.',
    featured: true,
    features: [
      '1–2 bathrooms',
      'Linens & laundry included',
      '30-point photo verification',
      'Restock of guest essentials',
      'Patio & outdoor area',
      'Same-day availability',
    ],
  },
  {
    name: '3 Bedroom+',
    tagline: 'Larger homes & oceanfront properties',
    price: '$200–$280',
    priceSuffix: 'per turnover',
    priceNote: '4+ BR and luxury properties get a custom quote.',
    features: [
      '2+ bathrooms',
      'Linens & laundry included',
      '30-point photo verification',
      'Restock of guest essentials',
      'Patio, grill & outdoor checks',
      'Priority same-day booking',
    ],
  },
];

const faqs = [
  {
    question: 'How long does a vacation rental turnover take?',
    answer:
      'Most 1–2 bedroom turnovers take 2–3 hours. Larger properties (3+ BR) take 3–4 hours. We guarantee guest-ready within your booking window — typically the gap between an 11am checkout and a 4pm check-in.',
  },
  {
    question: "What's included in a guest-ready turnover?",
    answer:
      "A full clean of every room, linen change and laundry, restock of essentials (toilet paper, soap, coffee, paper towels), trash removal, a 30-point photo verification sent to your phone before we leave, and a guest amenity check.",
  },
  {
    question: 'Can you turn over a rental in the same-day check-out / check-in window?',
    answer:
      'Yes — we specialize in tight 4-hour turnover windows. Many of our properties run 11am checkout / 4pm check-in, and we coordinate around your booking calendar so you never miss a turn.',
  },
  {
    question: 'Do you supply cleaning products and linens?',
    answer:
      'We bring all cleaning products and equipment. Linens and towels are typically owner-supplied, but we handle laundry on-site or via our linen service when requested.',
  },
  {
    question: 'What happens if a guest leaves the property in unusually bad condition?',
    answer:
      "We document with photos before cleaning and notify you immediately. You're charged the standard rate; any extra time required for excessive damage is billed at $40/hour with your approval first.",
  },
  {
    question: 'How do you protect against missed details?',
    answer:
      "Every turnover ends with a 30-point photo checklist sent to your phone before we leave. If anything's missed, we return at no charge. That's how we protect your reviews.",
  },
];

const crossSell = [
  {
    icon: Zap,
    title: 'Emergency & Same-Day Cleaning',
    description:
      'Surprise bookings, no-show cleaners, post-storm cleanup. 2-hour response, no rush fees, 24/7 phone line.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Building,
    title: 'Property Management Service',
    description:
      'Multi-property hosts get a dedicated manager, calendar sync, monthly reporting, and up to 20% volume pricing.',
    href: '/services/property-management',
  },
];

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vacation Rental Turnover Cleaning',
  serviceType: 'Vacation Rental Cleaning',
  description:
    'Guest-ready vacation rental turnovers with 2-4 hour turnaround, 30-point photo verification, and hospitality-trained crews.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Dazzle Divas Cleaning LLC',
    telephone: '+13863015775',
    url: SITE_URL,
  },
  areaServed: [
    { '@type': 'City', name: 'Daytona Beach' },
    { '@type': 'City', name: 'Ormond Beach' },
    { '@type': 'City', name: 'New Smyrna Beach' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Turnover Pricing by Bedroom Count',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Studio / 1 Bedroom Turnover',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 100,
          maxPrice: 140,
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: '2 Bedroom Turnover',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 140,
          maxPrice: 200,
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        name: '3 Bedroom+ Turnover',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: 200,
          maxPrice: 280,
          priceCurrency: 'USD',
        },
      },
    ],
  },
  url: `${SITE_URL}${PATH}`,
};

export default function VacationRentalTurnoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServiceHero
        eyebrow="Vacation Rental Specialists"
        title="Vacation Rental Turnover Cleaning"
        subtitle="Guest-ready in 2–4 hours. Photo-verified. Hospitality-trained crews who think like hotel housekeepers, not house cleaners."
        image="/images/master_divas.jpg"
        imageAlt="Pristine staged bedroom in a Volusia County vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <ProcessSteps
        eyebrow="How it works"
        title="A turnover, end to end"
        subtitle="Every booking ends with a guest who feels they walked into a hotel — not a rented house. Here's how we get there, every time."
        steps={steps}
      />
      <IncludedChecklist
        eyebrow="Standard inclusions"
        title="What every turnover covers"
        subtitle="No upsells, no surprise add-ons. Every turnover includes the full scope below — adjusted for your property's size and condition."
        categories={categories}
      />
      <PricingGrid
        eyebrow="Transparent pricing"
        title="Turnover pricing by property size"
        subtitle="All tiers include linens & laundry, photo verification, and review protection. Final price varies by square footage and condition; quotes are free and itemized."
        tiers={tiers}
        footnote="4+ bedroom and luxury properties receive a custom quote. Volusia County hosts managing multiple rentals — see our Property Management tier for volume pricing."
      />
      <BeforeAfter
        beforeSrc="/images/dirtySink_divas.jpg"
        afterSrc="/images/cleanSink_divas.jpg"
        beforeAlt="Kitchen sink before Dazzle Divas turnover"
        afterAlt="Kitchen sink after Dazzle Divas turnover"
        caption="A real turnover from a Volusia County rental. Drag the slider to compare."
      />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What hosts ask before they book"
        items={faqs}
      />
      <CrossSell title="Other services hosts use with us" items={crossSell} />
      <CTABand
        title="Ready for guest-ready turnovers?"
        subtitle="Free quote, no commitment. Most quotes returned within 2 hours during business hours."
      />
    </>
  );
}
