// components/Header.js
'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our Process" },
    { href: "#about", label: "About Us" },
    { href: "#quality", label: "Quality Assurance" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/Divas_logo-pink.jpg" alt="Dazzle Divas Cleaning" width={100} height={25} />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`hover:text-diva-pink transition duration-300 ${isScrolled ? 'text-gray-400' : 'text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button 
          className="md:hidden text-diva-pink" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-diva-pink">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="block py-2 px-4 text-gray-800 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}