// app/opengraph-image.js
// Dynamically generates the 1200x630 social-share card for all pages.

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Dazzle Divas Cleaning — Professional vacation rental & residential cleaning in Volusia County, Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #ec4899 0%, #f472b6 45%, #fbcfe8 100%)",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          color: "white",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.92,
          }}
        >
          Licensed &amp; Insured
        </div>

        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            opacity: 0.92,
          }}
        >
          Since 2018
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 8,
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0l2.39 7.36L22 9.27l-5.61 5.47L17.78 22 12 17.77 6.22 22l1.39-7.26L2 9.27l7.61-1.91L12 0z" />
          </svg>
          <div
            style={{
              fontSize: 104,
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1,
              textShadow: "0 4px 24px rgba(0,0,0,0.18)",
            }}
          >
            Dazzle Divas
          </div>
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0l2.39 7.36L22 9.27l-5.61 5.47L17.78 22 12 17.77 6.22 22l1.39-7.26L2 9.27l7.61-1.91L12 0z" />
          </svg>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 38,
            letterSpacing: "-1px",
            opacity: 0.98,
          }}
        >
          Cleaning LLC
        </div>

        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            maxWidth: 960,
            lineHeight: 1.25,
            marginBottom: 18,
          }}
        >
          Vacation Rental &amp; Residential Cleaning
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            opacity: 0.95,
            marginBottom: 40,
          }}
        >
          Daytona Beach · Ormond Beach · New Smyrna Beach · All of Volusia County
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            padding: "18px 40px",
            background: "rgba(255,255,255,0.22)",
            borderRadius: 999,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 1,
            backdropFilter: "blur(4px)",
          }}
        >
          <span>(386) 301-5775</span>
          <span style={{ opacity: 0.6 }}>·</span>
          <span>dazzledivascleaning.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
