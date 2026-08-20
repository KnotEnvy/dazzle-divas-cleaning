// app/lib/analytics.js
// One place to fire conversion events. Safe to call from anywhere: if no
// analytics provider is configured (local dev, preview), these are no-ops.

export function track(event, params = {}) {
  if (typeof window === 'undefined') return;

  // GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }

  // Vercel Analytics custom events
  if (typeof window.va === 'function') {
    window.va('event', { name: event, data: params });
  }
}

// The events we actually care about for this business.
export const EVENTS = {
  CALL_CLICK: 'call_click',
  QUOTE_SUBMIT: 'quote_submit',
  QUOTE_SUBMIT_FAILED: 'quote_submit_failed',
  EMAIL_CLICK: 'email_click',
};
