import Link from 'next/link';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import Reveal from '../motion/Reveal';

// Server component. Quotes real Google reviews verbatim (or trimmed with an
// ellipsis). Never paraphrase a review or attach a quote to the wrong person.
export default function ReviewQuotes({
  id,
  eyebrow,
  title,
  lead,
  reviews,
  primaryLink,
  secondaryLink,
}) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-pink-600">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h2
              id={headingId}
              className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              {title}
            </h2>
          </Reveal>
          {lead && (
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{lead}</p>
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <Reveal key={review.author} delay={0.1 * i} className="h-full">
              <figure className="h-full flex flex-col rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm">
                <div
                  role="img"
                  aria-label={`Rated ${review.rating} out of 5 stars`}
                  className="flex gap-1 text-diva-gold-500"
                >
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} size={18} fill="currentColor" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 flex-grow text-lg text-slate-800 leading-relaxed">
                  <p>&ldquo;{review.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-5">
                  <span className="block font-semibold text-slate-900">{review.author}</span>
                  <span className="block text-sm text-slate-600">{review.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {(primaryLink || secondaryLink) && (
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryLink && (
                <Link
                  href={primaryLink.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white font-semibold hover:shadow-glow-pink transition-shadow"
                >
                  {primaryLink.label}
                  <ArrowRight size={16} aria-hidden />
                </Link>
              )}
              {secondaryLink && (
                <a
                  href={secondaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-900 font-semibold hover:border-diva-pink-400 hover:text-diva-pink-600 transition-colors"
                >
                  {secondaryLink.label}
                  <ExternalLink size={16} aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
