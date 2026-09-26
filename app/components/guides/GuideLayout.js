import Link from 'next/link';
import { BookOpen, CheckCircle2, ListChecks } from 'lucide-react';
import GuideHeader from './GuideHeader';
import ServiceFAQ from '../service/ServiceFAQ';
import CrossSell from '../service/CrossSell';
import CTABand from '../service/CTABand';
import {
  SITE_URL,
  GUIDES_PATH,
  getGuide,
  guidePath,
  formatMonthYear,
} from './guides';

// Server component. Keep 'use client' off: pages pass lucide icons in
// `services`, and those must stay on the server side of the RSC boundary
// until CrossSell (also a server component) renders them.
//
// Props:
//   slug       registry key in ./guides.js (title, dates, reading time)
//   takeaways  array of strings or nodes for the "Key takeaways" box
//   intro      optional node rendered between the takeaways and section 1
//   sections   [{ id, title, content }] rendered as <h2> sections; the
//              table of contents is built from this, so it can't drift.
//              Each section's first <p> is the one-sentence answer.
//   sources    optional [{ title, publisher, href }] for the Sources list
//   faqs       [{ question, answer }] plain strings (feeds FAQPage JSON-LD)
//   related    guide slugs for the "keep reading" cards
//   services   [{ icon, title, description, href }] service/city cards
//   cta        optional { title, subtitle } for the closing CTABand

const PROSE = [
  'mt-4 text-lg leading-relaxed text-slate-700',
  '[&_p]:mt-5',
  '[&>p:first-child]:mt-4 [&>p:first-child]:font-medium [&>p:first-child]:text-slate-900',
  '[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6',
  '[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6',
  '[&_li]:pl-1 [&_li::marker]:text-diva-pink-500',
  '[&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:text-slate-900',
  '[&_strong]:font-semibold [&_strong]:text-slate-900',
  '[&_a]:font-medium [&_a]:text-diva-pink-700 [&_a]:underline [&_a]:decoration-diva-pink-300 [&_a]:underline-offset-2',
  '[&_a:hover]:text-diva-pink-800 [&_a:hover]:decoration-diva-pink-600',
].join(' ');

const TOC_LINK =
  'block rounded-lg px-3 py-2 text-sm leading-snug text-slate-600 transition-colors hover:bg-diva-pink-50 hover:text-diva-pink-700';

