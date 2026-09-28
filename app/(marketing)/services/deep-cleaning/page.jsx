import Link from 'next/link';
import {
  ArrowDownToLine,
  Refrigerator,
  Star,
  ClipboardList,
  Fan,
  Camera,
  CookingPot,
  ShowerHead,
  Blinds,
  Sun,
  Hammer,
  Hourglass,
  Ruler,
  DoorOpen,
  Leaf,
  Home,
  ArrowRight,
  Tag,
} from 'lucide-react';
import ServiceHero from '../../../components/service/ServiceHero';
import AtAGlance from '../../../components/service/AtAGlance';
import ProcessSteps from '../../../components/service/ProcessSteps';
import IncludedChecklist from '../../../components/service/IncludedChecklist';
import BeforeAfter from '../../../components/service/BeforeAfter';
import ServiceFAQ from '../../../components/service/ServiceFAQ';
import CrossSell from '../../../components/service/CrossSell';
import CTABand from '../../../components/service/CTABand';
import Reveal, { StaggerGroup, StaggerItem } from '../../../components/motion/Reveal';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
const PATH = '/services/deep-cleaning';

export const metadata = {
  title: 'Deep Cleaning for Homes & Vacation Rentals',
  description:
    'Top-to-bottom deep cleaning in Volusia County: baseboards, ceiling fans, grout, cabinet and appliance interiors. From $200, quoted within 24 hours.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Deep Cleaning for Homes & Vacation Rentals',
    description:
      'Season openings, post-renovation dust, long-stay wear, listing photos. A top-to-bottom reset for Volusia County properties.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: PATH },
  { name: 'Deep Cleaning' },
];

const stats = [
  { icon: ArrowDownToLine, value: 'Top-down', label: 'Fans and fixtures first, floors last' },
  { icon: Refrigerator, value: 'Inside', label: 'Cabinets, oven, and fridge' },
  { icon: Tag, value: '$200', label: 'Minimum, 2× a standard clean' },
  { icon: Star, value: '98%', label: 'Guest satisfaction reported by hosts' },
];

const comparison = [
  {
    label: 'Goal',
    turnover: 'Ready for the next guest',
    deep: 'Remove built-up grime everywhere',
  },
  {
    label: 'Reaches',
    turnover: 'Surfaces guests see and touch',
    deep: 'Inside, under, above, and behind',
  },
  {
    label: 'Time on site',
    turnover: '2-4 hours on average',
    deep: 'Longer; estimated in your quote',
  },
  {
    label: 'How often',
    turnover: 'Every checkout',
    deep: 'Seasonally, or after a trigger',
  },
  {
    label: 'Pricing',
    turnover: 'From $100, by bedroom count',
    deep: '2× a standard clean, $200 minimum',
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: 'Scope the job',
    description:
      'Tell us what prompted it and send a few photos if you can. The quote, with a time estimate, comes back within 24 hours.',
  },
  {
    icon: Fan,
    title: 'High work first',
    description:
      'Ceiling fans, light fixtures, vents, and cabinet tops are cleared before anything beneath them.',
  },
  {
    icon: Refrigerator,
    title: 'Inside everything',
    description:
      'Cabinet and drawer interiors wiped, oven and fridge degreased, grout scrubbed, window sills and slider tracks detailed.',
  },
  {
    icon: Camera,
    title: 'Walkthrough and report',
    description:
      'Floors go last. Anything that needs a repair rather than a cleaner, like cracked grout, is flagged with a photo.',
  },
];

const categories = [
  {
    icon: Fan,
    name: 'Overhead',
    items: [
      'Ceiling fan blades and housings',
      'Light fixtures and globes',
      'Air vents and return grilles',
      'Tops of cabinets, shelves, and frames',
      'Cobwebs cleared from corners',
    ],
  },
  {
    icon: CookingPot,
    name: 'Kitchen Interiors',
    items: [
      'Inside the oven, racks included',
      'Inside the fridge and freezer',
      'Dishwasher door, seals, and filter',
      'Cabinet and drawer interiors',
      'Range hood filter degreased',
    ],
  },
  {
    icon: ShowerHead,
    name: 'Bathrooms and Grout',
    items: [
      'Grout lines scrubbed',
      'Soap scum and hard-water scale removed',
      'Around and behind the toilet base',
      'Exhaust fan cover cleaned',
      'Vanity drawers wiped inside',
    ],
  },
  {
    icon: Blinds,
    name: 'Edges and Openings',
    items: [
      'Baseboards wiped room by room',
      'Window sills and slider tracks',
      'Blinds and shutters, slat by slat',
      'Doors, frames, and switch plates',
      'Under and behind movable furniture',
    ],
  },
];

