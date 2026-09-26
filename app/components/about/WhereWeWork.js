import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '../motion/Reveal';

// Server component. Cities with a dedicated page render as linked cards;
// the rest are named as plain chips (no link until their page exists).
export default function WhereWeWork({
  id,
  eyebrow,
  title,
  lead,
  featured,
  others,
  othersLabel = 'Also serving',
}) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-gold-600">
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

        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((city, i) => (
            <li key={city.href}>
              <Reveal delay={0.05 * i} className="h-full">
                <Link
                  href={city.href}
                  className="group block h-full p-6 rounded-2xl border border-slate-200 bg-white hover:border-diva-pink-300 hover:shadow-colored-pink transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-diva-pink-500 to-diva-pink-600 text-white flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{city.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{city.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-diva-pink-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    {city.cta}
                    <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {others?.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                {othersLabel}
              </p>
              <ul role="list" className="mt-4 flex flex-wrap gap-3">
                {others.map((name) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800"
                  >
                    <MapPin size={16} className="text-diva-pink-500 flex-shrink-0" aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
