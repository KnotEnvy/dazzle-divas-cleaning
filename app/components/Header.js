// components/Header.js

'use client';

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-diva-pink text-diva-blue shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/Divas_logo-pink.jpg" alt="Dazzle Divas Cleaning" width={100} height={25} />
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#services" className="hover:text-white transition duration-300">Services</Link>
          <Link href="#about" className="hover:text-white transition duration-300">About</Link>
          <Link href="#contact" className="hover:text-white transition duration-300">Contact</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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