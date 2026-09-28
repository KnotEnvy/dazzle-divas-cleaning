import {
  Clock,
  Phone,
  DollarSign,
  Calendar,
  PhoneCall,
  MapPin,
  Zap,
  Camera,
  CalendarX,
  CloudRain,
  UserX,
  ClipboardCheck,
  Building,
  Sparkles,
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
const PATH = '/services/emergency-cleaning';

export const metadata = {
  title: 'Emergency & Same-Day Cleaning Service',
  description:
    '24/7 emergency cleaning in Volusia County. 2-hour response goal, no same-day surcharge, emergency fees quoted upfront. Surprise bookings and storm cleanup.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Emergency & Same-Day Cleaning',
    description:
      '24/7 emergency response for vacation rentals across Volusia County. 2-hour dispatch goal, emergency fees quoted upfront.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/emergency-cleaning' },
  { name: 'Emergency Cleaning' },
];

const stats = [
  { icon: Clock, value: '2 hr', label: 'Response goal' },
  { icon: Phone, value: '24/7', label: 'Phone line' },
  { icon: DollarSign, value: '$0', label: 'Same-day surcharge' },
  { icon: Calendar, value: '7 days', label: 'Weekend & holiday' },
];

const steps = [
  {
    icon: PhoneCall,
    title: 'Make the call',
    description:
      'Reach (386) 301-5775 any hour, any day. We answer 24/7 and confirm scope within 30 minutes.',
  },
  {
    icon: MapPin,
    title: 'Dispatch & ETA',
    description:
      'We size the crew to the property and pull from the closest team. You get a real ETA, not a window.',
  },
  {
    icon: Zap,
    title: 'Triage clean',
    description:
      'When time is tight, we work guest-critical first: bedrooms, bathrooms, kitchen — then living and outdoor.',
  },
  {
    icon: Camera,
    title: 'Photo handoff',
    description:
      'Same 30-point photo verification as a standard turnover, sent to your phone before guest arrival.',
  },
];

const categories = [
  {
    icon: CalendarX,
    name: 'Surprise Bookings',
    items: [
      'Last-minute reservation just landed',
      'Rapid full turnover within window',
      'Last-minute restock of essentials',
      'Photo verification before guest arrival',
      'Guest-critical areas prioritized first',
    ],
  },
  {
    icon: CloudRain,
    name: 'Storm & Disaster',
    items: [
      'Post-hurricane sanitization',
      'Water extraction coordination',
      'Debris &  glass clearing',
      'Mold-prevention surface treatment',
      'Insurance documentation photos',
    ],
  },
  {
    icon: UserX,
    name: 'Replacement Service',
    items: [
      'No-show cleaner takeover',
      'Mid-turnover handoff possible',
      'Finish within original booking window',
      'Full quality guarantee on takeover jobs',
      'Direct coordination, no relay',
    ],
  },
  {
    icon: ClipboardCheck,
    name: 'Inspection Prep',
    items: [
      'Pre-inspection deep clean',
      'Code-ready bathrooms & kitchen',
      'Photo-ready staging touches',
      'Same-day turnaround available',
      'Owner walkthrough on request',
    ],
  },
];

const tiers = [
  {
    name: 'Same-Day',
    tagline: 'Booked by noon, done before guest arrival',
    price: 'Standard',
    priceSuffix: 'turnover rates',
    priceNote: 'No same-day surcharge, any day of the week.',
    features: [
      'Booking confirmed within 30 min',
      'Crew dispatched same business day',
      'Full guest-ready turnover',
      '30-point photo verification',
      'No same-day surcharge',
    ],
  },
  {
    name: 'Within 4 Hours',
    tagline: 'Most-booked emergency tier',
    price: 'Standard',
    priceSuffix: 'rate + emergency fee',
    priceNote: 'Emergency fee depends on time of day and workload, quoted before dispatch.',
    featured: true,
    features: [
      '4-hour dispatch SLA',
      'Closest crew automatically pulled',
      'Real ETA, not a window',
      'Triage clean if time-pressed',
      '30-point photo verification',
    ],
  },
  {
    name: 'Within 2 Hours',
    tagline: 'True emergency dispatch',
    price: 'Standard',
    priceSuffix: 'rate + emergency fee',
    priceNote: 'Emergency fee depends on time of day and workload, quoted before dispatch.',
    features: [
      '2-hour response SLA',
      'Crew pulled from active route',
      'Direct dispatcher hotline',
      'Mid-turnover handoff supported',
      '30-point photo verification',
    ],
  },
];

