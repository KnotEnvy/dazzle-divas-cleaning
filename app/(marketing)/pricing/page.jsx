import Link from 'next/link';
import {
  Tag,
  Clock,
  Ban,
  Percent,
  Bed,
  ShowerHead,
  UtensilsCrossed,
  Sofa,
  CalendarDays,
  Zap,
  PhoneCall,
  Ruler,
  ClipboardCheck,
  Award,
  Building,
  Sparkles,
  Home,
  Leaf,
  Truck,
  ClipboardList,
  FileText,
  Handshake,
  Camera,
} from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import AtAGlance from '../../components/service/AtAGlance';
import IncludedChecklist from '../../components/service/IncludedChecklist';
import PricingGrid from '../../components/service/PricingGrid';
import ProcessSteps from '../../components/service/ProcessSteps';
import ServiceFAQ from '../../components/service/ServiceFAQ';
import CTABand from '../../components/service/CTABand';
import TurnoverRateTable from '../../components/pricing/TurnoverRateTable';
import InfoGrid from '../../components/pricing/InfoGrid';
import CustomQuoteServices from '../../components/pricing/CustomQuoteServices';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
// Must match the @id declared in app/layout.js, which hardcodes the production
// origin. Do not derive it from NEXT_PUBLIC_SITE_URL or the reference breaks.
const BUSINESS_ID = 'https://www.dazzledivascleaning.com/#business';
const PATH = '/pricing';

// Every number on this page is already published elsewhere on the site
// (turnover page, property-management page, emergency page, llms.txt).
// Do not add a price, fee, minimum, or add-on cost here without an
// owner-confirmed source.

export const metadata = {
  title: 'Vacation Rental Cleaning Prices from $100',
  description:
    'Published turnover prices for Volusia County: $100–$140 studio/1BR, $140–$200 2BR, $200–$280 3BR+. No rush fees on standard tiers. Free quotes in 24 hours.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Vacation Rental Cleaning Prices from $100',
    description:
      'Turnover prices by bedroom count, volume discounts for 3+ rentals, and no weekend or holiday surcharge on standard tiers. Volusia County, FL.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: PATH },
];

// Single source for the rate table AND the Offer schema, so they cannot drift.
const turnoverTiers = [
  {
    size: 'Studio & 1 bedroom',
    baths: 'Up to 1',
    min: 100,
    max: 140,
    note: 'Condos and compact rentals',
    schemaName: 'Studio / 1 Bedroom Turnover',
  },
  {
    size: '2 bedrooms',
    baths: '1–2',
    min: 140,
    max: 200,
    note: 'Most-booked tier',
    featured: true,
    schemaName: '2 Bedroom Turnover',
  },
  {
    size: '3 bedrooms+',
    baths: '2+',
    min: 200,
    max: 280,
    note: 'Larger homes and oceanfront properties',
    schemaName: '3 Bedroom+ Turnover',
  },
];

const rateRows = [
  ...turnoverTiers.map((tier) => ({
    size: tier.size,
    baths: tier.baths,
    note: tier.note,
    featured: tier.featured,
    price: `$${tier.min}–$${tier.max}`,
  })),
  {
    size: '4+ bedrooms & luxury homes',
    baths: 'Varies',
    note: 'Priced after a property review',
    price: 'Custom quote within 24 hours',
    custom: true,
  },
];

const stats = [
  { icon: Tag, value: '$100', label: 'Turnovers start at' },
  { icon: Clock, value: '24 hr', label: 'Free quote turnaround' },
  { icon: Ban, value: '$0', label: 'Rush fees on standard tiers' },
  { icon: Percent, value: '10–15%', label: 'Off for 3–15 rentals' },
];

// Condensed from the checklist on /services/vacation-rental-turnover.
const included = [
  {
    icon: Bed,
    name: 'Bedrooms',
    items: [
      'Linens stripped & remade',
      'All surfaces wiped & sanitized',
      'Carpets vacuumed, hard floors mopped',
      'Trash removed',
    ],
  },
  {
    icon: ShowerHead,
    name: 'Bathrooms',
    items: [
      'Toilets, showers, tubs scrubbed',
      'Sinks & faucets polished',
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
      'Coffee, paper towels restocked',
    ],
  },
  {
    icon: Sofa,
    name: 'Living & Outdoor',
    items: [
      'Floors vacuumed & mopped',
      'Sliding doors & glass cleaned',
      'Patio swept, grill checked',
      'AC reset to guest-ready temp',
    ],
  },
];

