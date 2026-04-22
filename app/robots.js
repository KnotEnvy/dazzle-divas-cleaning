// app/robots.js
// Explicitly welcomes search-engine AND AI crawlers so Dazzle Divas
// Cleaning can be surfaced in Google, Bing, ChatGPT, Claude, Perplexity, etc.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dazzledivascleaning.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // AI / LLM training and retrieval crawlers — explicitly welcomed
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
