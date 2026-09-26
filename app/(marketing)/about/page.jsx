import Link from 'next/link';
import {
  CalendarCheck,
  Building,
  Camera,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  CalendarClock,
  Sparkles,
  PhoneCall,
  Tag,
  Leaf,
} from 'lucide-react';
import ServiceHero from '../../components/service/ServiceHero';
import AtAGlance from '../../components/service/AtAGlance';
import ProcessSteps from '../../components/service/ProcessSteps';
import CTABand from '../../components/service/CTABand';
import LocalContext from '../../components/city/LocalContext';
import InfoGrid from '../../components/pricing/InfoGrid';
import PhotoStrip from '../../components/about/PhotoStrip';
import WhereWeWork from '../../components/about/WhereWeWork';
import ReviewQuotes from '../../components/about/ReviewQuotes';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
// These must match the @id values declared in app/layout.js, which hardcodes
// the production origin. Do not derive them from NEXT_PUBLIC_SITE_URL.
const BUSINESS_ID = 'https://www.dazzledivascleaning.com/#business';
const WEBSITE_ID = 'https://www.dazzledivascleaning.com/#website';
const PATH = '/about';
const GOOGLE_PROFILE_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJI7fTrsScs64RTY0NoDuFenI';

const DESCRIPTION =
  'Locally owned in Volusia County since 2018. Licensed, insured vacation rental specialists cleaning 550+ properties a year with photo-verified turnovers.';

export const metadata = {
  title: 'About Us: Vacation Rental Specialists',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: 'About Dazzle Divas Cleaning',
    description:
      'Locally owned vacation rental specialists in Volusia County, FL since 2018. Licensed, insured, and photo-verified on every turnover.',
    url: `${SITE_URL}${PATH}`,
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: PATH },
];

const stats = [
  { icon: CalendarCheck, value: '2018', label: 'Founded in Volusia County' },
  { icon: Building, value: '550+', label: 'Properties cleaned a year' },
  { icon: Camera, value: '30-pt', label: 'Photo verification' },
  { icon: Clock, value: '2–4 hr', label: 'Average turnover' },
];

const linkClass =
  'font-semibold text-diva-pink-600 underline decoration-diva-pink-300 underline-offset-4 hover:text-diva-pink-700';

const storyBody = [
  <>
    Dazzle Divas Cleaning LLC was founded in Volusia County in 2018. The owners describe the
    business plainly: we are not housekeepers, we are vacation rental specialists who focus on
    getting your property five-star reviews.
  </>,
  <>
    That focus changes how we clean. A turnover has a hard deadline between checkout and
    check-in, and the next guest notices everything. So every clean follows the same
    hospitality checklist, restocks your guest essentials, and ends with photo proof sent to
    your phone before we leave.
  </>,
  <>
    We are locally owned and operated, so the people who run the company are the people you
    deal with. As one property manager put it in a Google review, &ldquo;you actually talk to
    the owners!&rdquo;
  </>,
];

const storyHighlights = [
  { icon: MapPin, label: 'Locally owned & operated', detail: 'Volusia County, Florida' },
  { icon: ShieldCheck, label: 'Licensed & insured', detail: 'Dazzle Divas Cleaning LLC' },
  { icon: Building, label: '550+ properties a year', detail: 'Three years running' },
  {
    icon: Star,
    label: 'Review-protection guarantee',
    detail: 'Free re-clean if a guest flags cleanliness',
  },
];

const photos = [
  {
    src: '/images/bath2_divas.jpg',
    alt: 'Bathroom staged for the next guest, with fresh towels, bath mats, and toiletries on the vanity',
  },
  {
    src: '/images/twinBed_divas.jpg',
    alt: 'Twin bedroom with both beds made in matching seashell quilts',
  },
  {
    src: '/images/bed_divas.jpg',
    alt: 'Guest bedroom with a freshly made bed and coastal decor',
  },
];

const howWeWork = [
  {
    icon: CalendarClock,
    title: 'Calendar sync',
    description:
      'We connect to your Airbnb, VRBO, Hospitable, Guesty, or Vacasa calendar, so turnovers schedule themselves around your bookings.',
  },
  {
    icon: Sparkles,
    title: 'Hospitality-grade clean',
    description:
      'Every room cleaned, beds stripped and remade, laundry done, and guest essentials restocked inside your booking window.',
  },
  {
    icon: Camera,
    title: '30-point photo check',
    description:
      'A photo checklist reaches your phone before we leave. If anything was missed, we return at no charge.',
  },
  {
    icon: PhoneCall,
    title: 'Straight to the owners',
    description:
      'Questions, schedule changes, and escalations go directly to the people who run the business, with no relays.',
  },
];

const standards = [
  {
    icon: ShieldCheck,
    title: 'Licensed and insured',
    body: 'Dazzle Divas Cleaning LLC is a licensed and insured Florida business.',
  },
  {
    icon: Camera,
    title: 'Photo proof on every turnover',
    body: 'A 30-point photo checklist is sent to your phone before we leave. If anything is missed, we return at no charge.',
  },
  {
    icon: Star,
    title: 'Review-protection guarantee',
    body: 'If a guest mentions cleanliness in a negative review, we re-clean for free and work with you to address their concerns.',
  },
  {
    icon: Clock,
    title: 'Guest-ready inside your window',
    body: 'Turnovers average 2–4 hours and are planned around your checkout and check-in times.',
  },
  {
    icon: Tag,
    title: 'Published prices',
    body: (
      <>
        Turnover rates are posted on our{' '}
        <Link href="/pricing" className={linkClass}>
          pricing page
        </Link>
        , and every custom quote comes back within 24 hours.
      </>
    ),
  },
  {
    icon: Leaf,
    title: 'Eco-friendly on request',
    body: 'Non-toxic, green cleaning products that are safe for guests, families, and pets are available on request.',
  },
];

