import Reveal, { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function LocalContext({ eyebrow, title, body, highlights }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            {eyebrow && (
              <Reveal>
                <span className="text-sm font-semibold tracking-wider uppercase text-diva-pink-600">
                  {eyebrow}
                </span>
              </Reveal>
            )}
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                {title}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-lg text-slate-700 leading-relaxed">
              {body.map((para, i) => (
                <Reveal key={i} delay={0.15 + i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {highlights && highlights.length > 0 && (
            <StaggerGroup
              stagger={0.08}
              className="space-y-3 lg:sticky lg:top-28"
            >
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <StaggerItem
                    key={h.label}
                    className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:border-diva-pink-300 hover:bg-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-diva-pink-100 text-diva-pink-600 flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon size={20} aria-hidden />}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{h.label}</div>
                      {h.detail && (
                        <div className="text-sm text-slate-600 mt-0.5">{h.detail}</div>
                      )}
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          )}
        </div>
      </div>
    </section>
  );
}
