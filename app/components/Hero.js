// app/components/Hero.js

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Star, ArrowDown } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useState, useEffect } from "react";

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <motion.div className="absolute inset-0 z-0">
        <Image
          src="/images/swans_divas.jpg"
          alt="Elevate your rental with Dazzle Divas Cleaning"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          className="object-cover transform-gpu transition-opacity duration-300"
        />
      </motion.div>

      {/* Gradient overlay with animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 text-diva-pink animate-float">
        <Sparkles className="w-12 h-12 opacity-60" />
      </div>
      <div className="absolute bottom-20 right-20 text-diva-pink animate-float">
        <Star className="w-12 h-12 opacity-60" />
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-diva-pink to-transparent mb-8"
        />

        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          Elevate Your Rental Experience with{" "}
          <span className="relative">
            <span className="relative z-10 text-diva-pink">
              Dazzle Divas Cleaning
            </span>
            <motion.span
              className="absolute inset-0 bg-white/10 rounded-lg -z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Turn your property into a five-star guest destination with our specialized cleaning and guest services.
        </motion.p>

        {/* Enhanced CTA button */}
        <motion.button
          onClick={scrollToContact}
          className="group relative overflow-hidden bg-diva-pink text-white font-bold py-4 px-8 rounded-full hover:bg-pink-600 transition-colors duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center justify-center">
            <Sparkles className="inline-block mr-2 transition-transform duration-300 group-hover:scale-110" />
            Enhance Your Rental Now
          </span>
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ scale: 0 }}
            whileHover={{ scale: 2 }}
            transition={{ duration: 0.3 }}
            style={{ opacity: 0.1 }}
          />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown className="text-white/70 w-6 h-6" />
        </motion.div>
      </div>

      {/* Animated corner decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute top-0 left-0 w-32 h-32"
        >
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-diva-pink to-transparent" />
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-diva-pink to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-0 right-0 w-32 h-32"
        >
          <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-diva-pink to-transparent" />
          <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-diva-pink to-transparent" />
        </motion.div>
      </div>

      {/* Optional: Animated particles background */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