function TocList({ items }) {
  return (
    <ol className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={TOC_LINK}>
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

function KeyTakeaways({ items }) {
  return (
    <aside
      aria-labelledby="key-takeaways-heading"
      className="rounded-2xl border border-diva-pink-200 bg-diva-pink-50/60 p-6 md:p-8"
    >
      <h2
        id="key-takeaways-heading"
        className="flex items-center gap-2 text-lg font-bold text-slate-900 md:text-xl"
      >
        <ListChecks size={22} className="text-diva-pink-600" aria-hidden />
        Key takeaways
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-slate-700">
            <CheckCircle2
              size={20}
              className="mt-1 flex-shrink-0 text-diva-pink-600"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Sources({ items, reviewed }) {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="mt-16 scroll-mt-28 border-t border-slate-200 pt-10"
    >
      <h2 id="sources-heading" className="text-2xl font-bold text-slate-900">
        Sources
      </h2>
      <p className="mt-3 leading-relaxed text-slate-600">
        We checked each source when we last reviewed this guide ({reviewed}). Rules, rates, and
        event dates change, so confirm with the agency or organizer before you rely on them.
      </p>
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-slate-700 marker:text-slate-400">
        {items.map((source) => (
          <li key={source.href} className="pl-1 leading-relaxed">
            <a
              href={source.href}
              className="break-words font-medium text-diva-pink-700 underline decoration-diva-pink-300 underline-offset-2 hover:text-diva-pink-800"
            >
              {source.title}
            </a>
            <span className="text-slate-500"> &mdash; {source.publisher}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function GuideLayout({
  slug,
  takeaways = [],
  intro,
  sections = [],
  sources = [],
  faqs = [],
  related = [],
  services = [],
  cta,
}) {
  const guide = getGuide(slug);
  if (!guide) throw new Error(`Unknown guide slug: ${slug}`);

  const path = guidePath(slug);
  const url = `${SITE_URL}${path}`;
  const reviewed = formatMonthYear(guide.lastReviewed);

  const toc = [
    ...sections.map(({ id, title }) => ({ id, title })),
    ...(sources.length ? [{ id: 'sources', title: 'Sources' }] : []),
    ...(faqs.length ? [{ id: 'faq', title: 'FAQ' }] : []),
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Guides', href: GUIDES_PATH },
    { name: guide.title },
  ];

  const relatedCards = related
    .map(getGuide)
    .filter(Boolean)
    .map((g) => ({
      icon: BookOpen,
      title: g.title,
      description: g.summary,
      href: guidePath(g.slug),
    }));

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: guide.headline,
    description: guide.description,
    image: [`${SITE_URL}${guide.image}`],
    datePublished: guide.published,
    dateModified: guide.lastReviewed,
    inLanguage: 'en-US',
    articleSection: 'Host guides',
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Dazzle Divas Cleaning',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Dazzle Divas Cleaning LLC',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/Divas_logo-pink.jpg`,
      },
    },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    ...(sources.length
      ? {
          citation: sources.map((source) => ({
            '@type': 'CreativeWork',
            name: source.title,
            publisher: source.publisher,
            url: source.href,
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <article>
        <GuideHeader
          eyebrow={`Host guide · ${guide.category}`}
          title={guide.headline}
          dek={guide.dek}
          breadcrumbs={breadcrumbs}
        >
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/75">
            <span>
              By{' '}
              <Link
                href="/about"
                className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
              >
                Dazzle Divas Cleaning
              </Link>
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>
              Last reviewed <time dateTime={guide.lastReviewed}>{reviewed}</time>
            </span>
            <span aria-hidden="true">&middot;</span>
            <span>{guide.readingMinutes} min read</span>
          </p>
        </GuideHeader>

        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 xl:gap-16">
            <aside className="hidden lg:col-start-2 lg:row-start-1 lg:block">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  On this page
                </p>
                <div className="mt-3 border-l border-slate-200 pl-2">
                  <TocList items={toc} />
                </div>
              </nav>
            </aside>

            <div className="min-w-0 max-w-3xl lg:col-start-1 lg:row-start-1">
              {takeaways.length > 0 && <KeyTakeaways items={takeaways} />}

              <details className="group mt-8 rounded-2xl border border-slate-200 bg-slate-50 lg:hidden">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between px-5 py-3 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  On this page
                  <span
                    aria-hidden
                    className="text-diva-pink-600 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <nav aria-label="On this page" className="px-2 pb-3">
                  <TocList items={toc} />
                </nav>
              </details>

              {intro}

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="mt-14 scroll-mt-28"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl"
                  >
                    {section.title}
                  </h2>
                  <div className={PROSE}>{section.content}</div>
                </section>
              ))}

              {sources.length > 0 && <Sources items={sources} reviewed={reviewed} />}
            </div>
          </div>
        </div>

        {faqs.length > 0 && (
          <div id="faq" className="scroll-mt-24 border-t border-slate-100">
            <ServiceFAQ eyebrow="Quick answers" title="Frequently asked questions" items={faqs} />
          </div>
        )}
      </article>

      {relatedCards.length + services.length > 0 && (
        <CrossSell title="Related guides and services" items={[...relatedCards, ...services]} />
      )}

      <CTABand
        title={cta?.title || 'Want turnovers you never have to double-check?'}
        subtitle={
          cta?.subtitle ||
          'Tell us about your property and booking calendar. Free quote, no commitment, and a reply within 24 hours.'
        }
      />
    </>
  );
}
