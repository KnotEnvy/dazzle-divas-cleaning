"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, Shield, Clock, CheckCircle, Phone, Award, Users, 
  TrendingUp, MapPin, Calendar, Sparkles, Home, Building, Zap, Menu, X,
  ChevronRight, Play, ExternalLink, MessageCircle, Mail, ChevronDown,
  Facebook, Instagram, ArrowUp, Camera, Quote, Loader2, AlertCircle 
} from 'lucide-react';
import { init, send } from '@emailjs/browser';
import SecureModernContactForm from './ContactForm';
import CompetitiveServicesPage from './CompetitiveServices';


const ModernDazzleDivasWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompetitiveOpen, setIsCompetitiveOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Your existing images repurposed strategically
  const portfolioImages = [
    { src: "/images/livingroom_divas.jpg", title: "Luxury Living Spaces", category: "Living Areas" },
    { src: "/images/diningRoom_divas.jpg", title: "Elegant Dining Areas", category: "Dining" },
    { src: "/images/bath2_divas.jpg", title: "Spa-Like Bathrooms", category: "Bathrooms" },
    { src: "/images/bath_divas.jpg", title: "Bathroom Style", category: "Bathrooms" },
    { src: "/images/crabs_divas.jpg", title: "Beautiful Bedrooms", category: "Bedrooms" },
    { src: "/images/swans2_divas.jpg", title: "Stunning Details", category: "Decor" },
    { src: "/images/backtard_divas.jpg", title: "Outdoor Spaces", category: "Exterior" },
    { src: "/images/stairsOcean_divas.jpg", title: "Ocean Views", category: "Views" },
    { src: "/images/elep_divas.jpg", title: "Unique Touches", category: "Details" },
  ];

  const services = [
    {
      icon: Calendar,
      title: "Vacation Rental Turnover",
      description: "2-4 hour guest-ready guarantee with hospitality standards",
      price: "From $100",
      features: ["Same-day availability", "Photo verification", "Guest amenity check", "Review protection"],
      badge: "Most Popular",
      color: "pink"
    },
    {
      icon: Zap,
      title: "Emergency Service",
      description: "Last-minute cleanings and same-day turnovers available 24/7",
      price: "Standard rates",
      features: ["2-hour response", "No rush fees", "Weekend available", "Text updates"],
      badge: "24/7 Ready",
      color: "red"
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Bulk services for multiple vacation rental properties",
      price: "Custom packages",
      features: ["Volume discounts", "Dedicated manager", "Priority booking", "Monthly reports"],
      badge: "Pro Service",
      color: "blue"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Airbnb Superhost",
      image: "/images/client3.jpg",
      rating: 5,
      text: "Dazzle Divas transformed my Ormond Beach rental! My guest reviews improved dramatically, and I'm booking 20% higher rates. They understand vacation rentals like no other service.",
      property: "4BR Oceanfront Villa"
    },
    {
      name: "Mike Rodriguez", 
      role: "Property Manager",
      image: "/images/client4.jpg",
      rating: 5,
      text: "Managing 12 vacation rentals, I need reliability. Dazzle Divas delivers consistent, guest-ready properties every time. Their emergency service saved me during a hurricane cleanup.",
      property: "12-Unit Portfolio"
    },
    {
      name: "Jennifer Chen",
      role: "VRBO Host",
      image: "/images/client1.jpg", 
      rating: 5,
      text: "The attention to detail is incredible. Guests specifically mention how pristine and welcoming the space feels. My 5-star reviews increased 40% since switching to Dazzle Divas.",
      property: "Luxury Condo, New Smyrna"
    },
    
  ];

  const stats = [
    { number: "500+", label: "Properties Served", icon: Home },
    { number: "98%", label: "Guest Satisfaction", icon: Star },
    { number: "2-4hr", label: "Average Turnover", icon: Clock },
    { number: "15+", label: "Cities Covered", icon: MapPin }
  ];

  // Navigation
  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }

  ];

  //current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      
      {/* Modern Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate/85 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/Divas_logo-pink.jpg" alt="Dazzle Divas" width={48} height={48} className="h-12 w-12 square-full" />
              <div>
                <h1 className="text-lg font-bold text-diva-pink-400">Dazzle Divas Cleaning</h1>
                <p className="text-xs text-diva-pink-600">Vacation Rental Specialists</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-diva-pink-400 hover:text-pink-600 font-medium transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="tel:+13863015775" className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Call Now
              </a>
            </div>

            <button 
              className="md:hidden text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-diva-blue border-t border-slate-200"
            >
              <div className="container mx-auto px-6 py-4 space-y-4">
                {navigation.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="block text-white-700 hover:text-pink-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
                ))}
                <a href="tel:+13863015775" className="block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold text-center">
                  Call (386) 301-5775
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section - Using your swan image */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
                    src="/images/swans_divas.jpg"
                    alt="Elevate your rental with Dazzle Divas Cleaning"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    className="object-cover"
                  />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-semibold">Vacation Rental Experts</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
                <span className="text-white text-sm font-semibold ml-2">5.0 Stars</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Volusia County&apos;s
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  #1 Vacation Rental
                </span>
                <span className="block">Cleaning Service</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl">
                  <strong>Guaranteed guest-ready properties in 2-4 hours.</strong> We don&apos;t just clean - we create 5-star guest experiences that protect your reviews and increase your bookings.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-white font-semibold">500+ Properties Served</span>
                  </div>
                  <p className="text-white/90 text-sm">
                    &ldquo;The only cleaning service that truly understands vacation rentals. My guest reviews improved dramatically!&rdquo; - Sarah M., Airbnb Superhost
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote (2 Min)
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a
                href="tel:+13863015775"
                className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (386) 301-5775
              </a>
            </motion.div>

            {/* Urgency element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-400/30 max-w-md"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-semibold">Available Today</span>
                </div>
                <span className="text-white/60">•</span>
                <span className="text-white/90 text-sm">
                  <strong>Same-day service</strong> - Emergency turnovers available
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
            <span className="text-xs">Scroll to explore</span>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-cyan-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold border border-pink-200 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Specialized Vacation Rental Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Services Designed for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
                Vacation Rental Success
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Unlike general house cleaners, we understand that your guest reviews and booking success depend on hospitality-grade cleanliness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white mb-6 ${
                  service.color === 'pink' ? 'bg-pink-500' :
                  service.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                }`}>
                  {service.badge}
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-xl ${
                    service.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-600' :
                    service.color === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' : 
                    'bg-gradient-to-r from-blue-500 to-blue-600'
                  } text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-pink-600 font-semibold">{service.price}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsCompetitiveOpen(true)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
                
              </motion.div>
            ))}
          </div>

          {/* Service guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Guest Reviews Are Guaranteed
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              If a guest mentions cleanliness in a negative review, we&apos;ll re-clean for free and work with you to address their concerns.
            </p>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg">
              Get Your Guarantee Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - Your images showcased */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Dazzling
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500"> Results</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See why guests consistently rate these properties 5 stars. Every space is transformed into a welcoming, pristine environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : 
                  index % 5 === 0 ? 'lg:col-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-pink-500 text-xs px-2 py-1 rounded-full inline-block mb-2">{image.category}</div>
                  <h3 className="font-bold text-lg">{image.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-6">Want your vacation rental to look this amazing?</p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Transform My Property
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Using master2_divas.jpg as background */}
      <section id="why-choose-us" className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/master2_divas.jpg"
            alt="Luxury vacation rental space"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Dazzle Divas Beats
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                Every Other Cleaning Service
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We&apos;re not just cleaners - we&apos;re vacation rental success partners who understand the hospitality business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Vacation Rental Specialists",
                description: "Unlike general cleaners, we understand guest expectations, hospitality standards, and what creates 5-star reviews.",
                stat: "98% guest satisfaction vs 78% industry average"
              },
              {
                icon: Clock,
                title: "Fastest Turnovers",
                description: "2-4 hour guaranteed turnovers vs 4-8 hours from competitors. Your property is ready when guests arrive.",
                stat: "50% faster than traditional services"
              },
              {
                icon: Shield,
                title: "Review Protection Guarantee",
                description: "Your guest reviews are guaranteed. If cleanliness affects a review, we'll re-clean for free.",
                stat: "Zero negative cleanliness reviews in 2024"
              },
              {
                icon: Zap,
                title: "24/7 Emergency Service",
                description: "Last-minute booking? Checkout disaster? We're the only service with true emergency availability.",
                stat: "2-hour emergency response time"
              },
              {
                icon: TrendingUp,
                title: "Higher Property Value",
                description: "Clean, well-maintained properties book for 15-20% higher rates and get more bookings.",
                stat: "$2,400 average annual revenue increase"
              },
              {
                icon: Users,
                title: "Hospitality-Trained Team",
                description: "Our team is trained in hospitality standards, not just house cleaning. We think like hotel housekeepers.",
                stat: "500+ hours of specialized training"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="text-cyan-300 font-semibold text-sm">{benefit.stat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Vacation Rental Owners
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
                Say About Us
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from real vacation rental owners across Volusia County.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200"
                >
                  <div className="flex items-center justify-center mb-6">
                    <Quote className="w-8 h-8 text-pink-500" />
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6">
                      &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-bold text-slate-900">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-slate-600">{testimonials[activeTestimonial].role}</p>
                      <p className="text-sm text-pink-600 font-medium">{testimonials[activeTestimonial].property}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-pink-500 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-600 mb-6">Ready to join 500+ satisfied vacation rental owners?</p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Using master_divas.jpg background */}
      <section id="contact" className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/master_divas.jpg"
            alt="Contact Dazzle Divas"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/90 to-cyan-900/90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300">
                  Vacation Rental?
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get your free quote within 24 hours. Same-day service available throughout Volusia County.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact methods */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                
                <a href="tel:+13863015775" className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Call for Immediate Service</p>
                    <p className="text-2xl font-bold">(386) 301-5775</p>
                    <p className="text-sm text-white/80">Available 7 days a week</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Service Area</p>
                    <p className="text-lg font-medium">All of Volusia County</p>
                    <p className="text-sm text-white/80">Daytona Beach • Ormond Beach • New Smyrna Beach • Port Orange • Ormond-by-the-Sea • Plus More!</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="p-3 bg-purple-500 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Response Time</p>
                    <p className="text-lg font-medium">Same Day Service</p>
                    <p className="text-sm text-white/80">Emergency turnovers in 2-4 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick contact form -> replaced with fully implemented form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SecureModernContactForm />
              </motion.div>
            </div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Shield className="w-8 h-8 text-green-400" />
                <h4 className="text-xl font-bold">100% Satisfaction Guarantee</h4>
              </div>
              <p className="text-white/90">
                If you&apos;re not completely satisfied with our service, we&apos;ll return the next day and re-clean for free. 
                Your guest reviews are our priority.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/Divas_logo-pink.jpg" alt="Dazzle Divas" width={40} height={40} className="h-10 w-10 rounded-full" />
                <div>
                  <h3 className="font-bold">Dazzle Divas Cleaning</h3>
                  <p className="text-sm text-slate-400">Vacation Rental Specialists</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Elevating vacation rentals across Volusia County with professional, guest-ready cleaning services since 2018.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Vacation Rental Turnover</li>
                <li>Emergency Cleaning</li>
                <li>Property Management</li>
                <li>Deep Clean & Reset</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Daytona Beach</li>
                <li>Ormond Beach</li>
                <li>New Smyrna Beach</li>
                <li>Port Orange</li>
                <li>+ All Volusia County</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-slate-400">
                <p>(386) 301-5775</p>
                <p>Available 7 Days a Week</p>
                <p>Same-Day Service Available</p>
                <div className="mt-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {currentYear} Dazzle Divas Cleaning LLC. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Image modal */}
      <AnimatePresence>
        {isCompetitiveOpen && (
          <div role="dialog" aria-modal="true" aria-label="Competitive services details">
            <CompetitiveServicesPage onClose={() => setIsCompetitiveOpen(false)} />
          </div>
        )}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded portfolio image"
            tabIndex={-1}
            onKeyDown={(e) => { if (e.key === 'Escape') setSelectedImage(null); }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-[90vw] max-w-4xl h-[60vh]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 70vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <span className="bg-pink-500 px-2 py-1 rounded text-xs font-semibold">{selectedImage.category}</span>
                      <h3 className="text-2xl font-bold mt-2">{selectedImage.title}</h3>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernDazzleDivasWebsite;