// Same tiers as /services/property-management.
const volumeTiers = [
  {
    name: 'Starter',
    tagline: '3–5 properties',
    price: '10% off',
    priceSuffix: 'standard rates',
    features: [
      'Calendar sync (1 platform)',
      '30-point photo verification',
      'Account brief per property',
    ],
  },
  {
    name: 'Pro',
    tagline: '6–15 properties',
    price: '15% off',
    priceSuffix: '+ dedicated manager',
    featured: true,
    features: [
      'Calendar sync (multi-platform)',
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
    priceNote: 'Quoted after a portfolio review.',
    features: [
      'Dedicated manager + backup',
      'Reserved capacity guarantees',
      'Custom reporting cadence',
    ],
  },
];

const emergencyPolicy = [
  {
    icon: Ban,
    title: 'No rush fees',
    body: 'Same-day and within-4-hour requests on standard tiers cost the same as a turnover booked ahead.',
  },
  {
    icon: CalendarDays,
    title: 'No weekend or holiday surcharge',
    body: 'Saturdays, Sundays, holidays, and race weeks cost the same as weekdays.',
  },
  {
    icon: Zap,
    title: '2-hour dispatch goal',
    body: 'Our target during business hours. After-hours requests are handled same-day.',
  },
  {
    icon: PhoneCall,
    title: '24/7 emergency line',
    body: 'Answered around the clock for surprise bookings and no-show cleaners.',
  },
];

const priceFactors = [
  {
    icon: Bed,
    title: 'Bedrooms and bathrooms',
    body: 'They set your tier, from a studio up to 3 bedrooms and beyond.',
  },
  {
    icon: Ruler,
    title: 'Square footage',
    body: 'A larger layout lands toward the top of its range.',
  },
  {
    icon: ClipboardCheck,
    title: 'Condition at checkout',
    body: 'Unusual messes are photographed and reported to you first. Extra time is only billed with your approval.',
  },
  {
    icon: Award,
    title: 'Luxury and 4+ bedroom homes',
    body: 'Quoted individually after a property review.',
  },
];

const customServices = [
  {
    icon: Home,
    name: 'Residential house cleaning',
    summary: 'One-time or recurring home cleaning, done to our hospitality standard.',
    factors: [
      'Bedrooms, bathrooms, and square footage',
      'Current condition',
      'One-time, weekly, or bi-weekly',
    ],
  },
  {
    icon: Sparkles,
    name: 'Deep cleaning',
    summary: 'Top to bottom, including baseboards, appliances, and inside cabinets.',
    factors: ['Size of the home', 'Current condition', 'Time since the last deep clean'],
  },
  {
    icon: Leaf,
    name: 'Eco-friendly cleaning',
    summary: 'Non-toxic, green products safe for guests, families, and pets.',
    factors: ['The service it is paired with', 'Size of the home', 'Your product preferences'],
  },
  {
    icon: Truck,
    name: 'Move-in / move-out cleaning',
    summary: 'A full clean between occupants, or before a new listing goes live.',
    factors: ['Size of the home', 'Empty or furnished', 'Appliance and cabinet interiors'],
  },
];

const quoteSteps = [
  {
    icon: ClipboardList,
    title: 'Share the basics',
    description: 'Address, bedrooms, bathrooms, and your booking calendar.',
  },
  {
    icon: FileText,
    title: 'Get your quote',
    description: 'Itemized, within 24 hours.',
  },
  {
    icon: Handshake,
    title: 'Decide freely',
    description: 'No obligation and no contract.',
  },
  {
    icon: Camera,
    title: 'Photo-verified first clean',
    description: 'The same 30-point photo checklist.',
  },
];

const faqs = [
  {
    question: 'How do you charge for vacation rental cleaning?',
    answer:
      'A flat rate per turnover, set by bedroom count: $100–$140 for a studio or 1 bedroom, $140–$200 for 2 bedrooms, and $200–$280 for 3 bedrooms and up. Square footage and condition set where you land in the range.',
  },
  {
    question: 'Do you charge more for weekends or holidays?',
    answer:
      'No. Weekends, holidays, and race weeks cost the same as weekdays, and same-day requests on standard tiers carry no rush fee. Every response-time tier is listed on our Emergency & Same-Day Cleaning page.',
  },
  {
    question: 'Is laundry included?',
    answer:
      'Yes. Stripping beds, washing linens and towels on-site when machines are available, and remaking beds are part of every tier. Linens and towels are usually owner-supplied; for back-to-back bookings, ask about our linen service.',
  },
  {
    question: 'What about cleaning supplies and restocking?',
    answer:
      'We bring all cleaning products and equipment. Restocking toilet paper, hand soap, paper towels, and coffee from your supply closet is included at every tier.',
  },
  {
    question: 'Do you require a contract?',
    answer:
      'No. Per-turnover service has no commitment, and property management plans are month-to-month. Scheduling, cancellation, and payment terms are in our Terms of Service.',
  },
  {
    question: 'How do I pay?',
    answer:
      'We accept cash, check, credit card, Venmo, and Zelle. Hosts on a recurring schedule and property managers can set up monthly invoicing.',
  },
];

const areaServed = [
  { '@type': 'AdministrativeArea', name: 'Volusia County, FL' },
  ...[
    'Daytona Beach',
    'Daytona Beach Shores',
    'Ormond Beach',
    'Ormond-by-the-Sea',
    'New Smyrna Beach',
    'Port Orange',
    'Ponce Inlet',
  ].map((name) => ({ '@type': 'City', name })),
];

// Offers cover the published turnover tiers ONLY. Custom-quoted services and
// the 4+ bedroom row have no price, so they are deliberately left out.
const pricingLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#turnover-pricing`,
  name: 'Vacation Rental Turnover Cleaning',
  serviceType: 'Vacation Rental Cleaning',
  description:
    'Per-turnover pricing by bedroom count for vacation rental cleaning in Volusia County, Florida. Laundry, restocking, and 30-point photo verification are included at every tier.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: 'Dazzle Divas Cleaning LLC',
  },
  areaServed,
  url: `${SITE_URL}${PATH}`,
  offers: turnoverTiers.map((tier) => ({
    '@type': 'Offer',
    name: tier.schemaName,
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: tier.min,
      maxPrice: tier.max,
      priceCurrency: 'USD',
    },
    url: `${SITE_URL}${PATH}`,
  })),
};