const triggers = [
  {
    icon: Sun,
    title: 'Opening for the season',
    description:
      'Weeks shut up let dust settle everywhere and humidity mark the bathrooms. Start the season clean, not catching up.',
  },
  {
    icon: Hammer,
    title: 'After a renovation',
    description:
      'Drywall dust drifts into vents, fixtures, and cabinets and takes repeated passes to clear. Book it after the last trade leaves.',
  },
  {
    icon: Hourglass,
    title: 'After a long stay',
    description:
      'A monthly guest or snowbird season leaves oven residue, shower scale, and overhead dust that a turnover is not built to reverse.',
  },
  {
    icon: Camera,
    title: 'Before listing photos',
    description:
      'A camera catches what guests half notice: dusty fan blades, dull grout, smudged glass. Deep clean first, then shoot.',
  },
];

const pricingFactors = [
  {
    icon: Ruler,
    title: 'Size of the property',
    description:
      'Square footage plus bedroom and bathroom count set the baseline.',
  },
  {
    icon: Hourglass,
    title: 'Time since the last one',
    description:
      'A home deep-cleaned last spring takes less work than one that never has been. Renovation dust adds passes.',
  },
  {
    icon: Refrigerator,
    title: 'Appliances and cabinets',
    description:
      'The number of appliances, and whether cabinets are empty or full, changes the time inside them.',
  },
  {
    icon: DoorOpen,
    title: 'Furnished or empty',
    description:
      'A vacant home, like a move-out, cleans faster than one full of furniture to work around.',
  },
  {
    icon: Leaf,
    title: 'Product preference',
    description:
      'Non-toxic or fragrance-conscious products are available; mention them up front.',
  },
];

const faqs = [
  {
    question: 'How is a deep clean different from a turnover or regular clean?',
    answer:
      'A deep clean goes inside, under, and above: appliance and cabinet interiors, grout, baseboards, fans, and fixtures. Turnovers and routine visits keep visible surfaces fresh; a deep clean removes the buildup they leave behind.',
  },
  {
    question: 'When should a vacation rental get a deep clean?',
    answer:
      'At minimum, before the season opens. Also book one after a renovation, after a long-term or snowbird stay, and before new listing photos.',
  },
  {
    question: 'How long does a deep clean take?',
    answer:
      'Longer than a turnover; how much longer depends on size and condition. Your quote includes a time estimate so you can block the calendar.',
  },
  {
    question: 'Are the inside of the oven and fridge included?',
    answer:
      'Yes. Appliance interiors are part of every deep clean; on a standard clean they are optional add-ons.',
  },
  {
    question: 'Can I get a deep clean with eco-friendly products?',
    answer:
      'Yes. Non-toxic, fragrance-conscious products are available on every service; just mention it when you request the quote.',
  },
];

const crossSell = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Keep the reset going between guests with photo-verified turnovers that average 2-4 hours.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Home,
    title: 'Residential House Cleaning',
    description:
      'Live in the home? A weekly, bi-weekly, or monthly routine holds the standard a deep clean sets.',
    href: '/services/residential-house-cleaning',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Cleaning',
    description:
      'Ask for non-toxic, low-fragrance products on your deep clean or any other visit.',
    href: '/services/eco-friendly-cleaning',
  },
];

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
  name: 'Deep Cleaning Service',
  serviceType: 'Deep Cleaning',
  description:
    'Top-to-bottom deep clean for homes and rental properties, including baseboards, appliances, and detailed sanitization.',
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
    name: 'Deep Cleaning Occasions',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Season-opening deep clean',
        description: 'Full reset before the first booking of the season.',
      },
      {
        '@type': 'Offer',
        name: 'Post-renovation deep clean',
        description:
          'Multi-pass dust removal from vents, fixtures, sills, and cabinet interiors.',
      },
      {
        '@type': 'Offer',
        name: 'Post-long-stay deep clean',
        description:
          'Oven, shower scale, and overhead dust after a monthly or snowbird stay.',
      },
      {
        '@type': 'Offer',
        name: 'Pre-listing-photo deep clean',
        description: 'Camera-ready detail before new listing photography.',
      },
    ],
  },
  url: `${SITE_URL}${PATH}`,
};

