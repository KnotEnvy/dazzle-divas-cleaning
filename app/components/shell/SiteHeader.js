'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Vacation Rental Turnover', href: '/services/vacation-rental-turnover' },
  { name: 'Emergency Cleaning', href: '/services/emergency-cleaning' },
  { name: 'Property Management', href: '/services/property-management' },
];

const cities = [
  { name: 'Ormond Beach', href: '/cleaning/ormond-beach' },
  { name: 'Daytona Beach', href: '/cleaning/daytona-beach' },
  { name: 'New Smyrna Beach', href: '/cleaning/new-smyrna-beach' },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-diva-pink-500 via-diva-cyan-400 to-diva-gold-400"
        style={{ scaleX: progress }}
      />
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group" aria-label="Dazzle Divas Cleaning home">
            <Image
              src="/images/Divas_logo-pink.jpg"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="block text-lg font-bold text-white leading-tight">Dazzle Divas Cleaning</span>
              <span className="block text-xs text-diva-pink-300">Vacation Rental Specialists</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <DesktopDropdown label="Services" items={services} />
            <DesktopDropdown label="Service Areas" items={cities} />
            <Link
              href="/faq"
              className="text-white/90 hover:text-diva-pink-300 font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="text-white/90 hover:text-diva-pink-300 font-medium transition-colors"
            >
              Contact
            </Link>
            <a
              href="tel:+13863015775"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white px-5 py-2 rounded-full font-semibold hover:shadow-glow-pink transition-all"
            >
              <Phone size={16} aria-hidden />
              Call Now
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-white p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-4 border-t border-white/10 pt-4 space-y-3">
            <MobileGroup label="Services" items={services} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup label="Service Areas" items={cities} onNavigate={() => setMobileOpen(false)} />
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-white/90 hover:text-diva-pink-300"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-white/90 hover:text-diva-pink-300"
            >
              Contact
            </Link>
            <a
              href="tel:+13863015775"
              className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-diva-pink-500 to-diva-pink-600 text-white px-5 py-2 rounded-full font-semibold"
            >
              <Phone size={16} aria-hidden />
              Call (386) 301-5775
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function DesktopDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-white/90 hover:text-diva-pink-300 font-medium transition-colors"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div role="menu" className="absolute left-0 top-full pt-3 min-w-[240px]">
          <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-xl py-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-diva-pink-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({ label, items, onNavigate }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-white/50 mb-1">{label}</p>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="block py-1.5 pl-2 text-white/90 hover:text-diva-pink-300"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
