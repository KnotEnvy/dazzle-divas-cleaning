'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CreditCard,
  CalendarClock,
  Home,
  KeyRound,
  ShieldCheck,
  EyeOff,
  Star,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock as ClockIcon,
  CheckCircle,
  Sparkles,
  Link as LinkIcon,
  Printer,
  Wand2,
} from 'lucide-react';

/* ---------- Small shared UI helpers (local to this file) ---------- */

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
  if (prefersReduced) return null;

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

export default function TermsOfService() {
  const effectiveDate = 'May 22, 2025';
  const lastUpdated = 'May 22, 2025';

  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'payment', label: 'Payment Terms' },
    { id: 'scheduling', label: 'Scheduling & Cancellations' },
    { id: 'scope', label: 'Service Scope & Standards' },
    { id: 'vacation', label: 'Vacation Rental Terms' },
    { id: 'liability', label: 'Liability & Insurance' },
    { id: 'confidentiality', label: 'Privacy & Confidentiality' },
    { id: 'guarantee', label: 'Quality Guarantee' },
    { id: 'dispute', label: 'Termination & Disputes' },
    { id: 'contact', label: 'Contact' },
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
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 0;
      const total = el.scrollHeight - viewport;
      const passed = Math.min(total, Math.max(0, window.scrollY - (el.offsetTop - 12)));
      setProgress(total > 0 ? Math.floor((passed / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
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
                <p className="text-gray-600">Terms of Service</p>
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
                Terms of Service
              </h2>
              <div className="bg-blue-100/40 border-l-4 border-blue-300 p-4 mb-6">
                <p className="text-gray-700"><strong>Effective Date:</strong> {effectiveDate}</p>
                <p className="text-gray-700 mt-2"><strong>Last Updated:</strong> {lastUpdated}</p>
              </div>
              <WhatThisMeans show={simpleMode}>
                You’re agreeing to how we work: what’s included, how we schedule, how payment works, and
                how we handle issues. Ask us any time if something’s unclear—transparent and fair is our policy.
              </WhatThisMeans>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Dazzle Divas Cleaning LLC. These Terms of Service (“Terms”) govern your use of our
                vacation rental and residential cleaning services. By engaging our services, you agree to be
                bound by these Terms.
              </p>
            </motion.section>

            {/* Payment */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="payment" icon={CreditCard} title="Payment Terms" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Pay at service (or monthly within 15 days). Cards add a 3% processor fee. Late balances can get a
                small finance charge and may affect scheduling priority.
              </WhatThisMeans>

              <div className="space-y-4">
                <div className="border-l-4 border-diva-pink pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Payment Due on Delivery (COD)</h4>
                  <p className="text-gray-700">
                    Payment is required at the time of service unless otherwise agreed upon in writing. Monthly
                    clients will be billed at the end of each month with payment due within 15 days of invoice date.
                  </p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Accepted Payment Methods</h4>
                  <p className="text-gray-700">
                    We accept cash, check, Venmo, PayPal, and major credit cards. A 3% processing fee applies to
                    credit card payments.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Late Payments</h4>
                  <p className="text-gray-700">
                    Unpaid balances over 30 days may incur a late fee of $25 or 1.5% per month (whichever is greater)
                    and may impact future scheduling priority.
                  </p>
                </div>
              </div>
              {copied === 'payment' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Scheduling & Cancellations */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="scheduling" icon={CalendarClock} title="Scheduling & Cancellations" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Give us 48 hours’ notice for changes. Emergencies are extra (and based on availability).
                Weather delays don’t incur fees; no-access visits carry a trip charge.
              </WhatThisMeans>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      48-Hour Notice Required
                    </h4>
                    <p className="text-red-700 text-sm">
                      Please provide at least 48 hours’ notice for rescheduling or cancellations. Late cancellations
                      (less than 48 hours) are subject to a $50 fee.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h4 className="font-semibold text-amber-800 mb-2">Emergency Cleaning</h4>
                    <p className="text-amber-700 text-sm">
                      Same-day or next-day emergency cleaning requests are subject to a 50% surcharge and availability.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Weather Cancellations</h4>
                    <p className="text-blue-700 text-sm">
                      Services may be delayed due to severe weather conditions. No cancellation fees apply for
                      weather-related delays.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">No-Show Policy</h4>
                    <p className="text-green-700 text-sm">
                      If our team cannot access the property due to incorrect access information, a $75 trip charge applies.
                    </p>
                  </div>
                </div>
              </div>
              {copied === 'scheduling' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Scope */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="scope" icon={Home} title="Service Scope & Standards" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Here’s what a standard clean includes. Extras (like oven or windows) are add-ons—just ask and we’ll quote it.
              </WhatThisMeans>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Standard Cleaning Includes:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />All surfaces dusted and wiped</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Bathrooms sanitized completely</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Kitchen cleaned and sanitized</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Floors vacuumed and mopped</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Beds made with fresh linens</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Trash emptied and replaced</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Towels restocked</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Guest-ready inspection</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Additional Services (Extra Charges Apply):</h4>
                  <p className="text-gray-700 text-sm">
                    Interior oven cleaning, refrigerator deep clean, window washing, garage cleaning,
                    excessive pet hair removal, post-construction cleanup, organizing services.
                  </p>
                </div>
              </div>
              {copied === 'scope' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Vacation rental terms */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="vacation" icon={KeyRound} title="Vacation Rental Specific Terms" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Check-out at 10am is our baseline for turnarounds. We need reliable access methods, and we
                document damages or missing items to help with claims.
              </WhatThisMeans>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      Checkout Times
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Standard cleaning begins after 10:00 AM checkout. Earlier access requires advance notice and may
                      incur additional charges.
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                      <KeyRound className="w-4 h-4 mr-2" />
                      Access Requirements
                    </h4>
                    <p className="text-purple-700 text-sm">
                      Client must provide reliable access method (codes, keys, lockbox). Changes must be communicated
                      24 hours in advance.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-diva-pink pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Guest Damage Assessment</h4>
                  <p className="text-gray-700">
                    We will report any damage beyond normal wear and tear discovered during cleaning. Photos will be
                    provided for insurance/guest damage claims. We are not responsible for assessing or determining
                    guest liability.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Linen & Supply Management</h4>
                  <p className="text-gray-700">
                    Fresh linens and towels will be provided if available on-site. Client is responsible for maintaining
                    adequate inventory. Missing or damaged linens will be reported but replacement costs are client’s
                    responsibility.
                  </p>
                </div>
              </div>
              {copied === 'vacation' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Liability */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="liability" icon={ShieldCheck} title="Liability & Insurance" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We’re licensed and insured. Please secure valuables and pets; let us know about fragile items or
                pre-existing damage so we can document during walkthroughs.
              </WhatThisMeans>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Our Coverage</h4>
                  <p className="text-green-700 text-sm">
                    Dazzle Divas Cleaning LLC is fully licensed and insured with general liability and bonding coverage
                    for our employees.
                  </p>
                </div>

                <div className="space-y-3 text-gray-700">
                  <p><strong>Pre-existing Damage:</strong> We are not responsible for pre-existing damage, wear, or fragile items left unsecured. Initial walkthrough documentation is recommended.</p>
                  <p><strong>Valuable Items:</strong> Please secure jewelry, cash, important documents, and fragile collectibles before our arrival.</p>
                  <p><strong>Pet Safety:</strong> Pets must be secured during cleaning. We are not responsible for pets that escape during service.</p>
                  <p><strong>Key/Access Liability:</strong> Client assumes responsibility for providing secure access methods. Lost or damaged keys/access devices are client’s responsibility.</p>
                </div>
              </div>
              {copied === 'liability' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Confidentiality */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="confidentiality" icon={EyeOff} title="Privacy & Confidentiality" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We keep your information and property details private. We only disclose when safety or law requires it.
              </WhatThisMeans>

              <div className="space-y-4 text-gray-700">
                <p>
                  We respect your privacy and maintain strict confidentiality regarding your property, personal
                  belongings, and business operations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">We Promise:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                      <li>Discretion with personal information</li>
                      <li>No photography without permission</li>
                      <li>Confidentiality of access codes</li>
                      <li>Professional conduct at all times</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Required Disclosures:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                      <li>Safety hazards or violations</li>
                      <li>Property damage discovered</li>
                      <li>Health code violations</li>
                      <li>Illegal activities observed</li>
                    </ul>
                  </div>
                </div>
              </div>
              {copied === 'confidentiality' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Guarantee */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="guarantee" icon={Star} title="Quality Guarantee" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                Not thrilled? Tell us within 24 hours and we’ll come back to make it right at no extra charge.
              </WhatThisMeans>

              <div className="bg-gradient-to-r from-diva-pink to-blue-300/60 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">24-Hour Satisfaction Guarantee</h4>
                <p className="text-gray-700 mb-4">
                  If you're not completely satisfied with our service, contact us within 24 hours and we'll return to
                  address any concerns at no additional charge.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Note:</strong> Guarantee applies to reported issues within our standard service scope.
                    Additional service requests are subject to extra charges.</p>
                </div>
              </div>
              {copied === 'guarantee' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Dispute */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
            >
              <SectionHeader id="dispute" icon={FileText} title="Termination & Dispute Resolution" onCopy={handleCopy} />
              <WhatThisMeans show={simpleMode}>
                We prefer to talk things out. If needed, we’ll use mediation in Volusia County, FL. Either party can
                end services with 48-hour written notice.
              </WhatThisMeans>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Service Termination</h4>
                  <p className="text-gray-700">
                    Either party may terminate ongoing services with 48 hours written notice. Outstanding balances
                    remain due upon termination.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dispute Resolution</h4>
                  <p className="text-gray-700">
                    We encourage direct communication to resolve any concerns. If needed, disputes will be resolved
                    through mediation in Volusia County, Florida.
                  </p>
                </div>
              </div>
              {copied === 'dispute' && <p className="mt-3 text-xs text-green-600">Link copied!</p>}
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="bg-diva-blue text-white rounded-lg shadow-sm p-8 mb-8"
            >
              <SectionHeader id="contact" icon={Phone} title="Questions or Concerns?" onCopy={handleCopy} titleClassName="text-diva-pink"
  />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Contact Jay for Service Questions:</h4>
                  <div className="space-y-2 text-white/90">
                    <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (386) 301-5775</p>
                    <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@dazzledivascleaning.com</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Business Address:</h4>
                  <div className="space-y-2 text-white/90">
                    <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 563 Live Oak Ave</p>
                    <p className="ml-6">Daytona Beach, FL 32114</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Legal Footer */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Dazzle Divas Cleaning LLC</strong> — Licensed & Insured Cleaning Services
              </p>
              <p className="text-xs text-gray-500">
                These terms are subject to change with 30 days’ notice. Current version effective {effectiveDate}.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
