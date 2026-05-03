'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function StickyQuotePill() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400, 600], [0, 0, 1]);
  const y = useTransform(scrollY, [0, 400, 600], [60, 60, 0]);
  const pointerEvents = useTransform(scrollY, (v) => (v > 500 ? 'auto' : 'none'));

  if (prefersReduced) {
    return (
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2 items-end">
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white px-5 py-3 rounded-full font-semibold shadow-glow-pink"
        >
          Get a Free Quote
          <ArrowRight size={16} aria-hidden />
        </a>
      </div>
    );
  }

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 items-end"
    >
      <a
        href="/#contact"
        className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white px-5 py-3 rounded-full font-semibold shadow-glow-pink hover:shadow-2xl transition-shadow"
      >
        Get a Free Quote
        <ArrowRight size={16} aria-hidden />
      </a>
      <a
        href="tel:+13863015775"
        aria-label="Call (386) 301-5775"
        className="inline-flex items-center justify-center w-14 h-14 md:w-12 md:h-12 bg-white text-diva-pink-600 rounded-full shadow-xl border border-diva-pink-200 hover:bg-diva-pink-50 transition-colors"
      >
        <Phone size={22} aria-hidden />
      </a>
    </motion.div>
  );
}
