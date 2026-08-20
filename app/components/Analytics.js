// app/components/Analytics.js
'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { track, EVENTS } from '../lib/analytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Site-wide measurement.
 *
 * - Vercel Analytics + Speed Insights need no configuration; they activate
 *   automatically once the project is deployed on Vercel.
 * - GA4 only loads if NEXT_PUBLIC_GA_MEASUREMENT_ID is set, so nothing breaks
 *   locally or in preview.
 * - Phone and email clicks are tracked with a single delegated listener rather
 *   than wiring a handler into every `tel:` link across the site.
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="tel:"], a[href^="mailto:"]');
      if (!link) return;
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
