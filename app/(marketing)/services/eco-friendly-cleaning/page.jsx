import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf,
  Wind,
  PawPrint,
  Clock,
  MessageSquare,
  HeartHandshake,
  SprayCan,
  Camera,
  Home,
  Sparkles,
  Truck,
  Layers,
  Ruler,
  Droplets,
  Repeat,
  Check,
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
const PATH = '/services/eco-friendly-cleaning';

export const metadata = {
  title: 'Eco-Friendly, Non-Toxic Cleaning Service',
  description:
    'Non-toxic, fragrance-conscious cleaning on request for vacation rentals and homes in Volusia County. Chosen with kids and pets in mind. Quote in 24 hours.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Eco-Friendly, Non-Toxic Cleaning Service',
    description:
      'Green products on any service we offer, from turnovers to deep cleans. Same checklist, same finish, gentler chemistry.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: PATH },
  { name: 'Eco-Friendly Cleaning' },
];

const stats = [
  { icon: Leaf, value: 'Opt-in', label: 'Green kit on any service' },
  { icon: Wind, value: 'Low-scent', label: 'Fragrance-conscious options' },
  { icon: PawPrint, value: 'Pet-aware', label: 'Picked with kids and pets in mind' },
  { icon: Clock, value: '24 hr', label: 'Custom quote turnaround' },
];

const steps = [
  {
    icon: MessageSquare,
    title: 'Ask when you book',
    description:
      'Mention it on the quote form or by phone, for one visit or as your default.',
  },
  {
    icon: HeartHandshake,
    title: 'Tell us who it is for',
    description:
      'Allergies, fragrance sensitivity, a crawling baby, a dog that naps on the tile: the details shape which products we reach for.',
  },
  {
    icon: SprayCan,
    title: 'We bring the green kit',
    description:
      'The crew arrives with our eco-friendly cleaning kit, so there is nothing for you to buy or store.',
  },
  {
    icon: Camera,
    title: 'Same scope, same proof',
    description:
      'Nothing drops off the checklist. Turnovers still end with photo verification sent to your phone before the crew leaves.',
  },
];

const categories = [
  {
    icon: Camera,
    name: 'Rental Turnovers',
    items: [
      'Gentler products between stays',
      'Fragrance-conscious for sensitive guests',
      'Suited to pet-friendly listings',
      'Linens and restock as usual',
      '30-point photo verification kept',
    ],
  },
  {
    icon: Home,
    name: 'Residential Visits',
    items: [
      'Weekly, bi-weekly, or monthly',
      'Counters where food is prepped',
      'Floors where kids crawl and pets nap',
      'Low-odor bathroom cleaning',
      'Nursery and playroom surfaces',
    ],
  },
  {
    icon: Sparkles,
    name: 'Deep Cleans',
    items: [
      'Grout and scale, given more dwell time',
      'Appliance interiors near food',
      'Baseboards, fans, and fixtures',
      'Cabinet interiors and shelves',
      'Post-renovation dust removal',
    ],
  },
  {
    icon: Truck,
    name: 'One-Time Jobs',
    items: [
      'Move-in and move-out cleans',
      'Owner-arrival cleans',
      'Pre-listing cleans',
      'Same-day and emergency requests',
      'New-baby or new-pet homecomings',
    ],
  },
];

const changes = [
  'The chemistry: non-toxic formulas take the place of harsher conventional cleaners.',
  'The scent: fragrance-conscious products, so a room smells clean rather than perfumed.',
  'The residue: fewer harsh chemicals left on surfaces that small hands, paws, and bare feet touch.',
  'Sometimes the time: heavy soap scum or hard-water scale may need longer contact and more scrubbing.',
];

const staysSame = [
  'The checklist: every item in your turnover, residential, or deep-clean scope still gets done.',
  'The finish: streak-free glass, clear grout lines, beds made with care.',
  'The proof: turnovers still close out with 30-point photo verification.',
  'The guarantee: report an issue within 24 hours and we come back at no charge.',
];

const pricingFactors = [
  {
    icon: Layers,
    title: 'Which service you book',
    description:
      'Turnovers start at $100 by bedroom count; residential and deep cleans are quoted individually.',
  },
  {
    icon: Ruler,
    title: 'Size of the property',
    description:
      'Square footage and the number of bedrooms and bathrooms drive the time on site.',
  },
  {
    icon: Droplets,
    title: 'Condition and buildup',
    description:
      'Heavy scale or grease can need extra dwell time when the products are gentler.',
  },
  {
    icon: Repeat,
    title: 'How often we come',
    description:
      'Recurring visits stay lighter than one-time resets, with or without the green kit.',
  },
  {
    icon: Leaf,
    title: 'Product preference',
    description:
      'If a specific brand or product line you request changes the cost, your quote says so plainly.',
  },
];

