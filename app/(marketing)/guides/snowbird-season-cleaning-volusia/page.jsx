import Link from 'next/link';
import { Sun, Sparkles } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { GuideFigure } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'snowbird-season-cleaning-volusia';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Snowbird season in Volusia runs roughly October through April. It means fewer turnovers but heavier ones: a long-stay checkout needs a deep clean, not a standard reset.',
  'Keep three full linen sets per bed (one on the bed, one in the wash, one in the closet) so a long-stay checkout and the next arrival never wait on laundry.',
  'For stays of a month or more, schedule mid-stay cleans. They catch small problems early and protect the next review.',
  'Check the rules for your address. Ormond Beach treats any lease under six months as transient lodging, while unincorporated Ormond-by-the-Sea follows the county’s under-30-day threshold.',
];

const sections = [
  {
    id: 'why-different',
    title: 'Why snowbird turnovers are different',
    content: (
      <>
        <p>
          Snowbird turnovers are fewer but heavier, because a guest who lived in the unit for a month
          or more leaves behind the build-up of a household, not a vacation.
        </p>
        <p>
          Long stays mean home cooking, full laundry cycles, and months of dust on surfaces a
          weekend guest never touches. Ovens, range hoods, fridge interiors, shower glass, and
          ceiling fans all build up in ways a standard turnover isn&apos;t designed to reset.
        </p>
        <p>
          That&apos;s why our snowbird-season protocol adds the oven, the fridge interior,
          baseboards, ceiling fans, and a full linen rotation on top of the standard turnover. It is
          a core part of our work in{' '}
          <Link href="/cleaning/ormond-beach">Ormond Beach</Link>, which draws more long-stay and
          snowbird guests than busier Daytona to the south.
        </p>
      </>
    ),
  },
  {
    id: 'deep-clean',
    title: 'The deep clean between long-stay guests',
    content: (
      <>
        <p>
          Between long-stay guests, do a full deep clean that reaches inside appliances, behind
          furniture, and up to fans and vents, not just a standard turnover.
        </p>
        <ul>
          <li>Oven interior, range hood filter, and stovetop drip areas</li>
          <li>Fridge and freezer emptied, shelves and drawers washed, door gaskets wiped</li>
          <li>Dishwasher filter, microwave, and cabinet fronts and pulls</li>
          <li>Baseboards, door frames, light switches, and outlet covers</li>
          <li>Ceiling fans, air vents, and blinds</li>
          <li>Under and behind beds and sofas</li>
          <li>Shower glass descaled, grout scrubbed, drains cleared</li>
          <li>Window and sliding door tracks, and patio furniture</li>
          <li>Washer gasket and dryer lint trap, plus a note if the HVAC filter is due</li>
        </ul>
        <p>
          Schedule the deep clean as soon as the long-stay booking is confirmed. Departures cluster
          in spring, and we plan snowbird departures into our peak-week capacity. Deep cleaning is
          custom-quoted within 24 hours, since the price depends on size, condition, and how long
          the last guest stayed; see our{' '}
          <Link href="/services/deep-cleaning">deep cleaning service</Link> for what it covers.
        </p>
        <GuideFigure
          src="/images/kitchen_divas.jpg"
          alt="Galley kitchen with a white stove, clean tile floor, and teal accent wall in a Volusia County vacation rental"
          caption="Kitchens take the most long-stay wear. The oven, range hood, and fridge interior are standard in a snowbird deep clean."
        />
      </>
    ),
  },
  {
    id: 'linen-rotation',
    title: 'Linen rotation for long stays',
    content: (
      <>
        <p>
          Keep three full sets of linens and towels per bed, one on the bed, one in the wash, and
          one in the closet, and retire sets on a schedule instead of waiting for a guest to notice.
        </p>
        <ul>
          <li>
            Offer a fresh-linen swap partway through stays longer than a couple of weeks, so the
            guest isn&apos;t sleeping on one set for a month.
          </li>
          <li>
            Inspect sheets and towels at every long-stay checkout for stains, thinning, and pilling,
            and pull anything that wouldn&apos;t pass in a hotel.
          </li>
          <li>Wash mattress and pillow protectors at every long-stay checkout.</li>
          <li>Label sets by bed size so a queen sheet never ends up on a king.</li>
        </ul>
        <p>
          Our linen service can rotate fresh inventory between turnovers, which helps most when a
          long-stay checkout and a new arrival land on the same day.
        </p>
      </>
    ),
  },
  {
    id: 'stock-for-living',
    title: 'Stock the unit for living, not visiting',
    content: (
      <>
        <p>
          A long-stay guest needs what a household needs, so stock and stage the unit for a month
          of daily life, not a long weekend.
        </p>
        <ul>
          <li>Empty drawer and closet space, with plenty of matching hangers</li>
          <li>A working vacuum, a mop, and basic cleaning supplies the guest can use</li>
          <li>Real cooking basics: a full set of pots, a sharp knife, baking sheets, storage containers</li>
          <li>Laundry detergent and a drying rack if the unit has a washer</li>
          <li>Trash and recycling pickup days, and who to contact for maintenance</li>
        </ul>
        <p>
          Put the par levels for these in writing too, the same way you would for a turnover
          restock, so the deep clean at checkout also resets the supplies.
        </p>
      </>
    ),
  },
  {
    id: 'mid-stay-cleans',
    title: 'Mid-stay cleans for month-long guests',
    content: (
      <>
        <p>
          For stays of a month or more, schedule a mid-stay clean every two to four weeks, or offer
          it as an add-on, so small problems don&apos;t turn into move-out problems.
        </p>
        <p>
          A mid-stay visit keeps bathrooms and the kitchen from building up, swaps linens, and puts
          a trained eye on the unit. It is the easiest way to spot a slow leak, a struggling AC, or
          a pest problem while it is still small. Present it as part of the stay, not an inspection,
          and it reads as a perk rather than a check-up. We can set a fixed cadence, weekly or every other
          week, around your guest&apos;s schedule.
        </p>
      </>
    ),
  },
  {
    id: 'ormond-rules',
    title: 'Ormond Beach vs Ormond-by-the-Sea: check the rules first',
    content: (
      <>
        <p>
          Two addresses a few minutes apart can follow different rental rules: the City of Ormond
          Beach treats any lease under six months as transient lodging, while Ormond-by-the-Sea is
          unincorporated and follows Volusia County zoning.
        </p>
        <p>
          In the city, transient lodging isn&apos;t allowed in any residential zoning district; it is
          a permitted use only in the B-4, B-6, and B-7 commercial districts. Leases longer than six
          months are allowed in residential districts. A three-month snowbird lease on a house in a
          residential district is therefore transient under the city&apos;s definition, so confirm
          with the city before you offer one.
        </p>
        <p>
          <Link href="/cleaning/ormond-by-the-sea">Ormond-by-the-Sea</Link> falls under county
          zoning, which draws its line at stays of less than 30 days in single-family residential
          zoning. Confirm your parcel with the county before relying on that.
        </p>
        <p>
          Taxes follow a different line again. Florida sales tax and Volusia&apos;s tourist
          development tax apply to stays of six months or less, so most snowbird stays are taxable;
          rent paid under a written lease of more than six months is exempt from the state tax. Our{' '}
          <Link href={guidePath('volusia-county-short-term-rental-rules')}>
            Volusia County short-term rental rules guide
          </Link>{' '}
          has the details and official sources.
        </p>
      </>
    ),
  },
  {
    id: 'season-calendar',
    title: 'A snowbird-season cleaning calendar',
    content: (
      <>
        <p>
          Front-load the work: deep clean before the first fall arrival, run mid-stay cleans through
          winter, and deep clean with a linen audit at each spring departure.
        </p>
        <ul>
          <li>
            <strong>September and October:</strong> pre-season deep clean, restock, and linen audit,
            timed after hurricane season winds down. Our{' '}
            <Link href={guidePath('hurricane-prep-vacation-rental-volusia')}>hurricane guide</Link>{' '}
            covers the storm side.
          </li>
          <li>
            <strong>October through April:</strong> long-stay turnovers with deep cleans, plus
            mid-stay visits.
          </li>
          <li>
            <strong>February and March:</strong> if you mix short stays in, plan around{' '}
            <Link href={guidePath('daytona-race-week-bike-week-rental-prep')}>
              race week and Bike Week
            </Link>
            .
          </li>
          <li>
            <strong>April and May:</strong> departure deep cleans, then summer turnovers.
          </li>
        </ul>
      </>
    ),
  },
];

