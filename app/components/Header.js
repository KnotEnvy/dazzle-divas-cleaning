// app/components/Header.js

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    let timeout;
    const throttledScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 100);
      }
    };
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our Process" },
    { href: "#about", label: "About Us" },
    { href: "#quality", label: "Quality Assurance" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900 bg-opacity-30">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/Divas_logo-pink.jpg" alt="Dazzle Divas Cleaning" width={75} height={75} />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-diva-pink transition duration-300 ${isScrolled ? "text-gray-400" : "text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-diva-pink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
  <motion.div 
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    className="md:hidden bg-diva-blue bg-opacity-95 absolute left-0 right-0 z-50 shadow-xl"
  >
    <div className="py-4 px-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block py-3 px-4 text-white hover:text-diva-pink border-b border-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>
  </motion.div>
)}
    </header>
  );
}
