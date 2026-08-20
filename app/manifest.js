// app/manifest.js — web app manifest (was a 404 before)

export default function manifest() {
  return {
    name: "Dazzle Divas Cleaning LLC",
    short_name: "Dazzle Divas",
    description:
      "Vacation rental turnover and residential cleaning across Volusia County, Florida.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ec4899",
    icons: [
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
