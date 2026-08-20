// app/not-found.js

import Link from 'next/link';
import { Home, Phone, MapPin, Sparkles, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found',
  description:
    'That page does not exist. Find vacation rental cleaning services and service areas across Volusia County, Florida.',
  robots: { index: false, follow: true },
};

const destinations = [
  { href: '/', icon: Home, label: 'Home', detail: 'Start over from the top' },
  {
    href: '/services/vacation-rental-turnover',
    icon: Sparkles,
    label: 'Vacation rental turnover',
    detail: '2-4 hour guest-ready turnovers',
  },
  {
    href: '/cleaning/daytona-beach',
    icon: MapPin,
    label: 'Service areas',
    detail: 'Daytona, Ormond, New Smyrna',
  },
  { href: '/faq', icon: HelpCircle, label: 'FAQ', detail: 'Booking, pricing, and scope' },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-6 py-20 md:py-28 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-diva-pink-600">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-5 text-lg text-slate-600 max-w-xl">
          The link may be out of date, or the page may have moved. Here are the
          places most people are looking for.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {destinations.map(({ href, icon: Icon, label, detail }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-diva-pink-300 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-bold text-slate-900 group-hover:text-diva-pink-700">
                  {label}
                </span>
                <span className="block text-sm text-slate-600">{detail}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+13863015775"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-pink-700 px-6 font-bold text-white transition-shadow hover:shadow-lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call (386) 301-5775
          </a>
          <Link
            href="/#contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-slate-300 px-6 font-bold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white"
          >
            Request a free quote
          </Link>
        </div>
      </div>
    </main>
  );
}
