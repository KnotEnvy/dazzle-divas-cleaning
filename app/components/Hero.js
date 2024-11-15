// app/components/Hero.js

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/swans_divas.jpg"
          alt="Dazzle Divas Best Work - Swan Origami"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform Your Space with Dazzle Divas Cleaning
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Let our cleaning magic make your home or office sparkle!
        </motion.p>
        <motion.button 
          onClick={scrollToContact}
          className="bg-diva-pink text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Sparkles className="inline-block mr-2 group-hover:animate-spin" /> 
          Get Your Free Estimate
        </motion.button>
      </div>
    </section>
  );
}
