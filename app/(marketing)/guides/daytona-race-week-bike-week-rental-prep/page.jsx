import Link from 'next/link';
import { Flag, Zap } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { DataTable, GuideFigure } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'daytona-race-week-bike-week-rental-prep';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Volusia’s biggest rental spikes follow the event calendar: Speedweeks and the Daytona 500 in February, Bike Week in late February or early March, Jeep Beach in April, and Biketoberfest in October.',
  'Book cleaning capacity the day you open event dates, not the week before. Every host in the county needs a crew on the same checkout mornings.',
  'Event guests mean more people, more gear, and more mess per night. Plan extra linens, heavier kitchen and floor work, and a damage check on every checkout.',
  'Event-week minimum stays keep turnovers to a pace a crew can handle and cut the number of checkout-day scrambles.',
];

const sections = [
  {
    id: 'event-calendar',
    title: 'When the big event weeks usually fall',
    content: (
      <>
        <p>
          Plan around four recurring event windows: Speedweeks and the Daytona 500 in February, Bike
          Week in late February or early March, Jeep Beach in April, and Biketoberfest in October.
        </p>
        <DataTable
          caption="Typical timing of major Daytona-area events"
          columns={['Event', 'Typical timing', 'Length']}
          rows={[
            [
              'Speedweeks and the Daytona 500',
              'February, with the 500 on a Sunday in mid-to-late February',
              'Several days of racing ending with the 500',
            ],
            [
              'Bike Week',
              'Starts on a Friday in late February or early March',
              '10 days',
            ],
            ['Jeep Beach', 'Mid-to-late April', '10 days'],
            ['Biketoberfest', 'Mid-October', 'A long weekend, Thursday through Sunday'],
          ]}
        />
        <p>
          Speedweeks racing usually starts midweek with qualifying and the Duel races, so race guests
          may arrive days before the 500 itself. In some years Bike Week begins less than two
          weeks after the 500, which turns late February and early March into one long,
          high-demand stretch. Bike Week and Biketoberfest
          events spread to venues across Volusia County, so hosts in{' '}
          <Link href="/cleaning/ormond-beach">Ormond Beach</Link>,{' '}
          <Link href="/cleaning/port-orange">Port Orange</Link>, and{' '}
          <Link href="/cleaning/new-smyrna-beach">New Smyrna Beach</Link> should plan for them too.
          Dates move every year, so confirm them on the official event sites listed below before you
          set rates, minimums, or blackout dates.
        </p>
      </>
    ),
  },
  {
    id: 'book-early',
    title: 'Book your cleaner the day you open event dates',
    content: (
      <>
        <p>
          Reserve turnover capacity when you open event-week dates on your calendar, because every
          host in the county needs a crew on the same checkout days.
        </p>
        <p>
          Event weeks compress demand. Guests check out on the same mornings, often the day after
          the main event, and every cleaning company in the area is booked against the same few
          windows. Our standing advice is to reserve race-week turnovers 2&ndash;4 weeks ahead, and
          sooner is better.
        </p>
        <ul>
          <li>Hosts who book with us through the year get priority capacity in event weeks.</li>
          <li>
            <Link href="/services/property-management">Property management</Link> clients on our
            Pro and Enterprise tiers get reserved peak-week capacity automatically.
          </li>
          <li>
            Calendar sync with Airbnb, VRBO, Hospitable, Guesty, and Vacasa puts a late booking on
            our schedule without phone tag.
          </li>
          <li>
            If a cleaner falls through mid-event, our{' '}
            <Link href="/services/emergency-cleaning">emergency service</Link> steps in when
            capacity allows, and any emergency fee is quoted before we dispatch.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'minimum-stays',
    title: 'Set minimum stays that match your cleaning capacity',
    content: (
      <>
        <p>
          Use event-week minimum stays to control how many turnovers you need, since fewer, longer
          bookings mean fewer checkout-day crunches and less wear per night.
        </p>
        <p>
          A multi-night minimum around the Daytona 500 or the core of Bike Week, for example three
          or four nights, can match guests who arrive before the main days and leave after. It also
          means one heavy turnover instead of two or three back to back.
        </p>
        <ul>
          <li>
            Line up check-in and checkout days with the event schedule so guests don&apos;t leave a
            one-night gap you can&apos;t fill.
          </li>
          <li>
            Keep your cleaning fee in step with the longer stay. Our{' '}
            <Link href={guidePath('airbnb-cleaning-fee-florida')}>cleaning fee guide</Link> walks
            through the math.
          </li>
          <li>
            Leave a buffer night after a heavy event stay if the unit needs extra work before the
            next guest.
          </li>
        </ul>
        <p>
          A platform minimum is a pricing choice. It doesn&apos;t change what your zoning allows;
          our{' '}
          <Link href={guidePath('volusia-county-short-term-rental-rules')}>
            Volusia County short-term rental rules guide
          </Link>{' '}
          covers that.
        </p>
      </>
    ),
  },
  {
    id: 'guest-expectations',
    title: 'Set expectations with event guests',
    content: (
      <>
        <p>
          Tell event guests the house rules before they arrive, because a clear message up front
          prevents most of the mess and friction a crew would otherwise clean up.
        </p>
        <ul>
          <li>
            <strong>Guest count and parking.</strong> State the maximum occupancy and exactly where
            cars, bikes, and trailers can park, including any condo or HOA limits.
          </li>
          <li>
            <strong>Quiet hours and smoking.</strong> Put your rules in the listing and post them in
            the unit, with any association rules alongside.
          </li>
          <li>
            <strong>Trash.</strong> Leave extra bags, show where the bins go, and note the pickup
            day so a full week of trash doesn&apos;t wait for the crew.
          </li>
          <li>
            <strong>Checkout.</strong> Send a reminder the day before with the checkout time and a
            short list: start the dishwasher, bag trash, leave used towels in the tub. On-time
            checkouts keep our crews on schedule for the next arrival.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'turnover-changes',
    title: 'What changes in an event-week turnover',
    content: (
      <>
        <p>
          Event turnovers take more work than a typical beach-week clean: more guests per bedroom,
          more laundry, more grime on floors and outdoor areas, and a higher chance of damage.
        </p>
        <ul>
          <li>
            <strong>Laundry volume.</strong> Keep a second full set of linens and towels for every
            bed so laundry doesn&apos;t hold up check-in. Our linen service can rotate fresh
            inventory between back-to-back turnovers.
          </li>
          <li>
            <strong>Kitchen and trash.</strong> Coolers, grilling, and takeout mean heavier trash
            and a greasier kitchen. Plan for extra bags and a full fridge wipe.
          </li>
          <li>
            <strong>Floors and entries.</strong> Road grime and sand come in on boots, so entry mats
            and hard floors need more than a quick pass.
          </li>
          <li>
            <strong>Outdoor areas.</strong> Patios, grills, driveways, and garage floors, including
            drips from parked bikes and trucks.
          </li>
          <li>
            <strong>Documentation.</strong> If a guest leaves damage or an unusual mess, we
            photograph it before cleaning and tell you right away, so you have what you need for a
            platform claim.
          </li>
        </ul>
        <p>
          Our crews average 2&ndash;4 hours per turnover. Heavy event stays can run longer, so leave
          some slack between checkout and the next check-in.
        </p>
        <GuideFigure
          src="/images/livingroom2_divas.jpg"
          alt="Two-story oceanfront living room with sofas, a ceiling fan, and sliding doors to a balcony, staged for the next guests"
          caption="Open-plan beachside units take the most event traffic. Sliders, floors, and upholstery get extra attention."
          orientation="portrait"
        />
      </>
    ),
  },
  {
    id: 'wear-and-tear',
    title: 'Protect the property from event wear',
    content: (
      <>
        <p>
          Most event-week wear is preventable with a few changes made before the first booking of
          the season.
        </p>
        <ul>
          <li>Washable mattress and pillow protectors on every bed, with spares</li>
          <li>
            Dark hand towels plus a stack of cheap rags labeled for bikes and gear, so guests
            don&apos;t use your white bath towels on chrome
          </li>
          <li>Heavy-duty entry mats inside and out, and felt pads under furniture that gets moved</li>
          <li>Outdoor cushions and rugs that hose off easily</li>
          <li>A fresh lock code for every stay and a photo inventory of furniture and electronics</li>
        </ul>
        <p>
          Our{' '}
          <Link href={guidePath('vacation-rental-turnover-checklist')}>turnover checklist</Link>{' '}
          lists the small misses that multiply in a busy week.
        </p>
      </>
    ),
  },
  {
    id: 'reset-after',
    title: 'Schedule a reset after the rush',
    content: (
      <>
        <p>
          Book a deep clean after the February and March stretch and again after Biketoberfest,
          before your next season of guests arrives.
        </p>
        <p>
          A post-event reset catches what turnovers roll forward: baseboards, grout, upholstery
          spots, ceiling fans, the oven, and the patio. The fall reset lines up with the start of
          snowbird season, which our{' '}
          <Link href={guidePath('snowbird-season-cleaning-volusia')}>snowbird guide</Link> covers.
          Our <Link href="/services/deep-cleaning">deep cleaning service</Link> is priced at twice
          a standard clean, with a $200 minimum.
        </p>
      </>
    ),
  },
];

const sources = [
  {
    title: 'Daytona Bike Week official website',
    publisher: 'Official Bike Week',
    href: 'https://officialbikeweek.com/',
  },
  {
    title: 'Biker Events (Bike Week and Biketoberfest)',
    publisher: 'City of Daytona Beach',
    href: 'https://www.daytonabeach.gov/954/Biker-Events',
  },
  {
    title: 'Biketoberfest official dates, schedule, rides and events',
    publisher: 'Daytona Beach Area Convention & Visitors Bureau',
    href: 'https://www.daytonabeach.com/biketoberfest/',
  },
  {
    title: 'Jeep Beach official website',
    publisher: 'Jeep Beach',
    href: 'https://www.jeepbeach.com/',
  },
  {
    title: 'Full schedule for the Daytona 500 and Speedweeks',
    publisher: 'NASCAR',
    href: 'https://www.nascar.com/weekend-schedule/weekend-schedule-for-2026-daytona-speedweeks/',
  },
  {
    title: 'NASCAR schedule announcements: dates, tracks and changes',
    publisher: 'NASCAR',
    href: 'https://www.nascar.com/news-media/2026/08/05/2027-nascar-schedule-announcements-latest-dates-tracks-and-changes/',
  },
];

const faqs = [
  {
    question: 'How far ahead should I book cleaners for Bike Week or the Daytona 500?',
    answer:
      'As soon as you open those dates. Our standing advice is to reserve race-week turnovers 2–4 weeks ahead at a minimum, and hosts who book with us through the year get priority capacity in event weeks.',
  },
  {
    question: 'Do you charge more for race-week turnovers?',
    answer:
      'No. Race weeks, weekends, and holidays are priced the same as any other day on our standard tiers. If a guest leaves damage or an unusual mess, we photograph it and talk to you before doing extra work.',
  },
  {
    question: 'When is Bike Week?',
    answer:
      'Bike Week is a 10-day event that typically starts on a Friday in late February or early March. Dates change every year, so check the official Bike Week site before you set rates or minimum stays.',
  },
  {
    question: 'Do event weeks affect rentals outside Daytona Beach?',
    answer:
      'Yes. Bike Week and Biketoberfest activities take place at venues across Volusia County, so hosts in Ormond Beach, Port Orange, and New Smyrna Beach should plan cleaning capacity and minimum stays for event weeks too.',
  },
];

const services = [
  {
    icon: Flag,
    title: 'Daytona Beach',
    description:
      'Race-week capacity reserved for clients on annual schedules, plus tight 11 a.m. to 4 p.m. turnovers.',
    href: '/cleaning/daytona-beach',
  },
  {
    icon: Zap,
    title: 'Emergency & Same-Day Cleaning',
    description:
      'Surprise bookings and no-show cleaners during event weeks. Emergency fees quoted before dispatch.',
    href: '/services/emergency-cleaning',
  },
];

export default function RaceWeekGuide() {
  return (
    <GuideLayout
      slug={SLUG}
      takeaways={takeaways}
      sections={sections}
      sources={sources}
      faqs={faqs}
      related={['vacation-rental-turnover-checklist', 'airbnb-cleaning-fee-florida']}
      services={services}
      cta={{
        title: 'Lock in event-week turnovers now',
        subtitle:
          'Tell us which event weeks you’re booking and we’ll confirm race-week capacity at booking. Free quote, reply within 24 hours.',
      }}
    />
  );
}
