import Image from 'next/image';
import Link from 'next/link';
import {
  Repeat,
  Clock,
  Home,
  MapPin,
  MessageSquare,
  Sparkles,
  ClipboardList,
  CalendarRange,
  UtensilsCrossed,
  Bath,
  BedDouble,
  Sofa,
  Ruler,
  Refrigerator,
  Leaf,
  Camera,
  ArrowRight,
} from 'lucide-react';
import ServiceHero from '../../../components/service/ServiceHero';
import AtAGlance from '../../../components/service/AtAGlance';
import ProcessSteps from '../../../components/service/ProcessSteps';
import IncludedChecklist from '../../../components/service/IncludedChecklist';
import ServiceFAQ from '../../../components/service/ServiceFAQ';
import CrossSell from '../../../components/service/CrossSell';
import CTABand from '../../../components/service/CTABand';
import Reveal, { StaggerGroup, StaggerItem } from '../../../components/motion/Reveal';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
const PATH = '/services/residential-house-cleaning';

export const metadata = {
  title: 'Residential House Cleaning in Volusia County',
  description:
    'Weekly, bi-weekly, monthly, and one-time house cleaning in Volusia County, plus move-in/move-out. Hotel-level detail. Custom quote within 24 hours.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Residential House Cleaning in Volusia County',
    description:
      'Recurring and one-time house cleaning for homeowners, second-home owners, and snowbirds, held to a vacation-rental standard.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: PATH },
  { name: 'Residential House Cleaning' },
];

const stats = [
  { icon: Repeat, value: 'Recurring', label: 'Weekly, bi-weekly, or monthly' },
  { icon: Clock, value: '24 hr', label: 'Custom quote turnaround' },
  { icon: Home, value: '550+', label: 'Properties cleaned a year' },
  { icon: MapPin, value: '15+', label: 'Cities served' },
];

const steps = [
  {
    icon: MessageSquare,
    title: 'Describe your home',
    description:
      'Share square footage, bedroom and bathroom count, pets, and the rooms that matter most. A custom quote comes back within 24 hours.',
  },
  {
    icon: Sparkles,
    title: 'Reset visit',
    description:
      'The first clean brings the whole house up to standard, corners and edges included, so later visits maintain it instead of catching up.',
  },
  {
    icon: ClipboardList,
    title: 'A written routine',
    description:
      'Your preferences become notes the crew follows every time: which products, which rooms first, where the dog waits.',
  },
  {
    icon: CalendarRange,
    title: 'Adjust as life changes',
    description:
      "Switch cadence, add a deep clean before the holidays, or move a visit around travel with 48 hours' notice.",
  },
];

const categories = [
  {
    icon: UtensilsCrossed,
    name: 'Kitchen',
    items: [
      'Counters and backsplash degreased',
      'Stovetop and range hood wiped',
      'Microwave cleaned inside and out',
      'Sink scrubbed, faucet shined',
      'Cabinet fronts and pulls wiped',
    ],
  },
  {
    icon: Bath,
    name: 'Bathrooms',
    items: [
      'Tub, shower, and glass descaled',
      'Toilet cleaned from base to tank',
      'Vanity and mirror streak-free',
      'Towels folded or hung neatly',
      'Floors washed, edges included',
    ],
  },
  {
    icon: BedDouble,
    name: 'Bedrooms',
    items: [
      'Beds made; linens changed on request',
      'Nightstands and dressers dusted',
      'Mirrors and glass polished',
      'Carpet vacuumed, hard floors mopped',
      'Wastebaskets emptied',
    ],
  },
  {
    icon: Sofa,
    name: 'Living Areas',
    items: [
      'Shelves and decor dusted',
      'Glass tables and sliders cleaned',
      'Remotes, switches, and handles wiped',
      'Cushions straightened, throws folded',
      'Floors vacuumed and mopped',
    ],
  },
];

