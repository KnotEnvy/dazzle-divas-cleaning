import Link from 'next/link';
import { MapPin, ClipboardCheck } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { Callout, DataTable } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'volusia-county-short-term-rental-rules';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Most Volusia vacation rentals answer to three layers: a Florida DBPR vacation rental license, state and county tax accounts, and local zoning (the city’s, or the county’s outside city limits).',
  'Stays of six months or less carry 12.5% in tax: 6% to the county and 6.5% to the Florida Department of Revenue. Airbnb and VRBO collect the county tax on their bookings.',
  '“Short-term” varies by jurisdiction: under 30 days in unincorporated Volusia and New Smyrna Beach, under 28 consecutive days in Ponce Inlet, and a lease under six months in Ormond Beach.',
];

const intro = (
  <Callout title="Read this first">
    <p>
      This summarizes public sources and isn&apos;t legal advice. Zoning is decided parcel by parcel,
      so confirm your address with the city, or the county outside city limits, before you buy,
      list, or change how you rent. Sources are linked at the bottom.
    </p>
  </Callout>
);

const sections = [
  {
    id: 'three-layers',
    title: 'Three layers of rules apply to most rentals',
    content: (
      <>
        <p>
          A Volusia County vacation rental usually needs a state license, state and county tax
          accounts, and local zoning approval, and a problem at any layer can end a listing.
        </p>
        <ul>
          <li>
            <strong>State:</strong> a DBPR vacation rental license and a Florida Department of
            Revenue sales tax registration.
          </li>
          <li>
            <strong>County:</strong> a Volusia tourist development tax account and, outside city
            limits, county zoning.
          </li>
          <li>
            <strong>City:</strong> zoning, business tax receipts, and in some places a rental permit
            with inspections.
          </li>
          <li>
            <strong>Your association:</strong> condo and HOA documents can add their own rental
            minimums.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'dbpr-license',
    title: 'The Florida DBPR vacation rental license',
    content: (
      <>
        <p>
          You need a DBPR vacation rental license if you rent an entire unit more than three times
          in a calendar year for less than 30 days or one calendar month, whichever is less, or if
          you advertise it as regularly rented to guests.
        </p>
        <p>
          DBPR&apos;s Division of Hotels and Restaurants issues it in two classes: Vacation Rental
          &ndash; Condominium for condo and co-op units, and Vacation Rental &ndash; Dwelling for
          houses, townhouses, and buildings of four or fewer units. Online applications usually
          process in one to two business days. Beyond a $50 application fee and a $10 education fee,
          the license fee varies by district and unit count, so check DBPR&apos;s current schedule.
          Inspections cover fire safety items such as smoke alarms.
        </p>
      </>
    ),
  },
  {
    id: 'tax-registration',
    title: 'Sales tax and Volusia’s tourist development tax',
    content: (
      <>
        <p>
          Stays of six months or less in Volusia County carry 12.5% in tax: a 6% tourist
          development tax paid to the county and 6.5% in state sales tax and surtax paid to the
          Florida Department of Revenue.
        </p>
        <ul>
          <li>
            <strong>Register with the state first,</strong> then open a county account with the
            County of Volusia Treasury and Billing Division, which runs the tax (not the Tax
            Collector). Once registered with the state, you file returns even when you owe nothing.
          </li>
          <li>
            <strong>County returns</strong> are due by the 20th of the month after you collect, or
            quarterly if you collect less than $1,000 a year.
          </li>
          <li>
            <strong>Cleaning fees are taxable,</strong> like any mandatory fee. Our{' '}
            <Link href={guidePath('airbnb-cleaning-fee-florida')}>cleaning fee guide</Link> shows
            the effect on guest pricing.
          </li>
          <li>
            <strong>Platforms collect some of it.</strong> The county says Airbnb and VRBO collect
            its tax on their bookings and other platforms don&apos;t. Airbnb also collects state tax
            on Florida stays of 182 nights or less.
          </li>
        </ul>
        <p>
          The county doesn&apos;t say whether a host who books only through Airbnb or VRBO still
          needs an active account, and Airbnb says hosts stay responsible for other obligations, so
          ask Treasury and Billing and the Department of Revenue. Rent under a written lease of more
          than six months is exempt from the state tax.
        </p>
      </>
    ),
  },
  {
    id: 'state-preemption',
    title: 'What cities can and can’t regulate',
    content: (
      <>
        <p>
          Florida law bars local governments from banning vacation rentals or regulating how long or
          how often they are rented, unless the rule was adopted on or before June 1, 2011, so older
          local restrictions still apply.
        </p>
        <p>
          That grandfather clause, in section 509.032 of the Florida Statutes, explains
          Volusia&apos;s patchwork. Local governments can still require business tax receipts,
          registration, and inspections. And the thresholds differ: DBPR&apos;s license trigger is
          under 30 days or one calendar month, while zoning uses its own lines, so a stay can clear
          one rule and not another.
        </p>
      </>
    ),
  },
  {
    id: 'city-by-city',
    title: 'City-by-city rules',
    content: (
      <>
        <p>
          Each coastal city handles short stays differently, and the answer usually depends on your
          parcel&apos;s zoning district, so use this as a map for your questions, not as a permit.
        </p>
        <DataTable
          caption="Short-term rental rules by Volusia County jurisdiction"
          columns={['Jurisdiction', 'What counts as short-term', 'Where short stays are allowed']}
          rows={[
            [
              'Unincorporated Volusia',
              'Under 30 days',
              'Where hotels or motels are permitted; not single-family residential',
            ],
            [
              'Daytona Beach',
              'Under six months and a day is outside the residential rental program',
              'Set by zoning; ask the Business Tax Office',
            ],
            ['Daytona Beach Shores', 'No rental-specific rule found', 'Confirm with the city'],
            ['Ormond Beach', 'Lease under six months', 'B-4, B-6, and B-7 commercial districts'],
            [
              'New Smyrna Beach',
              'Under 30 days',
              'Listed districts, mostly beachside; 30+ days citywide with a BTR',
            ],
            ['Port Orange', 'No published rule found', 'Confirm with the city'],
            [
              'Ponce Inlet',
              'Under 28 consecutive days',
              'Named condo buildings only; no single-family homes',
            ],
          ]}
        />
        <h3>Unincorporated Volusia, including Ormond-by-the-Sea</h3>
        <p>
          County zoning allows rentals of less than 30 days only where hotels or motels are
          permitted, not in single-family residential zoning, and a court upheld that rule.
          Ormond-by-the-Sea is unincorporated, so{' '}
          <Link href="/cleaning/ormond-by-the-sea">rentals there</Link> follow it.
        </p>
        <h3>Daytona Beach</h3>
        <p>
          The city&apos;s rental program covers rentals of six months and a day or longer and sends
          owners who want shorter terms to the Business Tax Office, since zoning may restrict them.
          A Florida Attorney General opinion found the city couldn&apos;t use a proposed beachside
          zoning overlay to open more areas. Confirm your parcel before listing in{' '}
          <Link href="/cleaning/daytona-beach">Daytona Beach</Link>.
        </p>
        <h3>Daytona Beach Shores</h3>
        <p>
          The city requires a business tax receipt for any business located there. We found no
          rental-specific page, so ask the Business Tax Receipt Division what applies to your unit
          in <Link href="/cleaning/daytona-beach-shores">Daytona Beach Shores</Link>.
        </p>
        <h3>Ormond Beach</h3>
        <p>
          Transient lodging, meaning a lease of less than six months, isn&apos;t allowed in any
          residential district. It is permitted in the B-4, B-6, and B-7 commercial districts with a
          local business tax and site plan review. That matters for{' '}
          <Link href="/cleaning/ormond-beach">Ormond Beach</Link> snowbird rentals; see our{' '}
          <Link href={guidePath('snowbird-season-cleaning-volusia')}>snowbird season guide</Link>.
        </p>
        <h3>New Smyrna Beach</h3>
        <p>
          Stays under 30 days are allowed only in listed districts: R-3A east of Atlantic Avenue,
          R-4, R-5, R-6, B-4, M-U, and BBH east of the Intracoastal, plus R-2A south of Third
          Avenue, and M-U and BBH west of it. Stays of 30 days or more are allowed citywide with a
          business tax receipt, which requires an initial inspection.{' '}
          <Link href="/cleaning/new-smyrna-beach">More on New Smyrna Beach</Link>.
        </p>
        <h3>Port Orange</h3>
        <p>
          We found no published short-term rental rule on the city&apos;s website, and we won&apos;t
          repeat third-party summaries we couldn&apos;t verify. Ask the city&apos;s zoning staff
          about your parcel before listing in <Link href="/cleaning/port-orange">Port Orange</Link>.
        </p>
        <h3>Ponce Inlet</h3>
        <p>
          Any rental needs a town rental permit, renewed each year, with inspections. Short-term
          means under 28 consecutive days, single-family homes can&apos;t be rented short-term, and
          short stays are limited to condo buildings the town names on South Atlantic Avenue: South
          Point, Towers 1 through 6, Lighthouse Shores, Antigua, and Martinique.{' '}
          <Link href="/cleaning/ponce-inlet">Our Ponce Inlet service area</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'before-you-list',
    title: 'A checklist before you list or buy',
    content: (
      <>
        <p>
          Confirm zoning for your exact parcel first, then license and register, because the zoning
          answer decides whether the rest is worth doing.
        </p>
        <ol>
          <li>Ask the city, or the county outside city limits, in writing what your zoning allows.</li>
          <li>Read your condo or HOA documents for rental minimums.</li>
          <li>Get the DBPR license if your stays will trigger it.</li>
          <li>Register with the Department of Revenue, then open your county tourist tax account.</li>
          <li>Get any city business tax receipt or rental permit, and book the inspections.</li>
          <li>Recheck every year; the review date is at the top of this guide.</li>
        </ol>
        <p>
          Inspection coming up? Our{' '}
          <Link href="/services/emergency-cleaning">emergency and same-day service</Link> includes
          pre-inspection cleans.
        </p>
      </>
    ),
  },
];

const sources = [
  {
    title: 'Section 509.032, Florida Statutes (vacation rental preemption)',
    publisher: 'The Florida Legislature',
    href: 'http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0509/Sections/0509.032.html',
  },
  {
    title: 'Guide to Vacation Rentals and Timeshare Projects',
    publisher: 'Florida DBPR, Division of Hotels and Restaurants',
    href: 'https://www2.myfloridalicense.com/hotels-restaurants/licensing/vrtsp-guide/',
  },
  {
    title: 'Sales and Use Tax on Rental of Living or Sleeping Accommodations (GT-800034)',
    publisher: 'Florida Department of Revenue',
    href: 'https://floridarevenue.com/Forms_library/current/brochure/gt800034.pdf',
  },
  {
    title: 'Tourist and Convention Development Tax',
    publisher: 'County of Volusia',
    href: 'https://www.volusia.org/services/financial-and-administrative-services/revenue-services/tourist-and-convention-development-tax/',
  },
  {
    title: 'Tourist Development Tax: Frequently Asked Questions',
    publisher: 'County of Volusia',
    href: 'https://www.volusia.org/services/financial-and-administrative-services/revenue-services/tourist-and-convention-development-tax/frequently-asked-questions.stml',
  },
  {
    title: 'TDT and BTR (who administers the tourist development tax)',
    publisher: 'Volusia County Tax Collector',
    href: 'https://www.vctaxcollector.org/taxes/tdt-and-btr.html',
  },
  {
    title: 'Occupancy tax collection and remittance by Airbnb in Florida',
    publisher: 'Airbnb Help Center',
    href: 'https://www.airbnb.com/help/article/2301',
  },
  {
    title: 'Zoning Frequently Asked Questions',
    publisher: 'County of Volusia, Growth and Resource Management',
    href: 'https://www.volusia.org/services/growth-and-resource-management/faqs-zoning.stml',
  },
  {
    title: 'Judge upholds Volusia County’s short-term rental regulations',
    publisher: 'County of Volusia news release',
    href: 'https://www.volusia.org/news/news-releases.stml?portalProcess_dd_0_1_1=showPublicEvent&calendar_entry_id=85950',
  },
  {
    title: 'Comprehensive Plan, Chapter 11: Coastal Element (unincorporated Ormond-by-the-Sea)',
    publisher: 'County of Volusia',
    href: 'https://www.volusia.org/core/fileparse.php/7370/urlt/Chapter-11-Coastal-Element.pdf',
  },
  {
    title: 'Rental Property Program',
    publisher: 'City of Daytona Beach',
    href: 'https://www.daytonabeach.gov/266/Rental-Property-Program',
  },
  {
    title: 'Vacation rental: municipal regulation by zoning overlay',
    publisher: 'Florida Office of the Attorney General',
    href: 'https://www.myfloridalegal.com/node/9385',
  },
  {
    title: 'Business Tax Receipt Division',
    publisher: 'City of Daytona Beach Shores',
    href: 'https://www.dbshores.org/174/Business-Tax-Receipt-Division',
  },
  {
    title: 'FAQ: Are short term rentals / Airbnbs allowed?',
    publisher: 'City of Ormond Beach',
    href: 'https://ormondbeach.org/FAQ.aspx?QID=204',
  },
  {
    title: 'Short Term Rentals brochure',
    publisher: 'City of New Smyrna Beach',
    href: 'https://www.cityofnsb.com/DocumentCenter/View/19797/Short-term-rental-Brochure',
  },
  {
    title: 'City of Port Orange official website (no short-term rental page found)',
    publisher: 'City of Port Orange',
    href: 'https://www.port-orange.org/',
  },
  {
    title: 'FAQ: What are the restrictions associated with renting my home?',
    publisher: 'Town of Ponce Inlet',
    href: 'https://ponce-inlet.org/FAQ.aspx?QID=92',
  },
  {
    title: 'Rental Permit Information',
    publisher: 'Town of Ponce Inlet',
    href: 'https://ponce-inlet.org/421/Rental-Permit-Information',
  },
];

const faqs = [
  {
    question: 'Do I need a license to run an Airbnb in Volusia County?',
    answer:
      'Usually. Florida DBPR requires a vacation rental license if you rent an entire unit more than three times a calendar year for less than 30 days or one calendar month, or advertise it as regularly rented. You also need state and county tax registration, plus whatever your city requires.',
  },
  {
    question: 'What is the tourist tax rate in Volusia County?',
    answer:
      'Volusia County puts the total on stays of six months or less at 12.5%: a 6% county tourist development tax plus 6.5% remitted to the Florida Department of Revenue. Cleaning fees and other mandatory fees are taxable.',
  },
  {
    question: 'Are short-term rentals allowed in Ormond-by-the-Sea?',
    answer:
      'Ormond-by-the-Sea is unincorporated, so county zoning applies: rentals of less than 30 days are not permitted in single-family residential zoning and are allowed only where hotels or motels are permitted. Confirm your parcel’s zoning with the county.',
  },
];

const services = [
  {
    icon: MapPin,
    title: 'Ormond-by-the-Sea',
    description:
      'Turnovers and long-stay cleans in unincorporated Ormond-by-the-Sea, on the same crews as Ormond Beach.',
    href: '/cleaning/ormond-by-the-sea',
  },
  {
    icon: ClipboardCheck,
    title: 'Emergency & Same-Day Cleaning',
    description:
      'Pre-inspection cleans, surprise bookings, and no-show replacements, with any emergency fee quoted upfront.',
    href: '/services/emergency-cleaning',
  },
];

export default function RentalRulesGuide() {
  return (
    <GuideLayout
      slug={SLUG}
      takeaways={takeaways}
      intro={intro}
      sections={sections}
      sources={sources}
      faqs={faqs}
      related={['airbnb-cleaning-fee-florida', 'snowbird-season-cleaning-volusia']}
      services={services}
      cta={{
        title: 'Licensed, registered, and ready for guests?',
        subtitle:
          'We handle the cleaning side: photo-verified turnovers across Volusia County. Free quote within 24 hours.',
      }}
    />
  );
}
