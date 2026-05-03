'use client';

import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';
import ParallaxLayer from '../motion/ParallaxLayer';
import Reveal from '../motion/Reveal';
import MagneticButton from '../motion/MagneticButton';
import Breadcrumbs from '../shell/Breadcrumbs';

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  breadcrumbs,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <ParallaxLayer speed={0.4} className="absolute inset-0">
          <div className="relative h-[120%] w-full -translate-y-[10%]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-diva-pink-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" />
        </div>

        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal delay={0.05}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-diva-pink-500/20 border border-diva-pink-400/40 text-diva-pink-200 text-sm font-medium tracking-wide uppercase">
                {eyebrow}
              </span>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-glow-pink hover:shadow-colored-pink transition-shadow"
              >
                Get a Free Quote
                <ArrowRight size={18} aria-hidden />
              </MagneticButton>
              <MagneticButton
                href="tel:+13863015775"
                strength={0.18}
                className="inline-flex items-center gap-2 border border-white/30 bg-white/5 backdrop-blur-sm text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone size={18} aria-hidden />
                (386) 301-5775
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
