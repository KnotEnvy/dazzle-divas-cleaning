import Link from 'next/link';
import { DollarSign, Building } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { DataTable } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'airbnb-cleaning-fee-florida';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Start from what one turnover really costs you: the cleaner’s price plus any laundry, supplies, and restock you pay for separately.',
  'In Volusia County a mandatory cleaning fee is taxed like rent. The county puts the total at 12.5% for stays of six months or less, and Airbnb’s service fee is calculated on the cleaning fee too.',
  'Guests see your cleaning fee up front. The FTC’s fees rule requires a mandatory cleaning fee to be included in the total price, so a large fee can’t hide.',
  'Fold cleaning into the nightly rate when most stays are long; keep a separate fee, with a lower short-stay fee on Airbnb, when you take many short bookings.',
];

const sections = [
  {
    id: 'start-with-cost',
    title: 'Start with what a turnover really costs you',
    content: (
      <>
        <p>
          Set your cleaning fee close to what one turnover actually costs you, meaning the
          cleaner&apos;s price plus any laundry, supplies, and restock you pay for separately, and
          adjust from there rather than copying a neighbor&apos;s listing.
        </p>
        <p>
          We don&apos;t publish &ldquo;average Florida cleaning fees&rdquo; because listings vary too
          much for an average to help you. The number that matters is your own cost per turnover.
          For reference, these are our published turnover prices in Volusia County:
        </p>
        <DataTable
          caption="Dazzle Divas turnover pricing by bedroom count"
          columns={['Property size', 'Turnover price', 'Included']}
          rows={[
            [
              'Studio or 1 bedroom',
              '$100–$140',
              'Laundry, restock of guest essentials, 30-point photo verification',
            ],
            ['2 bedrooms', '$140–$200', 'All of the above, plus the patio and outdoor area'],
            ['3 bedrooms and up', '$200–$280', 'All of the above, plus grill and outdoor checks'],
          ]}
        />
        <p>
          Square footage and condition set where a property lands in its range, and homes with four
          or more bedrooms or luxury finishes get a custom quote (see our{' '}
          <Link href="/pricing">pricing page</Link>). Add the consumables you buy yourself, like
          toilet paper, soap, and coffee, and you have your true cost per turnover.
        </p>
      </>
    ),
  },
  {
    id: 'fee-vs-cleaner-price',
    title: 'How the fee relates to your cleaner’s price',
    content: (
      <>
        <p>
          Your cleaning fee is what the guest pays you and your cleaner&apos;s price is what you pay
          for the turnover; the two only match if you decide they should.
        </p>
        <p>Hosts usually land on one of three approaches:</p>
        <ul>
          <li>
            <strong>Pass-through.</strong> The fee roughly equals the cleaner&apos;s price plus
            consumables. It is easy to explain, and you break even on cleaning.
          </li>
          <li>
            <strong>Partly in the rate.</strong> The fee covers part of the cost and the nightly
            rate covers the rest. The fee line looks smaller, but you only recover the full cost
            when the stay is long enough.
          </li>
          <li>
            <strong>Above cost.</strong> The fee is more than the turnover costs you. It pads each
            booking, but guests weigh the fee against the chores you leave them, and a fee that
            looks like profit tends to show up in reviews.
          </li>
        </ul>
        <p>
          For example, a two-bedroom turnover in our $140&ndash;200 range, plus a few dollars of
          consumables, points to a pass-through fee in that same neighborhood. If you run three or
          more rentals,{' '}
          <Link href="/services/property-management">property management volume pricing</Link> (10%
          off at three to five properties, 15% off at six to fifteen) lowers your cost per turnover,
          and your fee can follow it down.
        </p>
      </>
    ),
  },
  {
    id: 'taxes-and-platform-fees',
    title: 'Taxes and platform fees stack on top',
    content: (
      <>
        <p>
          In Volusia County the guest pays tax on your cleaning fee just as on the nightly rate, and
          Airbnb calculates its service fee on it too, so every dollar of cleaning fee costs the
          guest more than a dollar.
        </p>
        <p>
          Volusia County&apos;s tourist tax FAQ says every mandatory fee required for the stay is
          taxable, cleaning fees included. The county puts the total on stays of six months or less
          at 12.5%: a 6% county tourist development tax plus 6.5% remitted to the Florida
          Department of Revenue. On a $180 cleaning fee, that is $22.50 in tax before any platform
          fee.
        </p>
        <p>
          Airbnb collects the state and county taxes on Florida bookings made through it, calculated
          on the listing price including the cleaning fee. It also figures its service fee as a
          percentage of your nightly price plus any fees you add, such as cleaning. The county says
          VRBO collects Volusia&apos;s tourist development tax on its bookings as well. Direct
          bookings and other sites are on you to collect and remit; our{' '}
          <Link href={guidePath('volusia-county-short-term-rental-rules')}>
            guide to Volusia County short-term rental rules
          </Link>{' '}
          covers registration.
        </p>
      </>
    ),
  },
  {
    id: 'guest-psychology',
    title: 'How guests read a cleaning fee',
    content: (
      <>
        <p>
          Guests judge a cleaning fee against the length of their stay and the chores you ask of
          them, so a fee that feels fair on a week-long booking can feel punitive on a two-night
          one.
        </p>
        <p>
          Guests also see the fee up front. The Federal Trade Commission&apos;s rule on unfair or
          deceptive fees covers vacation rentals and the platforms that list them, and it requires a
          mandatory cleaning fee to be included in the total price shown. Your fee is part of the
          number guests compare, not a surprise at checkout.
        </p>
        <ul>
          <li>
            Keep checkout chores light. Guests notice when they pay a cleaning fee and still do the
            housework.
          </li>
          <li>
            Say what the fee covers in your listing: fresh linens, sanitized kitchen and baths,
            restocked supplies.
          </li>
          <li>Make the result visible. A crisp bed and a staged bathroom are what the fee buys.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'fold-or-separate',
    title: 'Fold it into the rate or charge it separately?',
    content: (
      <>
        <p>
          Fold the cleaning cost into your nightly rate when most stays are long, and keep a
          separate fee when you take many short stays, using Airbnb&apos;s lower short-stay
          cleaning fee to soften one- and two-night bookings.
        </p>
        <p>
          The math is about spreading one turnover across the nights it serves. A $180 turnover
          spread over a seven-night stay is about $26 a night. The same turnover on a two-night stay
          is $90 a night. If you fold cleaning into the rate, short stays under-recover unless you
          raise short-stay rates or set minimum stays.
        </p>
        <ul>
          <li>
            <strong>Fold it in</strong> if you mostly host week-long or monthly guests, like the
            long stays in our{' '}
            <Link href={guidePath('snowbird-season-cleaning-volusia')}>snowbird season guide</Link>.
            One turnover spread over many nights barely moves the rate.
          </li>
          <li>
            <strong>Keep it separate</strong> if you take frequent short stays or event weekends.
            Airbnb lets hosts set a lower short-stay cleaning fee for one- and two-night bookings
            while the standard fee applies to longer stays.
          </li>
          <li>
            <strong>Check special offers.</strong> Airbnb notes the cleaning fee isn&apos;t
            automatically included when you send a special offer, so confirm it before you send.
          </li>
        </ul>
        <p>
          Event weeks bring their own math, since minimum stays change how many turnovers you pay
          for. See{' '}
          <Link href={guidePath('daytona-race-week-bike-week-rental-prep')}>
            race week and Bike Week prep
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'recheck',
    title: 'Recheck the fee when your costs change',
    content: (
      <>
        <p>
          Revisit the fee whenever your cleaner&apos;s price, your supply costs, or your mix of
          stays changes, not just once when you set up the listing.
        </p>
        <ul>
          <li>You add a bedroom, a bunk room, or a sleeper sofa that needs linens</li>
          <li>You switch cleaners or add laundry to their scope</li>
          <li>Your calendar shifts toward short stays, or toward monthly guests in season</li>
          <li>Your guest count per stay climbs, especially around race weeks</li>
        </ul>
        <p>
          Want a real number to build from? Send us your bedrooms, bathrooms, and a rough booking
          pattern, and we&apos;ll send a turnover quote within 24 hours. Before you commit to any
          cleaner, read{' '}
          <Link href={guidePath('how-to-hire-vacation-rental-cleaner-volusia')}>
            what to ask before you hire
          </Link>
          .
        </p>
      </>
    ),
  },
];

const sources = [
  {
    title: 'Tourist Development Tax: Frequently Asked Questions',
    publisher: 'County of Volusia',
    href: 'https://www.volusia.org/services/financial-and-administrative-services/revenue-services/tourist-and-convention-development-tax/frequently-asked-questions.stml',
  },
  {
    title: 'Occupancy tax collection and remittance by Airbnb in Florida',
    publisher: 'Airbnb Help Center',
    href: 'https://www.airbnb.com/help/article/2301',
  },
  {
    title: 'How much does Airbnb charge hosts?',
    publisher: 'Airbnb Resource Center',
    href: 'https://www.airbnb.com/resources/hosting-homes/a/how-much-does-airbnb-charge-hosts-288',
  },
  {
    title: 'Add cleaning fees to home listings',
    publisher: 'Airbnb Help Center',
    href: 'https://www.airbnb.com/help/article/58',
  },
  {
    title: 'The Rule on Unfair or Deceptive Fees: Frequently Asked Questions',
    publisher: 'Federal Trade Commission',
    href: 'https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions',
  },
];

const faqs = [
  {
    question: 'Is the cleaning fee taxable in Volusia County?',
    answer:
      'Yes. Volusia County’s tourist tax FAQ says all mandatory fees required for the stay are taxable, including cleaning fees, and puts the total at 12.5% for stays of six months or less. Airbnb and VRBO collect the county’s tourist development tax on bookings made through them; for direct bookings, you collect and remit it.',
  },
  {
    question: 'Should my cleaning fee match what I pay my cleaner?',
    answer:
      'It is the simplest place to start. A pass-through fee, the cleaner’s price plus consumables, is easy to explain and breaks even on cleaning. Moving part of the cost into the nightly rate works best when most stays are long.',
  },
  {
    question: 'What does a turnover cost with Dazzle Divas?',
    answer:
      'Our published turnover pricing is $100–140 for a studio or one-bedroom, $140–200 for two bedrooms, and $200–280 for three bedrooms and up, with custom quotes for larger and luxury homes. Laundry, restock, and 30-point photo verification are included.',
  },
  {
    question: 'Can I charge a lower cleaning fee for short stays on Airbnb?',
    answer:
      'Yes. Airbnb lets hosts set a short-stay cleaning fee for one- and two-night bookings, while the standard cleaning fee applies to longer stays.',
  },
];

const services = [
  {
    icon: DollarSign,
    title: 'Pricing',
    description:
      'Published turnover prices by bedroom count, what moves a quote, and volume discounts for multi-property hosts.',
    href: '/pricing',
  },
  {
    icon: Building,
    title: 'Property Management Cleaning',
    description:
      '10% off at three to five properties, 15% off plus a dedicated manager at six to fifteen.',
    href: '/services/property-management',
  },
];

export default function CleaningFeeGuide() {
  return (
    <GuideLayout
      slug={SLUG}
      takeaways={takeaways}
      sections={sections}
      sources={sources}
      faqs={faqs}
      related={['vacation-rental-turnover-checklist', 'volusia-county-short-term-rental-rules']}
      services={services}
      cta={{
        title: 'Build your fee from a real number',
        subtitle:
          'Get an itemized turnover quote for your property. Free, no commitment, and back to you within 24 hours.',
      }}
    />
  );
}