const pricingFactors = [
  {
    icon: Ruler,
    title: 'Square footage',
    description:
      'More floor means more time. Many small rooms also take longer than one open plan.',
  },
  {
    icon: Bath,
    title: 'Bedrooms and bathrooms',
    description:
      'Bathrooms carry the most detail work per square foot, so the count matters as much as size.',
  },
  {
    icon: Repeat,
    title: 'Visit frequency',
    description:
      'Weekly service stays ahead of buildup, so each visit is lighter than a monthly one.',
  },
  {
    icon: Sparkles,
    title: 'Current condition',
    description:
      'If it has been a while, the first visit is a reset and is priced on its own.',
  },
  {
    icon: Refrigerator,
    title: 'Add-ons',
    description:
      'Inside the oven, inside the fridge, and interior windows can be added to any visit.',
  },
  {
    icon: Leaf,
    title: 'Product preference',
    description:
      'Want non-toxic or fragrance-conscious products? Say so up front and your quote reflects it.',
  },
];

const audiences = [
  {
    title: 'Year-round homeowners',
    description:
      'Weekly or bi-weekly visits keep kitchens and bathrooms from ever reaching scrub-day territory.',
  },
  {
    title: 'Second-home owners',
    description:
      'We clean before you arrive and after you leave, so the house is ready the moment you pull in.',
  },
  {
    title: 'Snowbirds',
    description:
      'Open the house in the fall with a thorough clean, keep a monthly routine through the season, and close it out in spring before summer humidity sets in.',
  },
  {
    title: 'Moving in or out',
    description:
      'Empty-home cleans reach inside cabinets, drawers, and closets, timed around your lease end or closing date.',
  },
];

const faqs = [
  {
    question: 'Do you clean homes that are not vacation rentals?',
    answer:
      'Yes. We are vacation-rental specialists first, and that is the point: the habits that earn hosts five-star reviews, like streak-free glass and neatly made beds, carry straight into a home you live in.',
  },
  {
    question: 'How often should I schedule a house cleaning?',
    answer:
      'Bi-weekly suits most households that tidy up between visits. Weekly fits homes with young kids, pets, or a lot of cooking, and monthly fits light-use homes and second homes. You can change cadence whenever your needs change.',
  },
  {
    question: 'Do you offer move-in and move-out cleaning?',
    answer:
      'Yes. They are booked as one-time jobs and focus on what an empty home reveals: cabinet and drawer interiors, closet shelves, baseboards, and appliance interiors. Give us your closing or lease date and we schedule around it.',
  },
  {
    question: 'Can you look after a second home or snowbird residence?',
    answer:
      'Yes. A common setup is an arrival clean, a departure clean, and a monthly visit in between. Departure cleans take out the trash and, on request, clear perishables so nothing greets you next time.',
  },
  {
    question: 'Do I need to be home during the clean?',
    answer:
      'No. A door code or lockbox works fine. Please send any access change at least 24 hours before the visit, secure pets and valuables, and point out anything fragile.',
  },
  {
    question: 'What happens if something is missed?',
    answer:
      'Tell us within 24 hours and we come back to fix it at no charge. That satisfaction guarantee is written into our terms of service and covers anything within the standard scope.',
  },
];

const crossSell = [
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'Book one before recurring service starts, or seasonally, to reach baseboards, ceiling fans, grout, and the inside of every cabinet.',
    href: '/services/deep-cleaning',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Cleaning',
    description:
      'Non-toxic, fragrance-conscious products on request for households with kids, pets, or sensitivities.',
    href: '/services/eco-friendly-cleaning',
  },
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Renting the place out between your own stays? Photo-verified turnovers keep guests and reviews happy.',
    href: '/services/vacation-rental-turnover',
  },
];

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
  name: 'Residential House Cleaning',
  serviceType: 'House Cleaning',
  description:
    'Recurring and one-time residential cleaning for homeowners throughout Volusia County.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Dazzle Divas Cleaning LLC',
    telephone: '+13863015775',
    url: SITE_URL,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Volusia County' },
    { '@type': 'City', name: 'Daytona Beach' },
    { '@type': 'City', name: 'Ormond Beach' },
    { '@type': 'City', name: 'New Smyrna Beach' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Residential Cleaning Options',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Recurring house cleaning',
        description:
          'Weekly, bi-weekly, or monthly visits. Custom quote within 24 hours.',
      },
      {
        '@type': 'Offer',
        name: 'One-time house cleaning',
        description:
          'A single full-home clean for owner arrivals, departures, or special occasions.',
      },
      {
        '@type': 'Offer',
        name: 'Move-in / move-out cleaning',
        description:
          'Empty-home clean including cabinet, drawer, closet, and appliance interiors.',
      },
    ],
  },
  url: `${SITE_URL}${PATH}`,
};

