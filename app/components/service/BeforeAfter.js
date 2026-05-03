'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Reveal from '../motion/Reveal';

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before cleaning',
  afterAlt = 'After cleaning',
  caption,
}) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const clipPercent = useTransform(x, (val) => {
    if (!width) return 50;
    return Math.max(0, Math.min(100, ((val + width / 2) / width) * 100));
  });
  const clipPath = useTransform(clipPercent, (p) => `inset(0 ${100 - p}% 0 0)`);
  const handleLeft = useTransform(clipPercent, (p) => `${p}%`);

  const onContainerReady = (node) => {
    containerRef.current = node;
    if (node) {
      const rect = node.getBoundingClientRect();
      setWidth(rect.width);
      x.set(0);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <span className="text-sm font-semibold tracking-wider uppercase text-diva-cyan-600">
              See the difference
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Real before &amp; after
            </h2>
          </Reveal>
          {caption && (
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{caption}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.15}>
          <div
            ref={onContainerReady}
            className="relative aspect-[4/3] md:aspect-[16/10] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-200 select-none"
          >
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
            <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold tracking-wide uppercase">
              After
            </span>
            <motion.div
              className="absolute inset-0"
              style={{ clipPath }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={beforeSrc}
                  alt={beforeAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-bold tracking-wide uppercase">
                  Before
                </span>
              </div>
            </motion.div>
            <motion.div
              drag="x"
              dragConstraints={{ left: -width / 2, right: width / 2 }}
              dragElastic={0}
              dragMomentum={false}
              style={{ x, left: handleLeft }}
              className="absolute top-0 bottom-0 -ml-6 w-12 cursor-ew-resize touch-none flex items-center justify-center"
              aria-label="Drag to compare"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white" />
              <div className="relative w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden
                  className="text-slate-700"
                >
                  <path
                    fill="currentColor"
                    d="M7 4l-5 6 5 6V4zm6 0v12l5-6-5-6z"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