const featuredCities = [
  {
    name: 'Ormond Beach',
    href: '/cleaning/ormond-beach',
    description:
      'Oceanfront condos on Ocean Shore Boulevard to mainland homes in Halifax Plantation.',
    cta: 'Ormond Beach cleaning',
  },
  {
    name: 'Daytona Beach',
    href: '/cleaning/daytona-beach',
    description:
      'Beachside condos to Pelican Bay, with crew capacity reserved for race weeks.',
    cta: 'Daytona Beach cleaning',
  },
  {
    name: 'New Smyrna Beach',
    href: '/cleaning/new-smyrna-beach',
    description:
      'Flagler Avenue and North Beach to Bethune Beach and Coronado Island.',
    cta: 'New Smyrna Beach cleaning',
  },
];

const otherCities = ['Daytona Beach Shores', 'Ormond-by-the-Sea', 'Port Orange', 'Ponce Inlet'];

// Verbatim Google reviews (owner-approved), trimmed only with an ellipsis.
const reviews = [
  {
    author: 'Darnell Hatcher',
    context: 'Property manager · 5-star Google review',
    rating: 5,
    quote:
      'From new construction to ultra luxury they have come through for me as a property manager. I highly recommend them and they are local boots on the ground and you actually talk to the owners!',
  },
  {
    author: 'Sue Ann Eidson',
    context: 'Repeat client, New Smyrna Beach · 5-star Google review',
    rating: 5,
    quote:
      'I have used the Dazzle Divas Cleaning service over the past three years while renting beach houses in New Smyrna Beach, Florida. I liked the fact that they were very professional and trustworthy. … They are wonderful people and will leave your rental in immaculate condition!',
  },
];

const aboutLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: 'About Dazzle Divas Cleaning',
  description: DESCRIPTION,
  inLanguage: 'en-US',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  mainEntity: { '@id': BUSINESS_ID },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/stairsOcean_divas.jpg`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* BreadcrumbList JSON-LD is emitted by Breadcrumbs inside ServiceHero. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <ServiceHero
        eyebrow="About us"
        title="Volusia County Vacation Rental Specialists Since 2018"
        subtitle="Dazzle Divas Cleaning LLC is a locally owned, licensed, and insured cleaning company that turns over vacation rentals for Airbnb and VRBO hosts and property managers. We clean 550+ properties a year."
        image="/images/stairsOcean_divas.jpg"
        imageAlt="Staircase in a beachfront vacation rental looking out over the deck and the ocean"
        breadcrumbs={breadcrumbs}
      />
      <AtAGlance items={stats} />
      <LocalContext
        eyebrow="Who we are"
        title="Vacation rental specialists, not housekeepers"
        body={storyBody}
        highlights={storyHighlights}
      />
      <PhotoStrip
        label="Photos from our jobs"
        photos={photos}
        caption="Photos from our own jobs: bathrooms, bedrooms, and linens staged for the next guest."
      />

      {/*
        ==========================================================================
        MEET THE TEAM: reserved slot, pending owner input. Do NOT ship placeholders.
        --------------------------------------------------------------------------
        Build this section only when the owner supplies, for each person:
          - real name and role (owner, operations lead, crew lead, ...)
          - a real photo (add to public/images; next/image with explicit width
            and height, sizes matching the rendered width)
          - one or two true sentences in their own words
        plus the founding story in the owner's words (why 2018, why vacation
        rentals). Until then this slot stays empty on purpose: no invented names,
        faces, or anecdotes, and no "coming soon" copy.

        When it is ready:
          - Render it here, between the photo strip and "How we work"
            (bg-white keeps the section rhythm).
          - Add the people to the JSON-LD by extending the `about` node above,
            e.g. about: { '@id': BUSINESS_ID, founder: [ Person objects ] },
            or add founder/employee to the LocalBusiness in app/layout.js if the
            lead wants it site-wide.
          - Update the metadata description if the founders are named.
        ==========================================================================
      */}

      <ProcessSteps
        eyebrow="How we work"
        title="Scheduled from your calendar, closed out with photos"
        subtitle="Every turnover runs the same four steps, whether you own one condo or manage a whole portfolio of rentals."
        steps={howWeWork}
      />
      <InfoGrid
        id="our-standards"
        eyebrow="Our standards"
        title="The standards every property gets"
        lead="Every rental we clean, from a studio condo to an oceanfront home, gets the same six standards."
        items={standards}
      />
      <WhereWeWork
        id="where-we-work"
        eyebrow="Where we work"
        title="Coastal Volusia County, from Ormond-by-the-Sea to New Smyrna Beach"
        lead="We clean vacation rentals across Volusia County, including these seven communities. Three have dedicated pages with neighborhood-level detail."
        featured={featuredCities}
        others={otherCities}
        othersLabel="Also serving"
      />
      <ReviewQuotes
        id="reviews"
        eyebrow="Google reviews"
        title="What hosts and property managers say"
        lead="Reviewers keep coming back to the same things: attention to detail, trust, and talking directly to the owners."
        reviews={reviews}
        primaryLink={{ href: '/reviews', label: 'Read all our reviews' }}
        secondaryLink={{ href: GOOGLE_PROFILE_URL, label: 'See our Google Business Profile' }}
      />
      <CTABand
        title="Talk to the owners about your rental"
        subtitle="Free quote within 24 hours, with no obligation. Tell us about the property and your booking calendar."
      />
    </>
  );
}
