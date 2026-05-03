'use client';

import { Phone, ArrowRight } from 'lucide-react';
import Reveal from '../motion/Reveal';
import MagneticButton from '../motion/MagneticButton';

export default function CTABand({ title, subtitle }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-diva-pink-600 via-diva-pink-500 to-diva-pink-700 text-white">
      <div
        aria-hidden
        className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-diva-cyan-400/20 blur-3xl"
      />
      <div className="relative container mx-auto px-6 text-center max-w-3xl">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <MagneticButton
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-diva-pink-600 px-7 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-shadow"
            >
              Get a Free Quote
              <ArrowRight size={18} aria-hidden />
            </MagneticButton>
            <MagneticButton
              href="tel:+13863015775"
              strength={0.18}
              className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone size={18} aria-hidden />
              (386) 301-5775
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
