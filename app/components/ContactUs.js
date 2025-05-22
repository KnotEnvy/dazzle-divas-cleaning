// app/components/ContactUs.js
// ContactSection main page

"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Clock, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const ContactInfo = ({ icon: Icon, children, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start group"
  >
    <div className="mr-4 p-3 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
      <Icon className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
    </div>
    <div className="flex-1">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-white transition-colors duration-300 group"
        >
          <span className="text-white/90 group-hover:text-white transition-colors duration-300">
            {children}
          </span>
          <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      ) : (
        <div className="text-white/90">{children}</div>
      )}
    </div>
  </motion.div>
);

export default function ContactSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2 });
  
  return (
    <section ref={sectionRef} id="contact" className="relative py-48 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-diva-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-diva-pink/20 to-transparent opacity-50"></div>
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-diva-pink/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-diva-blue/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-16"
        >
          
            <Sparkles className="text-diva-pink mr-4 h-8 w-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
            Let&apos;s Get Your Rental <span className="text-diva-pink">Guest-Ready!</span>
          </h2>
            <Sparkles className="text-diva-pink ml-4 h-8 w-8" />
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
          >
            <div className="bg-white p-8 rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-95 transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-diva-blue flex items-center">
                <Sparkles className="mr-3 h-6 w-6" />
                Send Us a Message
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Whether you&apos;re a vacation rental owner or property manager, we&apos;re here to help you create a guest-ready space that delights and impresses every visitor.
              </p>
              <ContactForm />
            </div>
          </motion.div>
          
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 px-4"
          >
            <div className="bg-gradient-to-br from-diva-pink to-pink-600 p-8 rounded-xl shadow-2xl backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-300 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <Sparkles className="mr-3 h-6 w-6" />
                Dazzle Divas Cleaning LLC
              </h3>
              
              <div className="space-y-8">
                <ContactInfo icon={MapPin} delay={0.5}>
                  <div>
                    <p className="font-semibold text-lg">Service Area</p>
                    <p className="text-white/90">Serving All of Volusia County</p>
                    <p className="text-sm text-white/80 mt-1">
                      Daytona Beach • Ormond Beach • New Smyrna Beach<br />
                      Ponce Inlet • Port Orange • DeLand & Surrounding Areas
                    </p>
                  </div>
                </ContactInfo>
                
                <ContactInfo icon={Phone} link="tel:+13863015775" delay={0.6}>
                  <div>
                    <p className="font-semibold text-lg">Call Today</p>
                    <p className="text-xl font-bold text-white">(386) 301-5775</p>
                    <p className="text-sm text-white/80 mt-1">Click to call us directly</p>
                  </div>
                </ContactInfo>
                
                <ContactInfo icon={Clock} delay={0.7}>
                  <div>
                    <p className="font-semibold text-lg">Availability</p>
                    <div className="text-white/90">
                      <p className="font-medium">7 Days a Week</p>
                      <p className="text-sm text-white/80 mt-1">
                        Flexible scheduling to fit your rental turnover needs
                      </p>
                      <div className="mt-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        <p className="text-sm font-medium">Ready to get started?</p>
                        <p className="text-sm text-white/90">Call for your free consultation today!</p>
                      </div>
                    </div>
                  </div>
                </ContactInfo>
              </div>
              
              {/* Call-to-action section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-center mb-2">
                  <Sparkles className="text-white mr-2 h-5 w-5" />
                  <p className="font-semibold text-white">Licensed & Insured</p>
                </div>
                <p className="text-sm text-white/90">
                  Professional cleaning services you can trust with complete peace of mind.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      {/* Floating sparkles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-20 left-20 text-diva-pink"
      >
        <Sparkles size={60} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-20 right-20 text-white"
      >
        <Sparkles size={80} />
      </motion.div>
    </section>
  );
}