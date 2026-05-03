import ServiceHero from '../../components/service/ServiceHero';
import FAQAccordion from '../../components/faq/FAQAccordion';
import CTABand from '../../components/service/CTABand';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
const PATH = '/faq';

export const metadata = {
  title: 'Frequently Asked Questions | Dazzle Divas Cleaning',
  description:
    'Answers to the most common questions about vacation rental cleaning in Volusia County: booking, service scope, pricing, response times, race-week capacity, and more.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'FAQ — Dazzle Divas Cleaning',
    description:
      'Vacation rental cleaning FAQ for Volusia County hosts and property managers.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'FAQ' },
];

const categories = ['Booking', 'Service', 'Pricing', 'Local', 'Hours & Contact'];

const items = [
  {
    category: 'Booking',
    question: 'How do I get a quote?',
    answer:
      'Use the contact form on the home page or call (386) 301-5775. Most quotes are returned within 2 hours during business hours and the same business day for evening requests. We need property address, bedroom count, and a rough idea of your booking calendar to spec accurately.',
  },
  {
    category: 'Booking',
    question: 'How far in advance should I book?',
    answer:
      'For standard turnovers we recommend booking 3–5 days ahead. Race weeks (Speedweeks, Bike Week, Biketoberfest, Daytona 500) and major holidays should be reserved 2–4 weeks in advance to lock capacity. Same-day and emergency bookings are accepted whenever capacity allows.',
  },
  {
    category: 'Booking',
    question: 'Do you require a contract or long-term commitment?',
    answer:
      "No. Standard per-turnover service has no commitment — pay per clean, schedule when you need us. Property Management plans (Starter/Pro/Enterprise) are month-to-month with no annual commitment, so you can scale up or down as your portfolio changes.",
  },
  {
    category: 'Booking',
    question: 'Can I book a recurring schedule?',
    answer:
      'Yes — most of our clients are on recurring schedules. We sync with your booking calendar (Airbnb, VRBO, Hospitable, Guesty, Vacasa) and auto-schedule turnovers around guest stays, or set fixed cadence cleans (weekly, bi-weekly) for owner-occupied properties.',
  },
  {
    category: 'Booking',
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit/debit cards, ACH bank transfers, Zelle, and check. Property Management clients are invoiced monthly with net-15 terms. Standard turnovers are paid on completion or via stored payment method on file.',
  },
  {
    category: 'Service',
    question: "What's included in a standard turnover?",
    answer:
      'A full clean of every room (bedrooms, bathrooms, kitchen, living, outdoor), linen change and laundry, restock of guest essentials (toilet paper, hand soap, paper towels, coffee), trash and recycling removal, and a 30-point photo verification sent to your phone before we leave.',
  },
  {
    category: 'Service',
    question: 'Do you bring your own supplies?',
    answer:
      'We bring all cleaning products, equipment, and consumables. Linens and towels are typically owner-supplied (we handle laundry on-site or via our linen service when requested). Toiletries (shampoo, conditioner, hand soap) are owner-supplied; we restock from your supply closet to your standards.',
  },
  {
    category: 'Service',
    question: 'How long does a typical turnover take?',
    answer:
      'Most 1–2 bedroom turnovers take 2–3 hours. Larger properties (3+ BR) take 3–4 hours. Same-day check-out / check-in windows (typical 11am out / 4pm in) are our specialty — we plan crew sizing around your booking schedule.',
  },
  {
    category: 'Service',
    question: 'Do you handle linens and laundry?',
    answer:
      'Yes. Standard scope includes stripping beds, laundering linens and towels on-site (when machines are available), and remaking the property to staged standards. For larger properties or back-to-back bookings, our linen service can rotate fresh inventory between turnovers.',
  },
  {
    category: 'Service',
    question: 'What if something is missed during a turnover?',
    answer:
      "Every turnover ends with a 30-point photo checklist sent to your phone before we leave. If anything's missed, we return at no charge. Photo verification is your insurance policy against missed details — we'd rather catch it before a guest does.",
  },
  {
    category: 'Pricing',
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on property size (bedrooms and bathrooms), square footage, and condition. Our published ranges are: $100–140 for studios/1BR, $140–200 for 2BR, $200–280 for 3BR+. 4+ bedroom and luxury properties get a custom quote after a property review.',
  },
  {
    category: 'Pricing',
    question: 'Do you charge rush or weekend fees?',
    answer:
      "No rush or weekend fees on standard same-day requests. Saturdays, Sundays, and holidays (including Christmas, July 4th, race weeks) are priced the same as weekdays. The only exception is our 2-hour emergency dispatch tier, which adds a $25 priority dispatch fee when crews must be pulled from another scheduled job.",
  },
  {
    category: 'Pricing',
    question: 'Are there volume discounts for multi-property hosts?',
    answer:
      'Yes. Property Management Starter (3–5 properties) gets 10% off standard rates. Pro (6–15 properties) gets 15% off plus a dedicated manager. Enterprise (16+ properties) is custom-priced with reserved peak-season capacity. See our Property Management page for full details.',
  },
  {
    category: 'Pricing',
    question: "What's a typical price range for a Volusia County turnover?",
    answer:
      'For a typical 2BR vacation rental in Daytona Beach, Ormond Beach, or New Smyrna Beach, expect $140–200 per turnover including linens, laundry, restock, and photo verification. Same hospitality scope across all three cities.',
  },
  {
    category: 'Local',
    question: 'What areas of Volusia County do you serve?',
    answer:
      'We currently serve Ormond Beach (including Ormond-by-the-Sea), Daytona Beach (including Daytona Beach Shores and Wilbur-by-the-Sea), and New Smyrna Beach (including Bethune Beach and Coronado Island). Adjacent areas like Port Orange and Ponce Inlet are on our dispatch grid for clients with mixed-area portfolios.',
  },
  {
    category: 'Local',
    question: 'Do you serve oceanfront condos with HOA requirements?',
    answer:
      'Yes. We work with major Volusia HOAs including Ocean Shore Boulevard associations, Hammock Beach, Plantation Bay, and the Daytona Beach Shores condo corridor. We follow association-specific protocols (parking, key drops, after-hours noise) and document compliance per turnover.',
  },
  {
    category: 'Local',
    question: 'Can you handle race-week and Bike-Week traffic?',
    answer:
      "Yes — race weeks are our peak season. We reserve crew capacity in advance for Speedweeks, Bike Week, Biketoberfest, and Daytona 500 weeks. Property Management Pro and Enterprise clients get reserved peak-week capacity automatically; standalone hosts who book through the year get priority.",
  },
  {
    category: 'Local',
    question: 'Are you available on holidays?',
    answer:
      'Yes. Major holidays (Christmas, New Year, July 4th, Thanksgiving) are our busiest dispatch windows. We recommend booking ahead, but walk-in emergencies are accommodated whenever capacity allows. No holiday surcharge.',
  },
  {
    category: 'Hours & Contact',
    question: 'What are your business hours?',
    answer:
      'Monday through Sunday, 8am–6pm for scheduled turnovers and quotes. Emergency dispatch is 24/7 — call (386) 301-5775 anytime, including overnight and holidays. We answer the line around the clock and confirm scope within 30 minutes.',
  },
  {
    category: 'Hours & Contact',
    question: 'How do I reach you outside business hours?',
    answer:
      'Call (386) 301-5775. We answer 24/7 — including overnight, weekends, and holidays. Calls outside business hours route to our on-call dispatcher and we confirm scope within 30 minutes.',
  },
];

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'FAQ' },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ServiceHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        subtitle="Everything Volusia County hosts ask about vacation rental cleaning — booking, scope, pricing, local quirks, and 24/7 dispatch. Search or filter by category below."
        image="/images/cleanSink_divas.jpg"
        imageAlt="Clean kitchen sink in a vacation rental"
        breadcrumbs={breadcrumbs}
      />
      <FAQAccordion items={items} categories={categories} />
      <CTABand
        title="Still have a question?"
        subtitle="Call (386) 301-5775 — we answer 24/7. Or use the contact form on the home page for a free quote."
      />
    </>
  );
}
