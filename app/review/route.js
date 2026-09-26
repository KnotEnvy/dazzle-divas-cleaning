// app/review/route.js
//
// Short link: https://www.dazzledivascleaning.com/review
// Sends customers straight to the "write a review" dialog on the Google
// Business Profile. It exists so the owner can print one short, memorable URL
// on invoices, business cards, and turnover leave-behinds instead of the raw
// g.page link. The companion /reviews link (app/reviews/route.js) opens the
// profile so people can READ reviews. The playbook is docs/review-engine.md.
//
// 302 (temporary), not 301/308: browsers and CDNs cache permanent redirects
// hard, and the destination should stay changeable if the profile's review
// link ever changes.
//
// force-static is safe with a redirect on Next 14.2: the build prerenders the
// handler and replays the stored 302 status and Location header (it records
// `initialStatus` in the prerender manifest), so this never runs per request.
// It is not a page, so it stays out of app/sitemap.js and public/llms.txt.
//
// Link to it with a plain <a href="/review">, not next/link (see the note in
// app/reviews/route.js).

import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CU2NDaA7hXpyEBM/review';

export function GET() {
  return NextResponse.redirect(GOOGLE_REVIEW_URL, 302);
}
