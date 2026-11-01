// app/twitter-image.js
// Same white + navy social-share card, served as the Twitter/X summary_large_image.

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Dazzle Divas Cleaning — Professional vacation rental & residential cleaning in Volusia County, Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE_URL = "https://www.dazzledivascleaning.com";
const LOGO_URL = `${SITE_URL}/images/Divas_logo-pink.jpg`;

const NAVY = "#082f49";
const SKY = "#06b6d4";
const SLATE = "#334155";

export default async function TwitterImage() {
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
          background: "#ffffff",
          fontFamily: "sans-serif",
          padding: "50px 80px",
          color: NAVY,
          position: "relative",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: `linear-gradient(90deg, ${NAVY} 0%, ${SKY} 100%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            background: `linear-gradient(90deg, ${SKY} 0%, ${NAVY} 100%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 32,
            left: 60,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: SKY,
          }}
        >
          Licensed &amp; Insured
        </div>

        <div
          style={{
            position: "absolute",
            top: 32,
            right: 60,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
            color: SKY,
          }}
        >
          Since 2018
        </div>

        <img
          src={LOGO_URL}
          alt=""
          width={220}
          height={220}
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            objectFit: "cover",
            border: `6px solid ${NAVY}`,
            boxShadow: "0 10px 40px rgba(8, 47, 73, 0.25)",
            marginBottom: 28,
          }}
        />

        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1,
            color: NAVY,
            marginBottom: 6,
          }}
        >
          Dazzle Divas
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: SLATE,
            marginBottom: 26,
          }}
        >
          Cleaning LLC
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: SLATE,
            marginBottom: 14,
          }}
        >
          Vacation Rental &amp; Residential Cleaning
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: SLATE,
            marginBottom: 22,
            opacity: 0.85,
          }}
        >
          Daytona Beach · Ormond Beach · New Smyrna Beach · Volusia County, FL
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "14px 34px",
            background: NAVY,
            borderRadius: 999,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#ffffff",
          }}
        >
          <span>(386) 301-5775</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>dazzledivascleaning.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
