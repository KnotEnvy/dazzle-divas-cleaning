import Link from 'next/link';
import { CloudRain, Camera } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { GuideFigure } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'hurricane-prep-vacation-rental-volusia';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Atlantic hurricane season runs June 1 through November 30. Build your storm plan before June, not when a forecast cone appears.',
  'Set your storm cancellation policy in advance. Airbnb treats Florida hurricanes during hurricane season as foreseeable, so its disruptive-events policy generally applies only if a storm causes something like a mandatory evacuation order or a prolonged utility outage.',
  'Photograph the property before the storm and again before anyone cleans up afterward. Florida’s insurance regulator advises documenting damage and keeping damaged property until the insurer inspects it.',
  'Post-storm cleaning is triage: safety, documentation, water and debris, sanitizing, then a full photo-verified turnover before the next guest.',
];

const sections = [
  {
    id: 'season',
    title: 'Hurricane season and your rental calendar',
    content: (
      <>
        <p>
          Atlantic hurricane season runs from June 1 to November 30, so every summer and fall
          booking should be made with a storm plan already in place.
        </p>
        <p>
          Start with your evacuation zone. Volusia County sets evacuation levels by the storm surge
          flooding a hurricane is likely to cause, which is not the same thing as your flood zone.
          Look up your rental on the county&apos;s Know Your Zone page and put the result in your
          house manual. The county also notes that failing to obey an evacuation order violates
          Florida law, so your plan should assume guests leave when told to.
        </p>
        <p>
          Sign up for AlertVolusia, the county&apos;s emergency notification service, and ask your
          cleaner or property manager to do the same so everyone hears about orders at the same
          time.
        </p>
      </>
    ),
  },
  {
    id: 'pre-storm-checklist',
    title: 'Pre-storm checklist for a vacation rental',
    content: (
      <>
        <p>
          When a storm is forecast, secure the outside, protect the inside, photograph everything,
          and make sure someone local can get in afterward.
        </p>
        <ol>
          <li>
            <strong>Bring in anything that can fly:</strong> patio furniture, grills, umbrellas,
            beach gear, trash cans, and kayaks.
          </li>
          <li>
            <strong>Close up the building</strong> with shutters or panels, or confirm your condo
            association&apos;s plan.
          </li>
          <li>
            <strong>Protect the interior.</strong> Move electronics and rugs off ground-floor floors
            and away from windows, unplug appliances, and close interior doors.
          </li>
          <li>
            <strong>Deal with the fridge.</strong> If the unit will sit empty, clear out perishables
            so a power outage doesn&apos;t become a spoiled-food cleanup.
          </li>
          <li>
            <strong>Limit water damage.</strong> In a vacant unit, consider shutting off the water
            at the main, and clear balcony and patio drains so rain has somewhere to go.
          </li>
          <li>
            <strong>Photograph and video every room</strong> and the exterior, plus serial numbers
            of major appliances and electronics. Store the files in the cloud with your policy.
          </li>
          <li>
            <strong>Update the calendar</strong> and message any guests due in the storm window.
          </li>
          <li>
            <strong>Hand off access.</strong> Give your cleaner or manager a key or code and a short
            list of what to check first after the all-clear.
          </li>
        </ol>
        <GuideFigure
          src="/images/backtard_divas.jpg"
          alt="Covered ground-floor patio with wicker sofas, chairs, and a dining table at a Volusia County vacation rental"
          caption="Patio furniture like this is the first thing to bring inside or tie down when a storm is forecast."
          orientation="portrait"
        />
      </>
    ),
  },
  {
    id: 'guest-communication',
    title: 'What to tell guests before and during a storm',
    content: (
      <>
        <p>
          Tell guests your storm policy at booking, send a short plan when a storm is forecast, and
          point them to official county alerts rather than your own forecast.
        </p>
        <p>
          Don&apos;t count on the platform to sort out cancellations. Airbnb&apos;s Major Disruptive
          Events Policy can let guests cancel for a refund and hosts cancel without penalty, but only
          when Airbnb activates it for an area. The policy treats hurricanes in Florida during
          hurricane season as foreseeable, so it generally applies only when a storm leads to
          something like a mandatory evacuation order or a prolonged utility outage. Otherwise your
          own cancellation policy governs.
        </p>
        <p>That makes your listing the place to set expectations. A good storm message covers:</p>
        <ul>
          <li>The property&apos;s evacuation zone and where to check for orders</li>
          <li>What you&apos;ll do about refunds or date changes, in plain terms</li>
          <li>What to do before leaving: close shutters if it&apos;s safe, take belongings, lock up</li>
          <li>How to reach you or your local contact, and when you&apos;ll send the next update</li>
        </ul>
        <p>
          If an order comes mid-stay, make it clear guests should leave and that you&apos;ll handle
          the property. Nobody should stay behind to protect furniture.
        </p>
      </>
    ),
  },
  {
    id: 'insurance-photos',
    title: 'Insurance documentation photos',
    content: (
      <>
        <p>
          Take dated photos and video of every room before a storm and of all damage afterward,
          before any cleanup starts, and keep receipts for emergency repairs.
        </p>
        <p>
          Florida&apos;s Department of Financial Services tells property owners to photograph damage,
          keep receipts for materials bought for emergency repairs, and hold on to damaged property
          until the insurance company has inspected it. Your policy also expects you to make
          temporary repairs that prevent further damage, and you should report a claim as soon as
          possible. If something is unsafe to keep, photograph it before it goes.
        </p>
        <p>A useful post-storm photo set includes:</p>
        <ul>
          <li>A wide shot of every room from the doorway</li>
          <li>Close-ups of water lines, ceiling stains, wet flooring, and broken glass</li>
          <li>The roof, windows, screens, doors, fences, and pool enclosure from outside</li>
          <li>Damaged furniture, appliances, and electronics, with serial numbers</li>
          <li>Any standing water, with something in the frame to show depth</li>
        </ul>
        <p>
          Our crews take insurance documentation photos as part of storm cleanup, with the same
          habits behind the{' '}
          <Link href={guidePath('vacation-rental-turnover-checklist')}>
            30-point photo checklist
          </Link>{' '}
          we send after every turnover.
        </p>
      </>
    ),
  },
  {
    id: 'post-storm-cleaning',
    title: 'What post-storm cleaning involves',
    content: (
      <>
        <p>
          Post-storm cleaning starts only after the property is safe to enter and documented, then
          moves from water and debris to sanitizing and a full guest-ready turnover.
        </p>
        <ol>
          <li>
            <strong>Safety first.</strong> Wait for the official all-clear, and keep everyone out if
            there are downed lines, gas odors, or structural damage.
          </li>
          <li>
            <strong>Document</strong> everything, as above, before anything moves.
          </li>
          <li>
            <strong>Water and debris.</strong> Extraction and drying are restoration work. We
            coordinate around those crews and clear debris and broken glass.
          </li>
          <li>
            <strong>Food and appliances.</strong> Remove spoiled food and clean the fridge and
            freezer after an outage.
          </li>
          <li>
            <strong>Sanitize</strong> the surfaces water reached, and treat them to help prevent
            mold.
          </li>
          <li>
            <strong>Linens and soft goods.</strong> Launder what can be saved and set aside what
            can&apos;t for the adjuster.
          </li>
          <li>
            <strong>Full turnover</strong> with photo verification before the next guest checks in.
          </li>
        </ol>
        <p>
          Dispatch, response times, and what we handle are on our{' '}
          <Link href="/services/emergency-cleaning">emergency cleaning page</Link>. The 24/7 line
          stays open through storm season.
        </p>
      </>
    ),
  },
  {
    id: 'close-out',
    title: 'Close out the season',
    content: (
      <>
        <p>
          After November 30, walk the property, book a deep clean, and update your storm plan with
          whatever didn&apos;t work.
        </p>
        <p>
          Restock your storm supplies, check that shutter hardware and furniture tie-downs survived,
          and refresh your pre-season photo set. The end of hurricane season overlaps with the start
          of snowbird season, so one visit can double as long-stay prep; see our{' '}
          <Link href={guidePath('snowbird-season-cleaning-volusia')}>snowbird season guide</Link>{' '}
          and our <Link href="/services/deep-cleaning">deep cleaning service</Link>.
        </p>
      </>
    ),
  },
];

