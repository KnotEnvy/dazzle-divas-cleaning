import { createQuoteHandler } from '../../lib/quote-handler.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const POST = createQuoteHandler();
