// app/reviews/route.js
//
// Short link: https://www.dazzledivascleaning.com/reviews
// Opens the Google Business Profile (by Place ID) so visitors can read every
// Google review. It exists so the owner can print one short URL on invoices,
// business cards, and proposals, and so the site can link to "all our Google
// reviews" from one place. The companion /review link (app/review/route.js)
// goes straight to the write-a-review dialog. See docs/review-engine.md.
//
// 302 (temporary), not 301/308, so the destination stays changeable.
//
// force-static is safe with a redirect on Next 14.2: the build prerenders the
// handler and replays the stored 302 status and Location header (it records
// `initialStatus` in the prerender manifest), so this never runs per request.
// It is not a page, so it stays out of app/sitemap.js and public/llms.txt.
//
// Link to it with a plain <a href="/reviews">, not next/link: <Link> would
// prefetch the RSC payload, follow the redirect cross-origin to Google, and
// log a CORS error before falling back to a normal navigation.

import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const GOOGLE_PROFILE_URL =
  'https://www.google.com/maps/place/?q=place_id:ChIJI7fTrsScs64RTY0NoDuFenI';

export function GET() {
  return NextResponse.redirect(GOOGLE_PROFILE_URL, 302);
}
