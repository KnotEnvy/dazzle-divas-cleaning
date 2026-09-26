import Image from 'next/image';
import { Info } from 'lucide-react';

// Server components used inside guide sections. Keep 'use client' off.

// Article column widths (see GuideLayout): calc(100vw - 48px) below md,
// 720px at md, 672px at lg (sidebar takes the rest), 768px (max-w-3xl) at xl+.
const LANDSCAPE_SIZES =
  '(min-width: 1280px) 768px, (min-width: 1024px) 672px, (min-width: 768px) 720px, calc(100vw - 48px)';
// Portrait figures are capped at max-w-sm (384px) so they don't fill a screen.
const PORTRAIT_SIZES = '(min-width: 640px) 384px, calc(100vw - 48px)';

export function GuideFigure({ src, alt, caption, orientation = 'landscape' }) {
  const portrait = orientation === 'portrait';
  return (
    <figure className={`mt-10 ${portrait ? 'mx-auto max-w-sm' : ''}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-slate-100 ${
          portrait ? 'aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={portrait ? PORTRAIT_SIZES : LANDSCAPE_SIZES}
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">{caption}</figcaption>
      )}
    </figure>
  );
}

export function Callout({ title, children }) {
  return (
    <div className="mt-8 flex gap-4 rounded-2xl border border-diva-cyan-200 bg-diva-cyan-50/70 p-5 md:p-6">
      <Info size={22} className="mt-0.5 flex-shrink-0 text-diva-cyan-700" aria-hidden />
      <div className="text-base leading-relaxed text-slate-700 [&>*:first-child]:mt-0">
        {title && <p className="font-semibold text-slate-900">{title}</p>}
        {children}
      </div>
    </div>
  );
}

// Simple comparison table. The first cell of each row is a row header.
// Scrolls horizontally inside its own box on narrow screens so the page
// itself never scrolls sideways.
export function DataTable({ caption, columns, rows }) {
  return (
    <div
      className="mt-8 overflow-x-auto rounded-2xl border border-slate-200"
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      <table className="w-full min-w-[34rem] text-left text-base">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-slate-50 text-sm uppercase tracking-wide text-slate-600">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, j) =>
                j === 0 ? (
                  <th
                    key={j}
                    scope="row"
                    className="px-4 py-3 align-top font-semibold text-slate-900"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3 align-top leading-relaxed text-slate-700">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
