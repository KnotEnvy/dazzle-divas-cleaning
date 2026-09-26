import Breadcrumbs from '../shell/Breadcrumbs';

// Server component. Dark title band shared by the /guides index and every
// guide. Renders the page's only <h1>. Breadcrumbs (client) emits the
// BreadcrumbList JSON-LD. No hero photo on purpose: guides are text-first,
// and the h1 paints immediately instead of waiting on an image.
export default function GuideHeader({ eyebrow, title, dek, breadcrumbs, children }) {
  return (
    <header className="relative overflow-hidden bg-slate-900 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-diva-pink-900/70"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-diva-pink-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-diva-cyan-400/10 blur-3xl"
      />
      <div className="relative container mx-auto px-6 pt-12 pb-14 md:pt-16 md:pb-20">
        <Breadcrumbs items={breadcrumbs} theme="dark" />
        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <p className="inline-block rounded-full border border-diva-pink-400/40 bg-diva-pink-500/20 px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-diva-pink-200">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {title}
          </h1>
          {dek && (
            <p className="mt-5 text-lg leading-relaxed text-white/85 md:text-xl">{dek}</p>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}
