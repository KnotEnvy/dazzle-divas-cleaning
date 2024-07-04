// components/Header.js

'use client';

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Dazzle Divas Cleaning" width={150} height={50} />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#services" className="text-gray-600 hover:text-diva-pink">Services</Link>
          <Link href="#about" className="text-gray-600 hover:text-diva-pink">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-diva-pink">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Menu
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link href="#services" className="block py-2 px-4 text-sm hover:bg-gray-100">Services</Link>
          <Link href="#about" className="block py-2 px-4 text-sm hover:bg-gray-100">About</Link>
          <Link href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </header>
  )
}