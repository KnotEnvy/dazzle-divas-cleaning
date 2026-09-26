import { Check, Clock } from 'lucide-react';
import Reveal from '../motion/Reveal';

// Server component: takes lucide icons as props, so it must NOT be 'use client'.
// For services with no published price. Each card states the quote promise
// and lists what drives the price, instead of inventing a number.
export default function CustomQuoteServices({
  id,
  eyebrow,
  title,
  lead,
  services,
  quoteLabel = 'Custom quote within 24 hours',
  factorsLabel = 'Price factors',
}) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-cyan-700">
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

        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <li key={service.name}>
                <Reveal delay={0.05 * i} className="h-full">
                  <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 hover:border-diva-pink-300 hover:shadow-colored-pink transition-all">
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <div className="w-11 h-11 rounded-xl bg-diva-pink-50 text-diva-pink-600 flex items-center justify-center flex-shrink-0">
                          <Icon size={22} aria-hidden />
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                    </div>
                    <p className="mt-4 text-slate-600 leading-relaxed">{service.summary}</p>
                    <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-diva-gold-200 bg-diva-gold-50 px-3 py-1 text-sm font-semibold text-diva-gold-800">
                      <Clock size={14} aria-hidden />
                      {quoteLabel}
                    </p>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      {factorsLabel}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.factors.map((factor) => (
                        <li key={factor} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check
                            size={16}
                            className="mt-0.5 text-diva-pink-500 flex-shrink-0"
                            aria-hidden
                          />
                          <span>{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