const sources = [
  {
    title: 'FAQ: Are short term rentals / Airbnbs allowed?',
    publisher: 'City of Ormond Beach',
    href: 'https://ormondbeach.org/FAQ.aspx?QID=204',
  },
  {
    title: 'Zoning Frequently Asked Questions',
    publisher: 'County of Volusia, Growth and Resource Management',
    href: 'https://www.volusia.org/services/growth-and-resource-management/faqs-zoning.stml',
  },
  {
    title: 'Comprehensive Plan, Chapter 11: Coastal Element (unincorporated Ormond-by-the-Sea)',
    publisher: 'County of Volusia',
    href: 'https://www.volusia.org/core/fileparse.php/7370/urlt/Chapter-11-Coastal-Element.pdf',
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
];

const faqs = [
  {
    question: 'What is included in a snowbird deep clean?',
    answer:
      'Everything in a standard turnover, plus the oven, the fridge interior, baseboards, ceiling fans, and a full linen rotation. Long stays often also need shower glass descaled, grout scrubbed, and vents and blinds dusted.',
  },
  {
    question: 'How much does a deep clean between long-stay guests cost?',
    answer:
      'Deep cleaning is custom-quoted within 24 hours because the price depends on property size, condition, and how long the last guest stayed. For reference, standard turnovers run $100–280 by bedroom count.',
  },
  {
    question: 'Can I rent my Ormond Beach house to snowbirds for three months?',
    answer:
      'Check with the city first. Ormond Beach defines transient lodging as a lease of less than six months and does not allow it in residential zoning districts. Ormond-by-the-Sea is unincorporated and follows county zoning instead.',
  },
  {
    question: 'Do you clean in Ormond-by-the-Sea?',
    answer:
      'Yes. Ormond-by-the-Sea is part of our standard Ormond Beach service area, with the same crews, rates, and response times.',
  },
];

const services = [
  {
    icon: Sun,
    title: 'Ormond Beach',
    description:
      'Snowbird-season specialty, with long-stay deep cleans built into our Ormond Beach scope.',
    href: '/cleaning/ormond-beach',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'Inside appliances, baseboards, fans, and grout. Custom-quoted within 24 hours.',
    href: '/services/deep-cleaning',
  },
];

export default function SnowbirdGuide() {
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
        title: 'Get ready for snowbird season',
        subtitle:
          'Book pre-season and departure deep cleans before the calendar fills. Free quote within 24 hours.',
      }}
    />
  );
}
