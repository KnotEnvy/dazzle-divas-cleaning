import Link from 'next/link';
import { Camera, Building } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { GuideFigure } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'vacation-rental-turnover-checklist';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Work every turnover in the same order: strip beds and start laundry, clean bathrooms and the kitchen, then bedrooms and living areas, and finish with floors, restock, and a photo walkthrough.',
  'A checklist only protects your reviews if someone proves it was followed. Photo verification turns “we cleaned it” into a record you can check from your phone.',
  'Restock to a fixed par level for every consumable instead of topping up “when it looks low,” so every guest arrives to the same supply.',
  'The misses that cost reviews are small: hair in the shower, crumbs in the toaster, a dead remote battery, sand in the slider track.',
];

const sections = [
  {
    id: 'turnover-order',
    title: 'The right order for a turnover',
    content: (
      <>
        <p>
          The fastest turnovers follow the same order every time: strip the beds and start laundry
          first, clean the wet rooms next, then bedrooms and living areas, and finish with floors,
          restock, and a photo walkthrough.
        </p>
        <p>
          Laundry is the slowest part of most turnovers, so it starts first, and floors come last,
          worked toward the door. It is the sequence behind our{' '}
          <Link href="/services/vacation-rental-turnover">vacation rental turnover service</Link>,
          and our crews average 2&ndash;4 hours with it.
        </p>
        <ol>
          <li>
            <strong>Arrival walk-through.</strong> Photograph damage, stains, and left-behind items
            before touching anything.
          </li>
          <li>
            <strong>Strip and start laundry,</strong> including beds that look unused.
          </li>
          <li>
            <strong>Trash and dishes.</strong> Empty every bin, start the dishwasher, clear the
            fridge.
          </li>
          <li>
            <strong>Bathrooms, then kitchen,</strong> the rooms guests inspect most closely.
          </li>
          <li>
            <strong>Bedrooms and living areas,</strong> dusting top to bottom.
          </li>
          <li>
            <strong>Make beds and stage towels</strong> as linens come out of the dryer.
          </li>
          <li>
            <strong>Floors,</strong> vacuumed and mopped toward the exit.
          </li>
          <li>
            <strong>Restock, reset, and photograph</strong> before locking up.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'room-by-room',
    title: 'Room-by-room turnover checklist',
    content: (
      <>
        <p>
          Every room gets the same three passes: reset what guests touched, clean every surface they
          can see or feel, and check whatever they will use next.
        </p>
        <h3>Bathrooms</h3>
        <ul>
          <li>Toilet inside and out, including the base, hinges, and the floor behind it</li>
          <li>Shower and tub scrubbed, glass squeegeed, hair pulled from the drain</li>
          <li>Sink, faucet, and mirror polished streak-free</li>
          <li>Fresh towels staged, bath mat swapped, toilet paper and toiletries restocked</li>
          <li>Trash emptied and relined, with a quick look under the sink for leaks</li>
        </ul>
        <h3>Kitchen</h3>
        <ul>
          <li>Dishes washed and put away, and cabinets checked for dirty items guests stashed</li>
          <li>Counters, backsplash, stovetop, and knobs wiped and sanitized</li>
          <li>Microwave interior, toaster crumb tray, and coffee maker emptied and rinsed</li>
          <li>Fridge cleared of guest food and wiped, door shelves included</li>
          <li>Sink scrubbed, trash and recycling out, fresh liners in</li>
        </ul>
        <h3>Bedrooms</h3>
        <ul>
          <li>Fresh linens on every bed and mattress protectors checked for stains</li>
          <li>Under beds, behind nightstands, and inside drawers checked for left-behind items</li>
          <li>Nightstands, lamps, headboards, and ceiling fan blades dusted</li>
        </ul>
        <h3>Living areas and outdoors</h3>
        <ul>
          <li>Cushions straightened and checked underneath, remotes wiped and tested</li>
          <li>Sliding doors cleaned inside and out, with sand cleared from the tracks</li>
          <li>Patio swept, outdoor furniture wiped, grill checked</li>
          <li>Entry mats shaken out and the thermostat set to your guest-ready temperature</li>
        </ul>
        <p>
          Salt spray and sand come in with every beach guest, which is why our{' '}
          <Link href="/cleaning/daytona-beach">Daytona Beach</Link> crews treat slider glass, patios,
          and entry mats as standard scope.
        </p>
        <GuideFigure
          src="/images/twinBed_divas.jpg"
          alt="Twin bedroom with freshly made beds and tropical-print spreads in a Volusia County vacation rental"
          caption="A twin room reset after a Dazzle Divas turnover: beds made, surfaces clear, slider glass clean."
        />
      </>
    ),
  },
  {
    id: 'photo-verification',
    title: 'How 30-point photo verification works',
    content: (
      <>
        <p>
          Photo verification means the cleaner photographs a fixed set of checkpoints at the end of
          every turnover and sends them to you before leaving, so you can confirm the job without
          driving over.
        </p>
        <p>
          Our crews send a 30-point photo set with every turnover. A strong checkpoint list covers
          what guests notice first and what you can&apos;t see from a booking calendar:
        </p>
        <ul>
          <li>Each made bed, and each bathroom shot from the doorway</li>
          <li>Inside the shower, the toilet, and the vanity</li>
          <li>Counters, sink, stovetop, and the inside of the fridge and microwave</li>
          <li>The living area, patio, and grill</li>
          <li>The restocked supply shelf and the thermostat setting</li>
          <li>The locked door on the way out</li>
        </ul>
        <p>
          Fixed checkpoints matter more than photo count. When the same angles arrive after every
          turnover, a missing towel or a new stain stands out in seconds, and you get a dated record
          of condition between guests. If anything on the list was missed, we come back and fix it
          at no charge.
        </p>
        <p>
          Comparing cleaners? Ask each for a sample photo set. Our{' '}
          <Link href={guidePath('how-to-hire-vacation-rental-cleaner-volusia')}>
            guide to hiring a vacation rental cleaner
          </Link>{' '}
          covers what else to ask.
        </p>
      </>
    ),
  },
  {
    id: 'restock-list',
    title: 'Restock list and par levels',
    content: (
      <>
        <p>
          Set a par level for every consumable, meaning a fixed quantity that should be in the unit
          at every check-in, and restock to that number at each turnover.
        </p>
        <p>
          Par levels replace &ldquo;looks like enough&rdquo; with a count. Size them to your maximum
          occupancy and longest typical stay, and post them where the crew can see them.
        </p>
        <ul>
          <li>
            <strong>Bathroom:</strong> toilet paper, tissues, hand soap, shampoo, conditioner, body
            wash, and a spare roll under each sink
          </li>
          <li>
            <strong>Kitchen:</strong> paper towels, dish soap, dishwasher pods, a new sponge, trash
            and recycling bags, coffee and filters
          </li>
          <li>
            <strong>Laundry:</strong> detergent if guests have a washer, plus spare pillowcases and
            a backup towel set
          </li>
          <li>
            <strong>Small fixes:</strong> spare light bulbs, remote batteries, and a basic first-aid
            kit
          </li>
          <li>
            <strong>Beach extras,</strong> if you offer them: beach towels, a sand brush or foot
            rinse, sunscreen
          </li>
        </ul>
        <p>
          Most hosts keep backstock in a locked owner closet. We restock from your supply closet to
          your standards, so tell us your par levels and we fill to them every time.
        </p>
      </>
    ),
  },
  {
    id: 'what-hosts-forget',
    title: 'What hosts forget',
    content: (
      <>
        <p>
          The details that cost reviews are the ones nobody sees on a quick walkthrough: under
          things, inside things, and anything that runs on batteries.
        </p>
        <ul>
          <li>Hair on the bathroom floor and around the toilet base</li>
          <li>Crumbs in the toaster and under the stove knobs</li>
          <li>Sticky fridge door shelves and a forgotten freezer</li>
          <li>Dead remote batteries, and a Wi-Fi card that no longer matches the password</li>
          <li>Dust on ceiling fan blades and air vents</li>
          <li>Sand packed into sliding door tracks</li>
          <li>Grill grates, the outdoor shower, and the dryer lint trap</li>
          <li>A smoke alarm that starts chirping at 2 a.m., so test alarms on a schedule</li>
        </ul>
        <p>
          Heavy-use weeks multiply every item on this list. Our{' '}
          <Link href={guidePath('daytona-race-week-bike-week-rental-prep')}>
            race week and Bike Week prep guide
          </Link>{' '}
          covers event turnovers, and our{' '}
          <Link href={guidePath('snowbird-season-cleaning-volusia')}>snowbird season guide</Link>{' '}
          covers the deeper clean a long stay needs.
        </p>
      </>
    ),
  },
  {
    id: 'hand-it-off',
    title: 'When to hand the checklist to a crew',
    content: (
      <>
        <p>
          If you can&apos;t reliably be at the property between checkout and check-in, hand the
          checklist to a crew that works from one and proves it.
        </p>
        <p>
          A common Volusia window runs from an 11 a.m. checkout to a 4 p.m. check-in, with no slack
          for a cleaner who runs late. Our turnovers are priced by bedroom count, from
          $100&ndash;140 for a studio or one-bedroom to $200&ndash;280 for three bedrooms and up,
          with laundry, restock, and photo verification included. See{' '}
          <Link href="/pricing">our pricing</Link>, or ask for a quote within 24 hours.
        </p>
        <p>
          Running three or more rentals?{' '}
          <Link href="/services/property-management">Property management cleaning</Link> takes 10%
          off at three to five properties, and 15% off plus a dedicated manager at six to fifteen.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    question: 'How long should a vacation rental turnover take?',
    answer:
      'Our crews average 2–4 hours per turnover. Studios and one-bedrooms land at the low end; larger homes and heavy guest use push toward the high end.',
  },
  {
    question: 'What is 30-point photo verification?',
    answer:
      'It is a fixed set of photos our crew takes at the end of every turnover and sends to you before leaving, covering beds, bathrooms, the kitchen and appliances, outdoor areas, restocked supplies, and the locked door. If anything was missed, we return and fix it at no charge.',
  },
  {
    question: 'Should the cleaner or the host supply toiletries and linens?',
    answer:
      'Most hosts supply toiletries, paper goods, and linens and keep backstock in a locked owner closet. We bring all cleaning products and equipment, handle the laundry, and restock from your supply to your par levels.',
  },
  {
    question: 'Is a deep clean different from a turnover?',
    answer:
      'Yes. A turnover resets the unit for the next guest. A deep clean adds baseboards, ceiling fans, the oven interior, and behind furniture, and is worth scheduling after event weeks and long stays.',
  },
];

const services = [
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Guest-ready in 2–4 hours on average, with laundry, restock, and a 30-point photo set on every turnover.',
    href: '/services/vacation-rental-turnover',
  },
  {
    icon: Building,
    title: 'Property Management Cleaning',
    description:
      'Volume pricing, calendar sync, and a dedicated manager for hosts running three or more rentals.',
    href: '/services/property-management',
  },
];

export default function TurnoverChecklistGuide() {
  return (
    <GuideLayout
      slug={SLUG}
      takeaways={takeaways}
      sections={sections}
      faqs={faqs}
      related={['how-to-hire-vacation-rental-cleaner-volusia', 'airbnb-cleaning-fee-florida']}
      services={services}
      cta={{
        title: 'Hand off the checklist',
        subtitle:
          'Photo-verified turnovers across Volusia County. Free quote, no commitment, and a reply within 24 hours.',
      }}
    />
  );
}