const sources = [
  {
    title: 'Tropical Cyclone Climatology',
    publisher: 'NOAA National Hurricane Center',
    href: 'https://www.nhc.noaa.gov/climo/',
  },
  {
    title: 'Know Your Zone (Evacuation Plan)',
    publisher: 'Volusia County Emergency Management',
    href: 'https://www.volusia.org/services/public-protection/emergency-management/get-prepared/evacuation-plan.stml',
  },
  {
    title: 'Get Informed (AlertVolusia and other alert channels)',
    publisher: 'Volusia County Emergency Management',
    href: 'https://www.volusia.org/services/public-protection/emergency-management/em-app.stml',
  },
  {
    title: 'General Insurance Coverage FAQs',
    publisher: 'Florida Department of Financial Services',
    href: 'https://myfloridacfo.com/division/consumers/storm/general-disaster-faqs',
  },
  {
    title: 'Major Disruptive Events Policy',
    publisher: 'Airbnb Help Center',
    href: 'https://www.airbnb.com/help/article/1320',
  },
  {
    title: 'Weather events and natural conditions that may be excluded',
    publisher: 'Airbnb Help Center',
    href: 'https://www.airbnb.com/help/article/2930',
  },
];

const faqs = [
  {
    question: 'When is hurricane season in Volusia County?',
    answer:
      'The Atlantic hurricane season runs from June 1 to November 30. Every summer and fall booking in Volusia falls inside it, so set your storm policy and pre-storm checklist before June.',
  },
  {
    question: 'Will Airbnb refund guests when a hurricane is forecast?',
    answer:
      'Not automatically. Airbnb’s Major Disruptive Events Policy treats hurricanes in Florida during hurricane season as foreseeable, so it generally applies only when a storm leads to something like a mandatory evacuation order or a prolonged utility outage and Airbnb activates the policy for the area. Otherwise, your listing’s cancellation policy applies.',
  },
  {
    question: 'Should I clean up before the insurance adjuster comes?',
    answer:
      'Photograph and video everything first. Florida’s Department of Financial Services advises making temporary repairs to prevent further damage, keeping receipts, and not disposing of damaged property until the insurer has inspected it. If an item is unsafe to keep, photograph it before it goes.',
  },
  {
    question: 'Can you clean a vacation rental after a hurricane?',
    answer:
      'Yes. Our 24/7 emergency line handles post-storm cleanup, with a 2-hour dispatch goal during business hours and no rush fees on standard tiers. We coordinate around water extraction crews, clear debris, sanitize, take insurance documentation photos, and finish with a photo-verified turnover.',
  },
];

const services = [
  {
    icon: CloudRain,
    title: 'Emergency & Same-Day Cleaning',
    description:
      'Post-storm sanitization, debris clearing, and insurance documentation photos. 24/7 phone line.',
    href: '/services/emergency-cleaning',
  },
  {
    icon: Camera,
    title: 'Vacation Rental Turnover',
    description:
      'Get back to guest-ready with a full turnover and a 30-point photo set once the property is safe.',
    href: '/services/vacation-rental-turnover',
  },
];

export default function HurricaneGuide() {
  return (
    <GuideLayout
      slug={SLUG}
      takeaways={takeaways}
      sections={sections}
      sources={sources}
      faqs={faqs}
      related={['volusia-county-short-term-rental-rules', 'snowbird-season-cleaning-volusia']}
      services={services}
      cta={{
        title: 'Put a storm-season plan in place',
        subtitle:
          'Line up post-storm cleanup before you need it. Free quote within 24 hours, and a 24/7 line when a storm hits.',
      }}
    />
  );
}
