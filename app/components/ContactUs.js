// app/components/ContactUs.js
// ContactSection main page


'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import { MapPin, Mail, Phone, Clock, Sparkles, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const ContactInfo = ({ icon: Icon, children, link, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start group"
    >
      <div className="mr-4 p-2 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
        <Icon className="text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex-1">
        {link ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-white transition-colors duration-300"
          >
            {children}
            <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ) : (
          children
        )}
      </div>
    </motion.div>
  );
};

export default function ContactSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={sectionRef} id="contact" className="relative py-48 overflow-hidden">
      {/* Background with sparkle effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-diva-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-diva-pink/20 to-transparent opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-12"
        >
          <Sparkles className="text-diva-pink mr-3 h-8 w-8" />
          <h2 className="text-5xl font-bold text-center text-white">
            Let's Get Your Space <span className="text-diva-pink">Dazzling!</span>
          </h2>
          <Sparkles className="text-diva-pink ml-3 h-8 w-8" />
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
          >
            <div className="bg-white p-8 rounded-lg shadow-2xl backdrop-blur-sm bg-opacity-95 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-diva-blue flex items-center">
                <Sparkles className="mr-2 h-6 w-6" />
                Contact Us
              </h3>
              <p className="mb-6 text-gray-600">
                Whether you would like us to clean your home or business, or you are
                interested in joining our team, please contact us today.
              </p>
              <ContactForm />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 px-4"
          >
            <div className="bg-diva-pink p-8 rounded-lg shadow-2xl backdrop-blur-sm bg-opacity-95 transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <Sparkles className="mr-2 h-6 w-6" />
                Dazzle Divas Cleaning LLC
              </h3>
              <div className="space-y-6">
                <ContactInfo icon={MapPin} delay={0.5}>
                  <p>Serving Volusia County</p>
                </ContactInfo>
                <ContactInfo 
                  icon={Mail} 
                  link="mailto:info@dazzledivascleaning.com"
                  delay={0.6}
                >
                  <p>info@DazzleDivasCleaning.com</p>
                </ContactInfo>
                <ContactInfo 
                  icon={Phone} 
                  link="tel:+13863015775"
                  delay={0.7}
                >
                  <p>(386) 301-5775</p>
                </ContactInfo>
                <ContactInfo icon={Clock} delay={0.8}>
                  <div>
                    <p>Monday thru Sunday</p>
                    <p>Seven days a week!</p>
                    <p>Call for an appointment today!</p>
                  </div>
                </ContactInfo>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-diva-pink/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-diva-blue/10 rounded-full filter blur-3xl"></div>
    </section>
  );
}