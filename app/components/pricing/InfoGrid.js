import Reveal from '../motion/Reveal';

// Server component: takes lucide icons as props, so it must NOT be 'use client'.
// Answer-first section: eyebrow, h2, one-sentence lead, then a list of
// icon + title + body points. Used on /pricing (policy, price factors) and
// /about (standards). `tone="dark"` gives a navy band for visual rhythm.
const COLUMN_CLASSES = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

export default function InfoGrid({
  id,
  eyebrow,
  title,
  lead,
  items,
  footer,
  tone = 'light',
  columns = 3,
}) {
  const dark = tone === 'dark';
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 md:py-28 ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <Reveal>
              <span
                className={`text-sm font-semibold tracking-wider uppercase ${
                  dark ? 'text-diva-pink-300' : 'text-diva-pink-600'
                }`}
              >
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h2
              id={headingId}
              className={`mt-3 text-3xl md:text-5xl font-bold leading-tight ${
                dark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {title}
            </h2>
          </Reveal>
          {lead && (
            <Reveal delay={0.2}>
              <p
                className={`mt-5 text-lg leading-relaxed ${
                  dark ? 'text-white/80' : 'text-slate-600'
                }`}
              >
                {lead}
              </p>
            </Reveal>
          )}
        </div>

        <ul
          role="list"
          className={`grid grid-cols-1 gap-5 ${COLUMN_CLASSES[columns] || COLUMN_CLASSES[3]}`}
        >
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.title}>
                <Reveal delay={0.05 * i} className="h-full">
                  <div
                    className={`h-full rounded-2xl border p-6 transition-colors ${
                      dark
                        ? 'bg-white/5 border-white/10 hover:border-diva-pink-400/50'
                        : 'bg-white border-slate-200 hover:border-diva-pink-300'
                    }`}
                  >
                    {Icon && (
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          dark
                            ? 'bg-diva-pink-500/20 text-diva-pink-300'
                            : 'bg-diva-pink-50 text-diva-pink-600'
                        }`}
                      >
                        <Icon size={22} aria-hidden />
                      </div>
                    )}
                    <h3
                      className={`mt-4 text-lg font-bold ${dark ? 'text-white' : 'text-slate-900'}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed ${
                        dark ? 'text-white/75' : 'text-slate-600'
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {footer && (
          <Reveal delay={0.2}>
            <p
              className={`mt-10 max-w-3xl leading-relaxed ${
                dark ? 'text-white/80' : 'text-slate-700'
              }`}
            >
              {footer}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