const faqs = [
  {
    question: 'Can I get eco-friendly cleaning on any service?',
    answer:
      'Yes. Turnovers, residential visits, deep cleans, move-outs, and emergency jobs can all be booked with our eco-friendly kit. Ask when you request a quote, or tell us once and we make it the default for your property.',
  },
  {
    question: 'Does green cleaning work as well as regular cleaning?',
    answer:
      'For everyday dirt and grease, yes: the checklist and finish do not change. The honest exception is heavy buildup such as hard-water scale, which can take more contact time with gentler products.',
  },
  {
    question: 'Are the products safe around kids and pets?',
    answer:
      'They are chosen with kids and pets in mind. Our terms still ask that pets be secured while we work, mainly because doors are opening and closing, and little ones should stay off freshly mopped floors until they dry.',
  },
  {
    question: 'Can you use fragrance-conscious products for guests with allergies?',
    answer:
      'Yes, on request. Hosts with allergy-aware or pet-friendly listings can mention it in the listing so guests know before they book.',
  },
  {
    question: 'Does eco-friendly cleaning cost more?',
    answer:
      'It depends on the service, the property, and the products you want. Your quote, returned within 24 hours, shows whether your product choice changes the price.',
  },
  {
    question: 'Do I need to supply the products?',
    answer:
      'No. The crew brings our green cleaning kit. If you already use a brand you trust, tell us, and if we can work with it we note it for every visit.',
  },
];

const crossSell = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Between-guest cleans with photo verification. Ask for the green kit on every checkout.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Home,
    title: 'Residential House Cleaning',
    description:
      'Recurring or one-time cleans for the home you live in, with non-toxic products as your default.',
    href: '/services/residential-house-cleaning',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'Fans, grout, baseboards, and appliance interiors, cleaned top to bottom with gentler products.',
    href: '/services/deep-cleaning',
  },
];

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
  name: 'Eco-Friendly Cleaning',
  serviceType: 'Eco-Friendly Cleaning',
  description:
    'Green cleaning using eco-friendly, non-toxic products safe for guests, families, and pets.',
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
    name: 'Eco-Friendly Cleaning Options',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Eco-friendly vacation rental turnover',
        description:
          'Standard turnover scope and photo verification with non-toxic products.',
      },
      {
        '@type': 'Offer',
        name: 'Eco-friendly residential cleaning',
        description:
          'Recurring or one-time home cleaning with fragrance-conscious products.',
      },
      {
        '@type': 'Offer',
        name: 'Eco-friendly deep cleaning',
        description:
          'Top-to-bottom deep clean using gentler, non-toxic products.',
      },
    ],
  },
  url: `${SITE_URL}${PATH}`,
};

function GreenTradeoffs({ changeItems, sameItems }) {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-cyan-600">
                Straight answers
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                What going green changes, and what it does not
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                The products change; the standard does not. Here is exactly where
                you will notice a difference.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Reveal delay={0.1}>
                <h3 className="text-lg font-bold text-slate-900">What changes</h3>
                <ul className="mt-3 space-y-3">
                  {changeItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                      <Leaf size={16} className="mt-0.5 text-diva-cyan-600 flex-shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <h3 className="text-lg font-bold text-slate-900">What stays the same</h3>
                <ul className="mt-3 space-y-3">
                  {sameItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                      <Check size={16} className="mt-0.5 text-diva-pink-500 flex-shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.25}>
              <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900">One honest caveat:</strong>{' '}
                cleaning and disinfecting are different jobs. If a surface truly
                needs disinfecting, for example after a guest was sick, we will
                tell you and agree on the product with you first.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <Image
                src="/images/bath2_divas.jpg"
                alt="Tiled walk-in shower and wood vanity with a round mirror, cleaned and staged for guests"
                fill
                sizes="(min-width: 1536px) 720px, (min-width: 1280px) 592px, (min-width: 1024px) 464px, (min-width: 768px) 720px, (min-width: 640px) 592px, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

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
              Priced with your service, quoted in 24 hours
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Eco-friendly is a product choice layered onto the service you pick,
              so it is priced inside that quote, returned within 24 hours.
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
              <strong className="text-slate-900">Nothing buried in the price.</strong>{' '}
              If your product choice changes the price, the quote tells you, and
              the published{' '}
              <Link
                href="/services/vacation-rental-turnover"
                className="font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2"
              >
                turnover rates
              </Link>{' '}
              stay the starting point for rentals.
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

export default function EcoFriendlyCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServiceHero
        eyebrow="Green cleaning on request"
        title="Eco-Friendly Cleaning"
        subtitle="Non-toxic, fragrance-conscious products on any service we offer, from a same-day turnover to a deep clean. Chosen with guests, kids, and pets in mind."
        image="/images/twinBed_divas.jpg"
        imageAlt="Bright bedroom with two made twin beds in seashell quilts and a ceiling fan"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <ProcessSteps
        eyebrow="Booking it"
        title="Going green takes one sentence"
        subtitle="Ask for eco-friendly products when you request a quote, and we switch kits for that visit or for every visit after."
        steps={steps}
      />
      <IncludedChecklist
        eyebrow="Available on every service"
        title="Book any service the green way"
        subtitle="Eco-friendly products are an option on everything we do, not a separate, stripped-down clean."
        categories={categories}
      />
      <PricingFactors factors={pricingFactors} />
      <GreenTradeoffs changeItems={changes} sameItems={staysSame} />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What families and hosts ask about green cleaning"
        items={faqs}
      />
      <CrossSell title="Book any of these the green way" items={crossSell} />
      <CTABand
        title="Want a greener clean?"
        subtitle="Mention eco-friendly products when you ask for a quote. We will price it within 24 hours."
      />
    </>
  );
}
