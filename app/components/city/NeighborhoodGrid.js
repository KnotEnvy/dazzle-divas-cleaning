import { MapPin } from 'lucide-react';
import Reveal, { StaggerGroup, StaggerItem } from '../motion/Reveal';

export default function NeighborhoodGrid({ eyebrow, title, subtitle, neighborhoods }) {
  return (
    <section className="py-20 md:py-28 bg-white">
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
          stagger={0.05}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {neighborhoods.map((n) => (
            <StaggerItem
              key={n}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-diva-pink-300 hover:bg-white transition-colors"
            >
              <MapPin
                size={16}
                className="text-diva-pink-500 flex-shrink-0"
                aria-hidden
              />
              <span className="text-sm font-medium text-slate-800 truncate">{n}</span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
