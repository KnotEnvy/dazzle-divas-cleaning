'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Cookie,
  Mail,
  Phone,
  MapPin,
  Info,
  Globe,
  Sparkles,
  FileText,
  User,
  Database,
  Link as LinkIcon,
  Printer,
  Wand2,
} from 'lucide-react';

/* --- shared helpers (duplicated here on purpose to keep files independent) --- */

function ProgressBar({ progress = 0 }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-1 bg-slate-100/80 backdrop-blur">
      <div
        className="h-1 bg-gradient-to-r from-diva-pink to-diva-blue transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function FloatingSparkles() {
  const prefersReduced = useReducedMotion();
  const dots = useMemo(
    () =>
      new Array(14).fill(0).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 8 + 4,
        duration: 10 + Math.random() * 16,
        delay: Math.random() * 4,
        opacity: 0.12 + Math.random() * 0.2,
      })),
    []
  );

  if (prefersReduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-10%', opacity: d.opacity }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: d.duration,
            delay: d.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-gradient-to-br from-diva-pink to-diva-blue blur-[2px]"
          style={{ left: d.left, width: d.size, height: d.size }}
        />
      ))}
    </div>
  );
}

function Toc({ sections, activeId }) {
  return (
    <nav className="sticky top-24 hidden lg:block">
      <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 shadow-sm">
        <p className="mb-3 text-sm font-semibold text-slate-700">On this page</p>
        <ul className="space-y-2">
          {sections.map((s) => {
            const active = s.id === activeId;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`block rounded-md px-2 py-1 text-sm transition-colors ${
                    active
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function MobileJump({ sections }) {
  return (
    <div className="lg:hidden mb-6">
      <label className="sr-only" htmlFor="jump">Jump to section</label>
      <select
        id="jump"
        className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm"
        onChange={(e) => {
          const id = e.target.value;
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        <option value="">Jump to…</option>
        {sections.map((s) => (
          <option key={s.id} value={s.id}>{s.label}</option>
        ))}
      </select>
    </div>
  );
}

function SectionHeader({ id, icon: Icon, title, onCopy, titleClassName }) {
  const colorClass = titleClassName ?? 'text-diva-blue';
  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 id={id} className={`scroll-mt-28 text-2xl font-semibold ${colorClass} flex items-center`}>
        {Icon ? <Icon className="mr-3 h-6 w-6 text-diva-pink" /> : null}
        {title}
      </h3>
      <button
        aria-label="Copy link to section"
        onClick={() => onCopy && onCopy(id)}
        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 hover:bg-slate-50"
      >
        <LinkIcon className="h-3.5 w-3.5" />
        Copy link
      </button>
    </div>
  );
}

function WhatThisMeans({ show, children }) {
  if (!show) return null;
  return (
    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
      <p className="text-sm font-medium mb-1">What this means (plain language)</p>
      <div className="text-sm">{children}</div>
    </div>
  );
}

/* ---------- Main component ---------- */

export default function PrivacyPolicy() {
  const effectiveDate = 'August 11, 2025';
  const lastUpdated = 'August 11, 2025';

  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'collect', label: 'Information We Collect' },
    { id: 'use', label: 'How We Use Information' },
    { id: 'legal', label: 'Legal Bases & Sharing' },
    { id: 'cookies', label: 'Cookies & Analytics' },
    { id: 'retention', label: 'Data Retention & Security' },
    { id: 'rights', label: 'Your Rights & Choices' },
    { id: 'international', label: 'International Users' },
    { id: 'contact', label: 'Contact' },
    { id: 'changes', label: 'Changes to this Policy' },
  ];

  const [simpleMode, setSimpleMode] = useState(false);
  const [activeId, setActiveId] = useState('intro');
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState('');

  // Reading progress
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('policy-root');
      if (!el) return;
      const viewport = window.innerHeight || 0;
      const total = el.scrollHeight - viewport;
      const passed = Math.min(total, Math.max(0, window.scrollY - (el.offsetTop - 12)));
      setProgress(total > 0 ? Math.floor((passed / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleCopy = async (id) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(id);
      setTimeout(() => setCopied(''), 1200);
    } catch {}
  };

  return (
    <div className="bg-gray-50 text-gray-800 relative">
      <ProgressBar progress={progress} />
      <FloatingSparkles />

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-diva-pink to-diva-blue rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-diva-blue">Dazzle Divas Cleaning</h1>
                <p className="text-gray-600">Privacy Policy</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 hover:bg-slate-50"
              >
                <Printer className="h-4 w-4" /> Print/PDF
              </button>
              <button
                onClick={() => setSimpleMode((s) => !s)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs transition-colors ${
                  simpleMode
                    ? 'bg-gradient-to-r from-diva-pink to-diva-blue text-white'
                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Wand2 className="h-4 w-4" />
                {simpleMode ? 'Simple mode: ON' : 'Simple mode: OFF'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main id="policy-root" className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="grid lg:grid-cols-[260px,1fr] gap-8">
          <Toc sections={sections} activeId={activeId} />
          <div>
            <MobileJump sections={sections} />

            {/* Intro */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <h2 id="intro" className="scroll-mt-28 text-3xl font-bold text-diva-blue mb-4">
                Privacy Policy
              </h2>
              <div className="bg-blue-100/40 border-l-4 border-blue-300 p-4 mb-6">
                <p className="text-gray-700"><strong>Effective Date:</strong> {effectiveDate}</p>
                <p className="text-gray-700 mt-2"><strong>Last Updated:</strong> {lastUpdated}</p>
              </div>
              <WhatThisMeans show={simpleMode}>
                We collect only what we need to deliver great service, keep your place secure, and improve operations.
                We don’t sell your data—ever.
              </WhatThisMeans>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how Dazzle Divas Cleaning LLC (“we,” “our,” or “us”) collects, uses,
                and protects your information when you visit our website, contact us, or use our services.
                By using our services, you consent to this Policy.
              </p>
            </motion.section>

            {/* Collect */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="collect" icon={Database} title="Information We Collect" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Contact info, service details, limited photos for proof of work, payment processing (handled by
                third parties), and basic website analytics. No selling or creepy tracking.
              </WhatThisMeans>

              <div className="space-y-4 text-gray-700">
                <div className="border-l-4 border-diva-pink pl-4">
                  <h4 className="font-semibold mb-2">Contact & Booking Details</h4>
                  <p>Name, email, phone, service address, access instructions, scheduling preferences.</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold mb-2">Service & Property Notes</h4>
                  <p>Unit specifics, inventory (linens, supplies), photos for before/after, lost-and-found logs.</p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-semibold mb-2">Payments</h4>
                  <p>We process payments via third-party providers; we don’t store full card details on our servers.</p>
                </div>
                <div className="border-l-4 border-green-300 pl-4">
                  <h4 className="font-semibold mb-2">Usage & Device Data</h4>
                  <p>IP address, browser type, pages visited, and similar analytics collected via cookies.</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold mb-2">Communications</h4>
                  <p>Messages, emails, call notes related to scheduling, support, and service quality.</p>
                </div>
              </div>
              {copied === 'collect' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Use */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="use" icon={Info} title="How We Use Information" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We use info to deliver/coordinate cleanings, send receipts, improve our services, and meet legal
                obligations. No targeted ads; no sales of data.
              </WhatThisMeans>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Provide and schedule cleaning services; manage work orders and inventory.</li>
                <li>Process payments and send invoices/receipts.</li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Improve our website, services, and training quality (analytics, feedback).</li>
                <li>Protect our staff and clients; detect, prevent, or address fraud/security issues.</li>
                <li>Comply with legal obligations and enforce our Terms.</li>
              </ul>
              {copied === 'use' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Legal & Sharing */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="legal" icon={FileText} title="Legal Bases & Sharing" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We share only with tools/providers that help run the business (payments, scheduling, analytics) and
                only as needed. Sometimes the law requires disclosure.
              </WhatThisMeans>

              <div className="space-y-4 text-gray-700">
                <p className="bg-gray-50 rounded-lg p-4">
                  <strong>Legal bases</strong> (where applicable): contract performance, consent, legitimate interests,
                  and legal obligations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">We share with:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Payment processors and invoicing tools</li>
                      <li>Scheduling, messaging, and analytics providers</li>
                      <li>Contractors performing services under NDA/policies</li>
                      <li>Authorities if required by law or to protect rights</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">We do <span className="underline">not</span>:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Sell personal information</li>
                      <li>Share for targeted advertising</li>
                      <li>Collect sensitive data without a clear need</li>
                    </ul>
                  </div>
                </div>
              </div>
              {copied === 'legal' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Cookies */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="cookies" icon={Cookie} title="Cookies & Analytics" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We use essential cookies to run the site and basic analytics to improve it. You can limit cookies in
                your browser—some features may be affected.
              </WhatThisMeans>

              <p className="text-gray-700 mb-3">
                We use essential, functional, and analytics cookies to make the site work and to understand usage.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>You can control cookies via your browser settings.</li>
                <li>Blocking some cookies may impact site functionality.</li>
              </ul>
              {copied === 'cookies' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Retention */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="retention" icon={Lock} title="Data Retention & Security" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We keep records only as long as needed (or legally required) and use reasonable safeguards to protect
                them.
              </WhatThisMeans>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Service records retained for the life of the account and up to 24 months after closure.</li>
                <li>Invoices and financial records retained as required by law (e.g., 7 years).</li>
                <li>We use reasonable administrative, technical, and physical safeguards to protect data.</li>
              </ul>
              {copied === 'retention' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Rights */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="rights" icon={User} title="Your Rights & Choices" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Ask us to see, fix, delete, or export your info. Opt out of marketing. Extra rights may apply in your
                region.
              </WhatThisMeans>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Request access, correction, deletion, or a copy of your information.</li>
                <li>Opt out of marketing emails at any time (links in emails or contact us).</li>
                <li>California/EEA/UK residents may have additional rights under local laws.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                To exercise rights, contact us using the details below.
              </p>
              {copied === 'rights' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* International */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="international" icon={Globe} title="International Users" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We’re US-based. If you’re outside the US, your data may be processed here under US laws.
              </WhatThisMeans>

              <p className="text-gray-700">
                We are based in the United States. If you access our services from outside the U.S., you understand your
                information may be processed in the U.S. and other countries with different data protection laws.
              </p>
              {copied === 'international' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-diva-blue text-white rounded-lg shadow-sm p-8 mb-8"
            >
              <SectionHeader id="contact" icon={Phone} title="Questions or Privacy Requests?" onCopy={handleCopy} titleClassName="text-diva-pink"
 />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 text-white/90">
                  <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (386) 301-5775</p>
                  <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@dazzledivascleaning.com</p>
                </div>
                <div className="space-y-2 text-white/90">
                  <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 563 Live Oak Ave</p>
                  <p className="ml-6">Daytona Beach, FL 32114</p>
                </div>
              </div>
              {copied === 'contact' && <p className="mt-3 text-xs text-green-200">Link copied!</p>}
            </motion.section>

            {/* Changes */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-gray-100 rounded-lg p-6 text-center"
            >
              <h3 id="changes" className="scroll-mt-28 text-xl font-semibold text-slate-700 mb-2">
                Changes to this Policy
              </h3>
              <WhatThisMeans show={simpleMode}>
                If we update this policy, we’ll change the “Last Updated” date and, when appropriate, notify you.
              </WhatThisMeans>

              <p className="text-sm text-gray-600 mb-2">
                We may update this Policy as needed. We’ll revise the “Last Updated” date above when we do.
              </p>
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Dazzle Divas Cleaning LLC
              </p>
              {copied === 'changes' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
