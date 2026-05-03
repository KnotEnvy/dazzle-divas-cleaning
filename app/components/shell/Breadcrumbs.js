'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';

export default function Breadcrumbs({ items, theme = 'light' }) {
  if (!items?.length) return null;

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const entry = {
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
      };
      if (item.href) {
        entry.item = `${SITE_URL}${item.href}`;
      }
      return entry;
    }),
  };

  const linkColor =
    theme === 'dark'
      ? 'text-white/70 hover:text-diva-pink-300'
      : 'text-slate-600 hover:text-diva-pink-600';
  const currentColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const sepColor = theme === 'dark' ? 'text-white/40' : 'text-slate-400';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.name}-${i}`} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <Link href={item.href} className={`${linkColor} transition-colors`}>
                    {item.name}
                  </Link>
                ) : (
                  <span className={currentColor} aria-current={isLast ? 'page' : undefined}>
                    {item.name}
                  </span>
                )}
                {!isLast && <ChevronRight size={14} className={sepColor} aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