const faqs = [
  {
    question: 'How fast can you respond to an emergency cleaning request?',
    answer:
      'We aim for 2-hour response during business hours and same-day for after-hours requests. We answer 7 days a week, including holidays, and Volusia County race weeks and major holidays are our busiest dispatch windows.',
  },
  {
    question: 'Is there an extra fee for emergency or same-day cleaning?',
    answer:
      'Same-day turnovers are billed at the standard turnover rate, with no same-day surcharge. True emergencies, such as a 2-hour or 4-hour response, may carry an emergency fee that depends on the time of day and our current workload. We always quote it before we dispatch, so there are no surprises on the invoice.',
  },
  {
    question: 'What counts as an emergency cleaning?',
    answer:
      'Anything urgent: surprise bookings, guest cancellations creating immediate turnovers, post-storm cleanup, sudden inspection prep, or your usual cleaner falling through. If your booking calendar just changed and you need a clean property fast, that qualifies.',
  },
  {
    question: 'Can you handle hurricane or storm cleanup?',
    answer:
      "Yes. We're Volusia County locals and respond to post-storm cleanup including water extraction coordination, debris removal, surface sanitization, and mold-prevention treatment. We've handled multiple hurricane recovery turnovers and can document with photos for insurance.",
  },
  {
    question: 'Are you available on holidays?',
    answer:
      'Yes. Major holidays — including Christmas, July 4th, and Daytona race week — are our busiest times. We recommend booking ahead, but walk-in emergencies are accommodated whenever capacity allows.',
  },
  {
    question: 'How do I reach you outside business hours?',
    answer:
      'Call (386) 301-5775. We answer 24/7 — including overnight, weekends, and holidays. Calls outside business hours route to our on-call dispatcher and we confirm scope within 30 minutes.',
  },
];

const crossSell = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Scheduled turnovers with the same hospitality-grade standard, photo verification, and 2-4 hour guest-ready guarantee.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Building,
    title: 'Property Management Service',
    description:
      'Multi-property hosts get a dedicated manager, calendar sync, monthly reporting, and reserved peak-season capacity.',
    href: '/services/property-management',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'A top-to-bottom reset once the emergency has passed: baseboards, ceiling fans, grout, and appliance interiors.',
    href: '/services/deep-cleaning',
  },
];

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency & Same-Day Cleaning',
  serviceType: 'Emergency Cleaning Service',
  description:
    '24/7 emergency cleaning response for vacation rentals across Volusia County. 2-hour dispatch goal; any emergency fee is quoted before dispatch.',
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
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  url: `${SITE_URL}${PATH}`,
};

export default function EmergencyCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <ServiceHero
        eyebrow="24/7 Response"
        title="Emergency & Same-Day Cleaning"
        subtitle="Last-minute booking? Cleaner fell through? Hurricane just rolled through? We answer the phone — including weekends, holidays, and 2 a.m."
        image="/images/livingroom_divas.jpg"
        imageAlt="Clean, staged living room ready for vacation rental guests"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <ProcessSteps
        eyebrow="How dispatch works"
        title="Phone to photo verification, fast"
        subtitle="Emergency response is a coordination problem, not a cleaning problem. We've built our dispatch flow around tight booking windows and unpredictable weeks."
        steps={steps}
      />
      <IncludedChecklist
        eyebrow="Common scenarios"
        title="What we handle, hour-of"
        subtitle="Emergency cleaning isn't one job — it's four very different ones. Here's how we approach each."
        categories={categories}
      />
      <PricingGrid
        eyebrow="Response-time tiers"
        title="Pick your response window"
        subtitle="Same-day turnovers are billed at our standard turnover rates with no same-day surcharge. Faster emergency windows may add an emergency fee based on time of day and our current workload, and we always quote it before we dispatch."
        tiers={tiers}
        footnote="Pricing reflects standard turnover rates by property size. See Vacation Rental Turnover pricing for detail; emergency tier adds the response-time guarantee."
      />
      <ServiceFAQ
        eyebrow="Common questions"
        title="What hosts ask before calling at 11pm"
        items={faqs}
      />
      <CrossSell title="Other services hosts use with us" items={crossSell} />
      <CTABand
        title="Need cleaning fast?"
        subtitle="Call (386) 301-5775 — we answer 24/7, even on holidays."
      />
    </>
  );
}
