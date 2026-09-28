import Link from 'next/link';
import { Users, DollarSign } from 'lucide-react';
import GuideLayout from '../../../components/guides/GuideLayout';
import { GuideFigure } from '../../../components/guides/GuideParts';
import { guideMetadata, guidePath } from '../../../components/guides/guides';

const SLUG = 'how-to-hire-vacation-rental-cleaner-volusia';

export const metadata = guideMetadata(SLUG);

const takeaways = [
  'Hire for proof and backup, not just price. Ask how the cleaner shows you each turnover was done, and who covers when their crew is out.',
  'Get a certificate of insurance before the first job. Florida requires workers’ compensation for non-construction employers with four or more employees, and the state runs a public coverage lookup.',
  'A vacation rental cleaner should work from your booking calendar, not text reminders, and plan around your checkout-to-check-in window.',
  'Pricing should be published or itemized in writing before the first turnover, and any extra charge should need your approval first.',
];

const sections = [
  {
    id: 'rental-vs-house-cleaner',
    title: 'What a vacation rental cleaner does differently',
    content: (
      <>
        <p>
          A vacation rental cleaner resets a property for a paying guest on a deadline, with linens,
          restock, staging, and proof, while a house cleaner cleans for the person who already lives
          there.
        </p>
        <p>
          The difference shows up on a same-day turnover. The crew has a few hours between an 11 a.m.
          checkout and a 4 p.m. check-in, a stranger&apos;s mess to reset, supplies to count, and a
          host who needs to know it is done without driving over. Look for someone who talks about
          guest reviews, turnover windows, and photo proof, not just square footage. Our{' '}
          <Link href={guidePath('vacation-rental-turnover-checklist')}>
            turnover checklist
          </Link>{' '}
          shows the full scope to hold any cleaner to.
        </p>
      </>
    ),
  },
  {
    id: 'questions-to-ask',
    title: 'Questions to ask before you hire',
    content: (
      <>
        <p>Ask questions that show how the cleaner works on a bad day, not a good one.</p>
        <ol>
          <li>How do you show me each turnover was finished? Can I see a sample photo set?</li>
          <li>What happens if you miss something, or a guest complains about cleanliness?</li>
          <li>Who covers if your cleaner is sick or you&apos;re double-booked on a Saturday?</li>
          <li>How do you get my schedule: calendar sync, or me texting you?</li>
          <li>Can you send a certificate of insurance, and do you carry workers&apos; comp?</li>
          <li>What exactly does the price include, and what costs extra?</li>
          <li>Who does the laundry, and where?</li>
          <li>How do you report damage, low supplies, or maintenance problems?</li>
          <li>Can you handle same-day and emergency turnovers, and how far ahead do race weeks book?</li>
        </ol>
      </>
    ),
  },
  {
    id: 'red-flags',
    title: 'Red flags',
    content: (
      <>
        <p>
          Walk away from a cleaner who can&apos;t show proof of work, won&apos;t put pricing in
          writing, or has no plan for the day they can&apos;t make it.
        </p>
        <ul>
          <li>No insurance certificate, or &ldquo;we&apos;re covered&rdquo; with nothing on paper</li>
          <li>&ldquo;I&apos;ll text you when it&apos;s done&rdquo; with no photos</li>
          <li>One person and no backup plan for sick days or peak weeks</li>
          <li>Pricing that is &ldquo;it depends&rdquo; with no range and no written quote</li>
          <li>No invoices, or a push for a long contract before a single turnover</li>
          <li>They never ask about your check-in time, guest count, or linens</li>
        </ul>
      </>
    ),
  },
  {
    id: 'photo-verification',
    title: 'Insist on photo verification',
    content: (
      <>
        <p>
          Photo verification is the best way to manage a cleaner you can&apos;t watch, because it
          turns every turnover into a record you can check in a couple of minutes.
        </p>
        <p>
          Ask for a fixed set of checkpoints, not a handful of flattering shots: each bed, each
          bathroom, the kitchen and appliance interiors, outdoor areas, the restocked supplies, and
          the locked door. The same angles every time make a miss obvious and give you a dated record
          of condition between guests. We send a 30-point photo set with every turnover, and if
          anything on it was missed, we come back and fix it at no charge.
        </p>
        <GuideFigure
          src="/images/cleanSink_divas.jpg"
          alt="Close-up of a polished stainless kitchen faucet and sink after a vacation rental turnover"
          caption="Close-ups like this faucet are part of a real checkpoint set: the details a guest notices first."
          orientation="portrait"
        />
      </>
    ),
  },
  {
    id: 'backup-capacity',
    title: 'Backup capacity and peak weeks',
    content: (
      <>
        <p>
          Ask how many crews the company runs and what happens on the busiest checkout days,
          because in Volusia those days are the same for everyone.
        </p>
        <p>
          Race weeks, holidays, and spring snowbird departures stack turnovers onto the same
          mornings. A solo cleaner can be excellent until the day they&apos;re sick. We keep a 24/7
          line with a 2-hour dispatch goal during business hours, hosts who book with us through the
          year get priority in event weeks, and{' '}
          <Link href="/services/property-management">property management</Link> clients on our Pro
          and Enterprise tiers get reserved peak-week capacity. See our{' '}
          <Link href={guidePath('daytona-race-week-bike-week-rental-prep')}>
            race week prep guide
          </Link>{' '}
          for how early to book.
        </p>
      </>
    ),
  },
  {
    id: 'insurance',
    title: 'Insurance and paperwork',
    content: (
      <>
        <p>
          Get a certificate of insurance before the first job, and confirm workers&apos;
          compensation for any company with four or more employees, which Florida requires of
          non-construction employers.
        </p>
        <p>
          General liability is the coverage that typically responds if a cleaner damages your
          property, and workers&apos; compensation covers the cleaner if they are hurt on the job.
          Florida&apos;s Division of Workers&apos; Compensation says non-construction employers with
          four or more employees, full-time or part-time, must carry it, and its public Proof of
          Coverage search lets you check a company yourself. The state&apos;s Insurance Consumer
          Advocate warns that if someone you hire to work on your property lacks proper coverage,
          you could be held responsible for an injury or damage, and says contractors should be
          willing to show certificates for both general liability and workers&apos; comp.
        </p>
        <p>
          Dazzle Divas Cleaning LLC is licensed and insured, and locally owned in Volusia County.
          Read more <Link href="/about">about our team</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'calendar-and-pricing',
    title: 'Calendar sync and pricing transparency',
    content: (
      <>
        <p>
          The cleaner should pull turnovers from your booking calendar automatically and give you a
          price you can see before you book.
        </p>
        <p>
          Calendar sync removes the most common failure in a host-cleaner relationship: a booking
          nobody told the cleaner about. We sync with Airbnb, VRBO, Hospitable, Guesty, and Vacasa
          calendars and schedule turnovers around guest stays.
        </p>
        <p>
          On price, our turnover rates are published by bedroom count: $100&ndash;140 for a studio or
          one-bedroom, $140&ndash;200 for two bedrooms, and $200&ndash;280 for three and up, with
          custom quotes for four-plus bedrooms and luxury homes. Every job is priced per job, never
          by the hour, and there is no same-day surcharge. See the full breakdown on our{' '}
          <Link href="/pricing">pricing page</Link>, and our{' '}
          <Link href={guidePath('airbnb-cleaning-fee-florida')}>cleaning fee guide</Link> for turning
          that price into a guest-facing fee.
        </p>
      </>
    ),
  },
  {
    id: 'trial-turnover',
    title: 'Start with a trial turnover',
    content: (
      <>
        <p>
          Before you hand over the whole calendar, book one or two turnovers and judge the cleaner
          on the result, the photos, and the communication.
        </p>
        <ul>
          <li>Walk the unit yourself after the first turnover and compare it to the photo set.</li>
          <li>Make the second one a tight same-day window, the job that matters most.</li>
          <li>
            Notice how they report issues: a low supply, a stain, a dripping faucet. Silence is a
            bad sign.
          </li>
          <li>Check that the invoice matches the quote, line for line.</li>
        </ul>
        <p>
          If both go well, sync the calendar and set your par levels. Our{' '}
          <Link href={guidePath('vacation-rental-turnover-checklist')}>turnover checklist</Link>{' '}
          gives you the standard to judge against.
        </p>
      </>
    ),
  },
];

const sources = [
  {
    title: 'Coverage Requirements for employers',
    publisher: 'Florida Department of Financial Services, Division of Workers’ Compensation',
    href: 'https://www.myfloridacfo.com/division/wc/employer/coverage-requirements',
  },
  {
    title: 'Employer Coverage Requirements (full-time and part-time employees)',
    publisher: 'Florida Department of Financial Services, Division of Workers’ Compensation',
    href: 'https://myfloridacfo.com/division/wc/employee/employer-coverage-requirements',
  },
  {
    title: 'Proof of Coverage data portal',
    publisher: 'Florida Division of Workers’ Compensation',
    href: 'https://dwcdataportal.fldfs.com/POCData.aspx',
  },
  {
    title: 'Resources: verifying contractor insurance and workers’ compensation',
    publisher: 'Florida Department of Financial Services, Insurance Consumer Advocate',
    href: 'https://myfloridacfo.com/division/ica/resources',
  },
];

const faqs = [
  {
    question: 'What should I ask a vacation rental cleaner before hiring?',
    answer:
      'Ask how they prove each turnover was done, what happens if they miss something, who covers if their cleaner is out, how they get your booking calendar, whether they can send a certificate of insurance, and exactly what their price includes.',
  },
  {
    question: 'Do cleaning companies in Florida need workers’ compensation?',
    answer:
      'Florida requires workers’ compensation for non-construction employers with four or more employees, full-time or part-time. You can check a company’s coverage in the Division of Workers’ Compensation’s public Proof of Coverage search.',
  },
  {
    question: 'How much does a vacation rental cleaner cost in Volusia County?',
    answer:
      'Our published turnover pricing is $100–140 for a studio or one-bedroom, $140–200 for two bedrooms, and $200–280 for three bedrooms and up, with custom quotes for larger and luxury homes. Whoever you hire, get the price and what it includes in writing before the first turnover.',
  },
  {
    question: 'What happens if a cleaner misses something?',
    answer:
      'With us, every turnover ends with a 30-point photo set sent to you before the crew leaves. If anything was missed, we return and fix it at no charge.',
  },
];

const services = [
  {
    icon: Users,
    title: 'About Dazzle Divas',
    description:
      'Locally owned, licensed, and insured. Meet the team behind 550+ properties cleaned a year.',
    href: '/about',
  },
  {
    icon: DollarSign,
    title: 'Pricing',
    description:
      'Turnover prices by bedroom count, what moves a quote, and volume discounts for three or more properties.',
    href: '/pricing',
  },
];

export default function HireCleanerGuide() {
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
        title: 'Interview us with these questions',
        subtitle:
          'Ask us anything on this list. Free quote, no commitment, and a reply within 24 hours.',
      }}
    />
  );
}
