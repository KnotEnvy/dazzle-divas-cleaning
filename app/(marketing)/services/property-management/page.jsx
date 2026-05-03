import {
  Building,
  User,
  CalendarClock,
  Tag,
  ClipboardList,
  Repeat,
  FileBarChart,
  UserCog,
  Calendar,
  Settings,
  BarChart3,
  Camera,
  Zap,
} from 'lucide-react';
import ServiceHero from '../../../components/service/ServiceHero';
import AtAGlance from '../../../components/service/AtAGlance';
import ProcessSteps from '../../../components/service/ProcessSteps';
import IncludedChecklist from '../../../components/service/IncludedChecklist';
import PricingGrid from '../../../components/service/PricingGrid';
import ServiceFAQ from '../../../components/service/ServiceFAQ';
import CrossSell from '../../../components/service/CrossSell';
import CTABand from '../../../components/service/CTABand';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
const PATH = '/services/property-management';

export const metadata = {
  title: 'Property Management Cleaning Service | Dazzle Divas Cleaning',
  description:
    'Multi-property cleaning service for Volusia County hosts. Volume pricing, dedicated manager, calendar sync, monthly reporting, and reserved peak-season capacity for portfolios of 3 to 50+ vacation rentals.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Property Management Cleaning Service',
    description:
      'Built for hosts running 3 to 50+ vacation rentals. Single point of contact, calendar sync, up to 20% volume pricing.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/property-management' },
  { name: 'Property Management' },
];

const stats = [
  { icon: Building, value: '500+', label: 'Properties served' },
  { icon: User, value: '1', label: 'Dedicated manager' },
  { icon: CalendarClock, value: 'Auto', label: 'Calendar sync' },
  { icon: Tag, value: '20%', label: 'Volume discount up to' },
];

const steps = [
  {
    icon: ClipboardList,
    title: 'Discovery',
    description:
      'Portfolio walkthrough, property quirks, supply preferences, owner standards. We document everything in your account brief.',
  },
  {
    icon: CalendarClock,
    title: 'Calendar sync',
    description:
      'Connect Airbnb, VRBO, Hospitable, or Guesty. Turnovers auto-schedule around your bookings — no spreadsheets, no relay games.',
  },
  {
    icon: Repeat,
    title: 'Recurring service',
    description:
      'Same-day handoff between guests, photo verification per turnover, restock tracking. Your dedicated manager handles the schedule.',
  },
  {
    icon: FileBarChart,
    title: 'Monthly reporting',
    description:
      'Turnovers completed, photo archive, supply log, guest-readiness scores per unit. Year-over-year trends so you can plan capacity.',
  },
];

const categories = [
  {
    icon: UserCog,
    name: 'Account Management',
    items: [
      'Dedicated manager assigned to your portfolio',
      'One text fits all — coordinate every property',
      'Weekly check-in available on Pro+ tiers',
      'Owner escalation line, no relays',
      'Documented account brief per property',
    ],
  },
  {
    icon: Calendar,
    name: 'Scheduling',
    items: [
      'Booking platform calendar sync',
      'Automatic turnover scheduling',
      'Peak-week reserved capacity',
      'Cancellation & re-book handling',
      'Conflict alerts before they become problems',
    ],
  },
  {
    icon: Settings,
    name: 'Operations',
    items: [
      'Property-specific cleaning protocols',
      'Supply replenishment tracking',
      'Key, lockbox, and code management',
      'Owner preferences logged & followed',
      'Vendor coordination on request',
    ],
  },
  {
    icon: BarChart3,
    name: 'Reporting',
    items: [
      'Monthly turnover summary',
      'Photo archive per property',
      'Guest-readiness scores by unit',
      'Year-over-year trends',
      'Insurance-ready documentation',
    ],
  },
];

const tiers = [
  {
    name: 'Starter',
    tagline: '3–5 properties',
    price: '10% off',
    priceSuffix: 'standard rates',
    priceNote: 'Volume pricing on standard turnover rates by property size.',
    features: [
      '3–5 property portfolio',
      'Calendar sync (1 platform)',
      'Standard turnover service',
      '30-point photo verification',
      'Account brief per property',
    ],
  },
  {
    name: 'Pro',
    tagline: '6–15 properties',
    price: '15% off',
    priceSuffix: '+ dedicated manager',
    priceNote: 'Most-chosen tier for active vacation rental managers.',
    featured: true,
    features: [
      '6–15 property portfolio',
      'Calendar sync (multi-platform)',
      'Dedicated account manager',
      'Priority booking & dispatch',
      'Monthly turnover reporting',
      'Reserved peak-season capacity',
    ],
  },
  {
    name: 'Enterprise',
    tagline: '16+ properties',
    price: 'Custom',
    priceSuffix: 'volume pricing',
    priceNote: 'Tailored pricing, SLAs, and reporting for large portfolios.',
    features: [
      '16+ property portfolio',
      'Custom volume pricing',
      'Dedicated manager + backup',
      'Reserved capacity guarantees',
      'Custom reporting cadence',
      'Insurance documentation support',
    ],
  },
];

