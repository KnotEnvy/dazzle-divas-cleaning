// app/components/Footer.js

'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  // Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Star,
  Sparkles,
  Home,
  Building,
  Recycle,
  ArrowUp
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const FooterSection = ({ title, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="text-lg font-bold text-white mb-4 flex items-center">
        <Sparkles className="w-4 h-4 mr-2 text-diva-pink" />
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </motion.div>
  );
};

const ContactItem = ({ icon: Icon, children, href, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      {href ? (
        <a
          href={href}
          className="flex items-center text-gray-300 hover:text-diva-pink transition-colors duration-300 group-hover:translate-x-1 transform"
        >
          <Icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
          {children}
        </a>
      ) : (
        <div className="flex items-center text-gray-300">
          <Icon className="w-4 h-4 mr-3" />
          {children}
        </div>
      )}
    </motion.div>
  );
};

const ServiceLink = ({ icon: Icon, children, href = "#services", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="flex items-center text-gray-300 hover:text-diva-pink transition-colors duration-300 group hover:translate-x-1 transform"
      >
        <Icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
        {children}
      </Link>
    </motion.div>
  );
};

const SocialIcon = ({ icon: Icon, href, label, delay = 0 }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-10 h-10 bg-diva-blue rounded-full flex items-center justify-center group-hover:bg-diva-pink transition-all duration-300 transform group-hover:rotate-12">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="absolute -inset-2 bg-diva-pink rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
    </motion.a>
  );
};

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-diva-pink text-white rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300 z-50 flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
    </motion.button>
  );
};

export default function Footer() {
  const [hoveredStar, setHoveredStar] = useState(null);
  
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Our Process" },
    { href: "#about", label: "About Us" },
    { href: "#quality", label: "Quality Assurance" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const serviceAreas = [
    "Daytona Beach",
    "Ormond Beach", 
    "Ormond-by-the-Sea",
    "New Smyrna Beach",
    "Ponce Inlet",
    "Daytona Shores"
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-gray-900 via-diva-blue to-gray-800 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-diva-pink opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-diva-sky opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-diva-yellow opacity-5 rounded-full filter blur-3xl"></div>
        </div>

        {/* Animated Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-diva-pink opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <FooterSection title="Dazzle Divas Cleaning" delay={0}>
              <motion.p 
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Elevating vacation rentals across Volusia County with professional, guest-ready cleaning services since 2018.
              </motion.p>
              
              {/* Star Rating Display */}
              <motion.div 
                className="flex items-center space-x-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 cursor-pointer transition-all duration-300 ${
                      hoveredStar >= star ? 'text-diva-yellow scale-110' : 'text-diva-pink'
                    }`}
                    fill="currentColor"
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(null)}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-300">Licensed & Insured</span>
              </motion.div>

              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                <SocialIcon 
                  icon={Facebook} 
                  href="https://facebook.com/dazzledivascleaning" 
                  label="Follow us on Facebook"
                  delay={0.6}
                />
                <SocialIcon 
                  icon={Instagram} 
                  href="https://instagram.com/dazzledivascleaning" 
                  label="Follow us on Instagram"
                  delay={0.7}
                />
              </div>
            </FooterSection>

            {/* Quick Links */}
            <FooterSection title="Quick Links" delay={0.2}>
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-diva-pink transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </FooterSection>

            {/* Services */}
            <FooterSection title="Our Services" delay={0.4}>
              <ServiceLink icon={Home} delay={0.5}>
                Vacation Rental Cleaning
              </ServiceLink>
              <ServiceLink icon={Building} delay={0.6}>
                Property Management
              </ServiceLink>
              <ServiceLink icon={Sparkles} delay={0.7}>
                Deep Cleaning Services
              </ServiceLink>
              <ServiceLink icon={Recycle} delay={0.8}>
                Eco-Friendly Options
              </ServiceLink>
            </FooterSection>

            {/* Contact Info */}
            <FooterSection title="Get In Touch" delay={0.6}>
              <ContactItem 
                icon={Phone} 
                href="tel:+13863015775"
                delay={0.7}
              >
                (386) 301-5775
              </ContactItem>
              {/* <ContactItem 
                icon={Mail} 
                href="mailto:info@dazzledivascleaning.com"
                delay={0.8}
              >
                info@dazzledivascleaning.com
              </ContactItem> */}
              <ContactItem 
                icon={MapPin} 
                delay={0.9}
              >
                Serving Volusia County
              </ContactItem>
              <ContactItem 
                icon={Clock} 
                delay={1.0}
              >
                <div>
                  <div>Monday - Sunday</div>
                  <div className="text-sm text-gray-400">Call for appointment</div>
                </div>
              </ContactItem>
            </FooterSection>
          </div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 mb-8"
          >
            <h4 className="text-center text-lg font-semibold mb-4 text-diva-pink">
              Proudly Serving Volusia County
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-white bg-opacity-10 rounded-full hover:bg-diva-pink hover:bg-opacity-20 transition-colors duration-300 cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8 text-center"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Dazzle Divas Cleaning LLC. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-diva-pink transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-diva-pink transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-diva-pink" />
                  Licensed & Insured
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}