// app/components/Analytics.js
'use client';

import { useEffect } from 'react';
import Script from 'next/script';
// Use the /next entrypoints, not /react — they hook into next/navigation so
// client-side route changes are reported as pageviews. This is what the
// Vercel dashboard's setup instructions point at.
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { track, EVENTS } from '../lib/analytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// True for links that lead to Google reviews: the same-origin /review and
// /reviews short links (app/review/route.js, app/reviews/route.js), with or
// without a trailing slash or query string, and any raw g.page link. The
// g.page test is on the parsed hostname, so an href that merely contains the
// substring (e.g. "/catalog.pages") does not match.
function isReviewHref(href) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.hostname === 'g.page') return true;
    return url.origin === window.location.origin && /^\/reviews?\/?$/.test(url.pathname);
  } catch {
    return false;
  }
}

function trackReviewClick(target) {
  const link = target.closest?.('a[href]');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  if (!isReviewHref(href)) return;
  track(EVENTS.REVIEW_CLICK, {
    destination: href,
    location: window.location.pathname,
  });
}

/**
 * Site-wide measurement.
 *
 * - Vercel Analytics + Speed Insights need no configuration; they activate
 *   automatically once the project is deployed on Vercel.
 * - GA4 only loads if NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so nothing breaks
 *   locally or in preview.
 * - Phone, email, and review-link clicks are tracked with a single delegated
 *   listener rather than wiring a handler into every link across the site.
 *   Do not add per-link onClick tracking; it would double-count.
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) {
        trackReviewClick(e.target);
        return;
      }
      const href = link.getAttribute('href') || '';
      const isCall = href.startsWith('tel:');
      track(isCall ? EVENTS.CALL_CLICK : EVENTS.EMAIL_CLICK, {
        destination: href,
        location: window.location.pathname,
      });
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />

      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