const faqs = [
  {
    question: 'Do you offer volume discounts for multi-property hosts?',
    answer:
      'Yes. Starter packages (3–5 properties) include 10% off our standard turnover rates. Pro packages (6–15 properties) get 15% off plus a dedicated manager and priority booking. Enterprise (16+ properties) is custom-priced with reserved capacity and tailored reporting.',
  },
  {
    question: "What's a dedicated manager?",
    answer:
      'A single point of contact at Dazzle Divas who knows your portfolio: each property\'s quirks, guest preferences, supply needs, and scheduling rhythms. You text one person, they coordinate across every property in your account.',
  },
  {
    question: 'Can you integrate with our booking platform?',
    answer:
      'We coordinate with all major platforms — Airbnb, VRBO, Vacasa, Hospitable, Guesty. Connect your booking calendar and turnovers schedule themselves around your guests. No spreadsheets, no double-entry.',
  },
  {
    question: 'Do you provide reporting?',
    answer:
      'Pro and Enterprise tiers receive monthly reports: turnovers completed, photo archive per property, supply replenishment log, and guest-readiness scores per unit. Enterprise gets custom-cadence reporting and year-over-year trend analysis.',
  },
  {
    question: "What's your minimum portfolio size?",
    answer:
      'Three properties qualifies for the Starter package. Below that, our standard per-turnover pricing applies, with no commitment required — you can always grow into a tier as your portfolio expands.',
  },
  {
    question: 'Can you handle peak-season demand?',
    answer:
      "Yes. Pro and Enterprise tiers get reserved capacity during peak weeks — Daytona race events, holidays, summer rush — so you're never stuck searching for cleaners during a busy week. We block crew time on your calendar before peak demand hits.",
  },
];

const crossSell = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'The standard turnover service that powers our property management plans. Hospitality-grade, photo-verified, 2-4 hour guest-ready.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day Cleaning',
    description:
      '24/7 dispatch for surprise bookings, no-show cleaners, and post-storm cleanup. No rush fees on standard tiers.',
    href: '/services/emergency-cleaning',
  },
];

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Property Management Cleaning Service',
  serviceType: 'Vacation Rental Property Management Cleaning',
  description:
    'Multi-property vacation rental cleaning service for hosts and managers. Volume pricing, dedicated manager, calendar sync, monthly reporting.',
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
    name: 'Property Management Tiers',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Starter (3-5 properties)',
        description: '10% off standard turnover rates with calendar sync.',
      },
      {
        '@type': 'Offer',
        name: 'Pro (6-15 properties)',
        description:
          '15% off, dedicated manager, priority booking, monthly reporting.',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise (16+ properties)',
        description:
          'Custom volume pricing with reserved capacity and tailored reporting.',
      },
    ],
  },
  url: `${SITE_URL}${PATH}`,
};

export default function PropertyManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServiceHero
        eyebrow="For Multi-Property Hosts"
        title="Property Management Cleaning"
        subtitle="Single point of contact. Volume pricing. Reserved peak-season capacity. Built for hosts and managers running 3 to 50+ vacation rentals across Volusia County."
        image="/images/livingroom2_divas.jpg"
        imageAlt="Spacious living area in a managed Volusia County vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <ProcessSteps
        eyebrow="How it works"
        title="Onboarded in a week, hands-off after"
        subtitle="Multi-property cleaning is operations, not just cleaning. We treat your account like a partnership: documented, predictable, reportable."
        steps={steps}
      />
      <IncludedChecklist
        eyebrow="What we manage"
        title="Beyond the broom and the mop"
        subtitle="A property management plan covers the coordination, scheduling, and reporting work that eats hours of your week — not just the cleaning itself."
        categories={categories}
      />
      <PricingGrid
        eyebrow="Volume tiers"
        title="Pricing that scales with your portfolio"
        subtitle="All tiers apply our volume discount to standard turnover rates by property size. Pro and Enterprise add coordination, reporting, and reserved capacity."
        tiers={tiers}
        footnote="Property management plans are priced monthly with month-to-month commitment. Custom Enterprise plans are quoted after a portfolio review."
        ctaLabel="Request portfolio quote"
      />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What multi-property hosts ask before signing"
        items={faqs}
      />
      <CrossSell title="Services included in your plan" items={crossSell} />
      <CTABand
        title="Scale your portfolio without scaling cleaning headaches"
        subtitle="Free portfolio review. We'll spec a tier and pricing in 24 hours."
      />
    </>
  );
}
