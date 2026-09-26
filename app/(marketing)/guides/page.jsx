import Link from 'next/link';
import { ArrowRight, Clock, CalendarCheck } from 'lucide-react';
import GuideHeader from '../../components/guides/GuideHeader';
import CTABand from '../../components/service/CTABand';
import { StaggerGroup, StaggerItem } from '../../components/motion/Reveal';
import {
  SITE_URL,
  GUIDES,
  GUIDES_INDEX,
  GUIDES_PATH,
  GUIDE_CATEGORIES,
  guidePath,
  formatMonthYear,
} from '../../components/guides/guides';

export const metadata = {
  title: GUIDES_INDEX.title,
  description: GUIDES_INDEX.description,
  alternates: { canonical: GUIDES_PATH },
  openGraph: {
    title: GUIDES_INDEX.title,
    description: GUIDES_INDEX.description,
    url: `${SITE_URL}${GUIDES_PATH}`,
    siteName: 'Dazzle Divas Cleaning LLC',
    locale: 'en_US',
  },
};

const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Guides' }];

const collectionLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${SITE_URL}${GUIDES_PATH}#collection`,
  name: GUIDES_INDEX.headline,
  description: GUIDES_INDEX.description,
  url: `${SITE_URL}${GUIDES_PATH}`,
  inLanguage: 'en-US',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: GUIDES.length,
    itemListElement: GUIDES.map((guide, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}${guidePath(guide.slug)}`,
      name: guide.headline,
    })),
  },
};

function GuideCard({ guide }) {
  return (
    <Link
      href={guidePath(guide.slug)}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-diva-pink-300 hover:shadow-colored-pink md:p-7"
    >
      <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-diva-pink-700">
        {guide.headline}
      </h3>
      <p className="mt-3 leading-relaxed text-slate-600">{guide.summary}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-5 text-sm text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} aria-hidden />
          {guide.readingMinutes} min read
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarCheck size={14} aria-hidden />
          Reviewed <time dateTime={guide.lastReviewed}>{formatMonthYear(guide.lastReviewed)}</time>
        </span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-diva-pink-600 transition-all group-hover:gap-2">
        Read the guide
        <ArrowRight size={14} aria-hidden />
      </span>
    </Link>
  );
}

export default function GuidesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <GuideHeader
        eyebrow="Host guides"
        title={GUIDES_INDEX.headline}
        dek="Straight answers to the questions Airbnb and VRBO hosts ask us most, from turnover checklists and cleaning fees to local rental rules, race weeks, hurricanes, and snowbird season."
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-700">
            Every guide opens with the short answer, then the detail behind it. They&apos;re written
            by the <Link href="/about" className="font-medium text-diva-pink-700 underline decoration-diva-pink-300 underline-offset-2 hover:text-diva-pink-800">Dazzle Divas Cleaning</Link>{' '}
            team from the turnovers we run across Volusia County, and the guides on rules, events,
            and storms link to the official sources we checked, with the date we last reviewed them.
          </p>
        </div>

        {GUIDE_CATEGORIES.map((category) => {
          const guides = GUIDES.filter((guide) => guide.category === category);
          if (!guides.length) return null;
          const headingId = `guides-${category.toLowerCase().replace(/[^a-z]+/g, '-')}`;
          return (
            <section key={category} aria-labelledby={headingId} className="mt-14">
              <h2 id={headingId} className="text-2xl font-bold text-slate-900 md:text-3xl">
                {category}
              </h2>
              <StaggerGroup className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide) => (
                  <StaggerItem key={guide.slug} className="h-full">
                    <GuideCard guide={guide} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </section>
          );
        })}
      </div>

      <CTABand
        title="Rather hand the turnovers to a pro?"
        subtitle="Photo-verified vacation rental cleaning across Volusia County. Free quote, no commitment, and a reply within 24 hours."
      />
    </>
  );
}