function PricingFactors({ factors }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <span className="text-sm font-semibold tracking-wider uppercase text-diva-gold-600">
              How pricing works
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              A custom quote within 24 hours
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              House cleaning has no one-size price, so we quote each home on its
              details and send the number within 24 hours. Six factors move it
              most.
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {factors.map((factor) => {
            const Icon = factor.icon;
            return (
              <StaggerItem
                key={factor.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-diva-gold-50 text-diva-gold-600 flex items-center justify-center">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{factor.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {factor.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-diva-gold-200 bg-diva-gold-50 p-6 md:p-8">
            <p className="text-slate-700 leading-relaxed max-w-2xl">
              <strong className="text-slate-900">Why no price list?</strong>{' '}
              Vacation-rental turnovers{' '}
              <Link
                href="/services/vacation-rental-turnover"
                className="font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2"
              >
                start at $100
              </Link>{' '}
              because their scope is fixed and repeatable. A lived-in home varies
              far more, so a quote built on your details is more honest than a
              range.
            </p>
            <Link
              href="/#contact"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white hover:shadow-glow-pink transition-all"
            >
              Request a custom quote
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhoItsFor({ items }) {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image
                src="/images/diningRoom_divas.jpg"
                alt="Dining room with a spotless glass table, woven chairs, and white plantation shutters"
                fill
                sizes="(min-width: 1536px) 720px, (min-width: 1280px) 592px, (min-width: 1024px) 464px, (min-width: 768px) 720px, (min-width: 640px) 592px, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-cyan-600">
                Who it&apos;s for
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Residents, second-home owners, and snowbirds
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                Residential service fits anyone who owns a home in Volusia County,
                and the schedule is shaped around how often you are actually in
                it.
              </p>
            </Reveal>
            <StaggerGroup stagger={0.08} className="mt-8 space-y-6">
              {items.map((item) => (
                <StaggerItem key={item.title}>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ResidentialHouseCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServiceHero
        eyebrow="Hospitality-grade home cleaning"
        title="Residential House Cleaning"
        subtitle="Recurring and one-time cleaning for Volusia County homes, finished to the standard we hold for five-star vacation rentals. Weekly, bi-weekly, monthly, or just once."
        image="/images/master2_divas.jpg"
        imageAlt="Oceanfront bedroom with a freshly made king bed and a clear view of the beach"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <ProcessSteps
        eyebrow="From first call to routine"
        title="Four steps to a home that stays clean"
        subtitle="Recurring cleaning works when the first visit sets a baseline and every visit after protects it. Here is how we set that up."
        steps={steps}
      />
      <IncludedChecklist
        eyebrow="Every visit"
        title="What a residential clean covers"
        subtitle="Each visit covers kitchen, bathrooms, bedrooms, and living areas, finished with a hotel housekeeper's eye rather than a quick once-over."
        categories={categories}
      />
      <PricingFactors factors={pricingFactors} />
      <WhoItsFor items={audiences} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What homeowners ask before booking"
        items={faqs}
      />
      <CrossSell title="Pair it with" items={crossSell} />
      <CTABand
        title="Come home to a hotel-clean house"
        subtitle="Tell us about your home and how often you want us there. Your custom quote arrives within 24 hours."
      />
    </>
  );
}
