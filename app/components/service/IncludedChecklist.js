import { Check } from 'lucide-react';
import Reveal, { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function IncludedChecklist({ eyebrow, title, subtitle, categories }) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-cyan-600">
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
          stagger={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <StaggerItem
                key={cat.name}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-diva-pink-300 hover:shadow-colored-pink transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-diva-pink-50 text-diva-pink-600 flex items-center justify-center">
                    {Icon && <Icon size={22} aria-hidden />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{cat.name}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check
                        size={16}
                        className="mt-0.5 text-diva-pink-500 flex-shrink-0"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