function TurnoverComparison({ rows }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <span className="text-sm font-semibold tracking-wider uppercase text-diva-pink-600">
              Deep clean vs. turnover
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              How a deep clean differs from a turnover
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              A turnover resets a rental for the next guest inside a tight window;
              a deep clean resets the property itself.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="max-w-4xl overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm md:text-base">
              <caption className="sr-only">
                Comparison of a vacation rental turnover and a deep clean
              </caption>
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-4 font-semibold">
                    <span className="sr-only">Attribute</span>
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 font-semibold">
                    Turnover
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-4 font-semibold text-diva-pink-600">
                    Deep clean
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="px-4 md:px-6 py-4 font-semibold text-slate-900 align-top">
                      {row.label}
                    </th>
                    <td className="px-4 md:px-6 py-4 text-slate-600 align-top">
                      {row.turnover}
                    </td>
                    <td className="px-4 md:px-6 py-4 text-slate-700 align-top">
                      {row.deep}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-slate-600 leading-relaxed">
            Rentals run best with both, since a periodic deep clean keeps every
            turnover fast.{' '}
            <Link
              href="/services/vacation-rental-turnover"
              className="font-semibold text-diva-pink-600 hover:text-diva-pink-700 underline underline-offset-2"
            >
              See what a turnover includes
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function WhenToBook({ items }) {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <span className="text-sm font-semibold tracking-wider uppercase text-diva-pink-600">
              When to book
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Four moments a rental needs one
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Book a deep clean when the property has sat empty, been worked on,
              been lived in hard, or is about to be photographed.
            </p>
          </Reveal>
        </div>

        <StaggerGroup
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-diva-cyan-50 text-diva-cyan-600 flex items-center justify-center">
                  <Icon size={22} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
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
              Twice a standard clean, $200 minimum
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              A deep clean is priced per job at twice the standard clean for your
              home, with a $200 minimum. The factors below set the standard clean,
              and your quote arrives within 24 hours.
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
              <strong className="text-slate-900">For reference:</strong>{' '}
              turnovers start at $100, so deep cleans start at $200. A deep clean
              is always twice the standard clean for the same home.
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

export default function DeepCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServiceHero
        eyebrow="Top-to-bottom detail"
        title="Deep Cleaning Service"
        subtitle="The clean that reaches what turnovers and weekly visits skip: ceiling fans, baseboards, grout, and the inside of every cabinet and appliance."
        image="/images/kitchen_divas.jpg"
        imageAlt="Bright kitchen with a white range, dishwasher, and wiped-down cabinets in a Volusia County rental"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <TurnoverComparison rows={comparison} />
      <WhenToBook items={triggers} />
      <ProcessSteps
        eyebrow="Our method"
        title="Top to bottom, inside to out"
        subtitle="Deep cleaning follows gravity: we start at the ceiling so dust falls onto surfaces not yet cleaned, and finish at the floor."
        steps={steps}
      />
      <IncludedChecklist
        eyebrow="The deep-clean checklist"
        title="The detail work a regular clean skips"
        subtitle="On top of a standard clean, every deep clean adds the work below, room by room."
        categories={categories}
      />
      <PricingFactors factors={pricingFactors} />
      <BeforeAfter
        beforeSrc="/images/dirtySink_divas.jpg"
        afterSrc="/images/cleanSink_divas.jpg"
        beforeAlt="Kitchen sink with residue and stains before cleaning"
        afterAlt="The same kitchen sink scrubbed clean and shining"
        caption="A real sink from a Volusia County rental, before and after our crew. Drag the slider to compare."
      />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What owners ask about deep cleaning"
        items={faqs}
      />
      <CrossSell title="After the deep clean" items={crossSell} />
      <CTABand
        title="Ready to reset the whole property?"
        subtitle="New season, renovation, long stay, or photo shoot: tell us what changed and your custom quote arrives within 24 hours."
      />
    </>
  );
}
