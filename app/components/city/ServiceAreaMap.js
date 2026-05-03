'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../motion/Reveal';

export default function ServiceAreaMap({
  eyebrow = 'Service area',
  title,
  subtitle,
  cityLabel,
  neighborhoods,
  showRiver = true,
  riverLabel = 'Halifax River',
}) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-10">
          {eyebrow && (
            <Reveal>
              <span className="text-sm font-semibold tracking-wider uppercase text-diva-cyan-600">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {title}
            </h2>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">{subtitle}</p>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-[16/10] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200">
            <svg
              viewBox="0 0 800 500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Stylized service area map for ${cityLabel}`}
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="seaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0e7490" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="landGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="riverGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="800" height="500" fill="url(#landGradient)" />

              <rect x="600" y="0" width="200" height="500" fill="url(#seaGradient)" />
              {[80, 160, 240, 320, 400].map((y) => (
                <path
                  key={y}
                  d={`M 600 ${y} Q 650 ${y - 10} 700 ${y} T 800 ${y}`}
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  fill="none"
                />
              ))}

              <rect x="595" y="0" width="8" height="500" fill="#fbbf24" opacity="0.7" />

              {showRiver && (
                <>
                  <path
                    d="M 70 0 Q 90 80 70 160 Q 50 240 80 320 Q 60 400 80 500 L 110 500 Q 90 400 110 320 Q 130 240 100 160 Q 120 80 100 0 Z"
                    fill="url(#riverGradient)"
                  />
                  <text
                    x="90"
                    y="260"
                    fontSize="11"
                    fill="#0e7490"
                    fontWeight="600"
                    textAnchor="middle"
                    transform="rotate(-90 90 260)"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    {riverLabel.toUpperCase()}
                  </text>
                </>
              )}

              <line
                x1="560"
                y1="0"
                x2="560"
                y2="500"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                opacity="0.6"
              />
              <text
                x="565"
                y="490"
                fontSize="10"
                fill="#64748b"
                fontWeight="600"
                style={{ letterSpacing: '0.1em' }}
              >
                A1A
              </text>

              <circle cx="700" cy="80" r="28" fill="#fbbf24" opacity="0.4" />
              <circle cx="700" cy="80" r="18" fill="#fbbf24" opacity="0.6" />

              <g transform="translate(750, 460)">
                <circle r="18" fill="white" stroke="#94a3b8" strokeWidth="1.5" />
                <text
                  y="-8"
                  fontSize="10"
                  fill="#475569"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  N
                </text>
                <path d="M 0 -4 L 0 6" stroke="#475569" strokeWidth="1.5" />
                <path d="M -4 -2 L 0 -6 L 4 -2" stroke="#475569" strokeWidth="1.5" fill="none" />
              </g>

              <text
                x="320"
                y="60"
                fontSize="13"
                fill="#475569"
                fontWeight="700"
                style={{ letterSpacing: '0.2em' }}
              >
                {cityLabel.toUpperCase()}
              </text>
              <line
                x1="160"
                y1="72"
                x2="600"
                y2="72"
                stroke="#cbd5e1"
                strokeWidth="1"
              />

              {neighborhoods.map((n, i) => (
                <motion.g
                  key={n.name}
                  initial={prefersReduced ? false : { opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                >
                  <circle
                    cx={n.x * 8}
                    cy={n.y * 5}
                    r="14"
                    fill="#ec4899"
                    fillOpacity="0.18"
                  />
                  <circle
                    cx={n.x * 8}
                    cy={n.y * 5}
                    r="6"
                    fill="#ec4899"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={n.x * 8 + 12}
                    y={n.y * 5 + 4}
                    fontSize="11"
                    fill="#1e293b"
                    fontWeight="600"
                  >
                    {n.name}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-center text-sm text-slate-500">
            Stylized service area illustration. Pins represent neighborhoods served, not exact geographic positions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
