'use client';

import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function ServiceFAQ({ eyebrow, title, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
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
        </div>

        <LayoutGroup>
          <div className="space-y-3">
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={item.question}
                  layout
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-diva-pink-300 bg-diva-pink-50/30'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <motion.button
                    layout
                    type="button"
                    id={`service-faq-trigger-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-faq-panel-${i}`}
                  >
                    <span className="text-base md:text-lg font-semibold text-slate-900">
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-diva-pink-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                      aria-hidden
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </motion.button>
                  {/* Answer stays mounted so crawlers and AI assistants can
                      read it without a click. CSS-only open/close. */}
                  <div
                    id={`service-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`service-faq-trigger-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-slate-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
