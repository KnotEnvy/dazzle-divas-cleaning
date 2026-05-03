import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal, { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function PricingGrid({
  eyebrow,
  title,
  subtitle,
  tiers,
  footnote,
  ctaHref = '/#contact',
  ctaLabel = 'Get a custom quote',
}) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-gold-600">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {title}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{subtitle}</p>
            </Reveal>
          )}
        </div>

        <StaggerGroup
          stagger={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tiers.map((tier) => (
            <StaggerItem
              key={tier.name}
              className={`relative rounded-3xl border p-7 flex flex-col transition-transform hover:-translate-y-1 ${
                tier.featured
                  ? 'border-diva-pink-300 bg-gradient-to-br from-white to-diva-pink-50 shadow-colored-pink'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white text-xs font-bold tracking-wide uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
              {tier.tagline && (
                <p className="mt-1 text-sm text-slate-500">{tier.tagline}</p>
              )}
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">
                  {tier.price}
                </span>
                {tier.priceSuffix && (
                  <span className="text-sm text-slate-500">{tier.priceSuffix}</span>
                )}
              </div>
              {tier.priceNote && (
                <p className="mt-2 text-sm text-slate-500">{tier.priceNote}</p>
              )}
              <ul className="mt-6 space-y-2.5 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check
                      size={16}
                      className="mt-0.5 text-diva-pink-500 flex-shrink-0"
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={ctaHref}
                className={`mt-7 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold transition-all ${
                  tier.featured
                    ? 'bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white hover:shadow-glow-pink'
                    : 'border border-slate-300 text-slate-900 hover:border-diva-pink-400 hover:text-diva-pink-600'
                }`}
              >
                {ctaLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {footnote && (
          <Reveal delay={0.2}>
            <p className="mt-10 text-sm text-slate-500 text-center max-w-2xl mx-auto">
              {footnote}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
