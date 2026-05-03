'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Plus, Minus, Search } from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function FAQAccordion({ items, categories }) {
  const allLabel = 'All';
  const [activeCategory, setActiveCategory] = useState(allLabel);
  const [query, setQuery] = useState('');
  const [openKey, setOpenKey] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === allLabel || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });
  }, [items, activeCategory, query]);

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
    <section className="py-16 md:py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-diva-pink-400 focus:ring-2 focus:ring-diva-pink-200 outline-none transition-all"
              aria-label="Search FAQ"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            {[allLabel, ...categories].map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? 'bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white shadow-glow-pink'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                  aria-pressed={active}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        <LayoutGroup>
          <motion.div layout className="mt-10 space-y-3">
            {filtered.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No questions match your search. Try a different term or category.
              </div>
            )}
            {filtered.map((item) => {
              const key = item.question;
              const isOpen = openKey === key;
              const slug = key
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
              return (
                <motion.div
                  key={key}
                  layout
                  id={slug}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-diva-pink-300 bg-diva-pink-50/30'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <motion.button
                    layout
                    type="button"
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex flex-col gap-1">
                      {item.category && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-diva-pink-600">
                          {item.category}
                        </span>
                      )}
                      <span className="text-base md:text-lg font-semibold text-slate-900">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`flex-shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? 'bg-diva-pink-500 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                      aria-hidden
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-slate-700 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