const linkClass =
  'font-semibold text-diva-pink-600 underline decoration-diva-pink-300 underline-offset-4 hover:text-diva-pink-700';
const darkLinkClass =
  'font-semibold text-diva-pink-300 underline decoration-diva-pink-400/60 underline-offset-4 hover:text-white';

export default function PricingPage() {
  return (
    <>
      {/* BreadcrumbList JSON-LD is emitted by Breadcrumbs inside ServiceHero. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingLd) }}
      />
      <ServiceHero
        eyebrow="Transparent pricing"
        title="Vacation Rental Turnovers in Volusia County Start at $100"
        subtitle="$100–$140 for a studio or 1 bedroom, $140–$200 for 2 bedrooms, and $200–$280 for 3 bedrooms and up. Laundry, restocking, and 30-point photo verification come with every tier."
        image="/images/swans_divas.jpg"
        imageAlt="Towel swans and a welcome treat staged on a freshly made bed in a beach rental"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <TurnoverRateTable
        id="turnover-rates"
        eyebrow="Turnover rates"
        title="What a vacation rental turnover costs"
        lead="A standard guest-ready turnover costs $100 to $280, set by bedroom count and adjusted for square footage and condition."
        caption="Vacation rental turnover prices in Volusia County, FL, per turnover, in US dollars."
        rows={rateRows}
        note={
          <>
            Quotes are free and itemized. See the full scope on our{' '}
            <Link href="/services/vacation-rental-turnover" className={linkClass}>
              vacation rental turnover
            </Link>{' '}
            page and portfolio plans on our{' '}
            <Link href="/services/property-management" className={linkClass}>
              property management
            </Link>{' '}
            page.
          </>
        }
      />
      <IncludedChecklist
        eyebrow="Included at every tier"
        title="What every turnover price covers"
        subtitle="Every tier includes the scope below and ends with a 30-point photo checklist sent to your phone before we leave."
        categories={included}
      />
      <PricingGrid
        eyebrow="Volume pricing"
        title="Discounts for hosts with three or more rentals"
        subtitle="3–5 properties get 10% off standard turnover rates, 6–15 get 15% off plus a dedicated manager, and 16+ are custom-priced."
        tiers={volumeTiers}
        footnote="Plans are month-to-month, with no annual commitment."
        ctaLabel="Request portfolio quote"
      />
      <InfoGrid
        id="emergency-pricing"
        tone="dark"
        columns={4}
        eyebrow="Weekends, holidays & emergencies"
        title="No rush fees and no weekend or holiday surcharge"
        lead="Same-day and emergency turnovers on standard tiers cost the normal rate, any day of the year."
        items={emergencyPolicy}
        footer={
          <>
            Need a guaranteed response window? Each emergency tier and its terms are on our{' '}
            <Link href="/services/emergency-cleaning" className={darkLinkClass}>
              Emergency &amp; Same-Day Cleaning
            </Link>{' '}
            page.
          </>
        }
      />
      <InfoGrid
        id="price-factors"
        eyebrow="Price factors"
        title="What changes the price"
        lead="Bedroom count sets your tier; square footage and condition set where you land in it."
        columns={4}
        items={priceFactors}
        footer="What never changes the price: the day of the week, a holiday, or booking same-day on a standard tier."
      />
      <CustomQuoteServices
        id="custom-quotes"
        eyebrow="Custom-quoted services"
        title="Everything else is quoted within 24 hours"
        lead="Residential, deep, eco-friendly, and move-in/move-out cleaning are custom-quoted, free, within 24 hours, because scope varies too much for a fair flat rate."
        services={customServices}
      />
      <ProcessSteps
        eyebrow="How quoting works"
        title="Free, itemized quotes within 24 hours"
        subtitle="Quotes are free and carry no obligation."
        steps={quoteSteps}
      />
      <ServiceFAQ
        eyebrow="Pricing questions"
        title="What hosts ask about cost"
        items={faqs}
      />
      <CTABand
        title="Get your exact price within 24 hours"
        subtitle="Free, itemized, and no obligation."
      />
    </>
  );
}
