// app/components/CompetitiveServices.js

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Shield, Clock, CheckCircle, Phone, Award, Users, 
  TrendingUp, MapPin, Calendar, Sparkles, Home, Building, Zap, X,
  ChevronRight, Play, ExternalLink, MessageCircle, Mail, ChevronDown
} from 'lucide-react';

const CompetitiveServicesPage = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Competitive positioning against others
  const competitorComparison = {
    "Regular House Cleaners": {
      approach: "One-size-fits-all cleaning",
      time: "4-6 hours",
      focus: "Basic cleaning tasks",
      guarantee: "Standard satisfaction",
      expertise: "General residential",
      pricing: "$80-100",
      availability: "Limited scheduling",
      icon: "❌",
      color: "text-red-500"
    },
    "Corporate Chains (Cleaning Authority)": {
      approach: "Rotation system for all homes",
      time: "3-5 hours", 
      focus: "Checklist completion",
      guarantee: "Corporate policies",
      expertise: "Volume-based service",
      pricing: "$90-120",
      availability: "Standard business hours",
      icon: "⚠️",
      color: "text-yellow-500"
    },
    "Dazzle Divas": {
      approach: "Vacation rental specialization",
      time: "2-4 hours",
      focus: "Guest-ready standards",
      guarantee: "Your reviews guaranteed",
      expertise: "Hospitality industry experts",
      pricing: "$100-180",
      availability: "24/7 emergency service",
      icon: "✨",
      color: "text-green-500"
    }
  };

  const detailedServices = [
    {
      id: 'vacation-rental-turnover',
      icon: Calendar,
      title: "Vacation Rental Turnover",
      subtitle: "Our Signature Specialty",
      shortDescription: "2-4 hour guest-ready guarantee with hospitality standards",
      price: "Starting at $100",
      duration: "2-4 hours",
      guarantee: "Guest review protection",
      availability: "Same-day available",
      badge: "Most Popular",
      badgeColor: "bg-pink-500",
      gradient: "from-pink-500 to-pink-600",
      description: "While other cleaning services treat your vacation rental like a regular house, we understand that your guest reviews and booking success depend on hospitality-grade cleanliness. Every surface, every detail, every amenity is prepared to hospitality industry standards.",
      detailedFeatures: [
        {
          category: "Guest Experience Focus",
          items: [
            "Welcome area staging and presentation",
            "Guest amenity verification and restocking",
            "Bathroom spa-like preparation",
            "Kitchen fully stocked and sanitized",
            "Living areas arranged for comfort and photos"
          ]
        },
        {
          category: "Review Protection",
          items: [
            "Photo documentation of completed work", 
            "Guest-ready checklist verification",
            "Issue identification and resolution",
            "Follow-up within 24 hours of guest arrival",
            "Re-clean guarantee if review mentions cleanliness"
          ]
        },
        {
          category: "Property Management",
          items: [
            "Maintenance issue reporting",
            "Inventory tracking and alerts",
            "Damage assessment and documentation", 
            "Key management and security checks",
            "Utility and appliance functionality verification"
          ]
        }
      ],
      competitiveAdvantages: [
        "50% faster than traditional cleaning services",
        "Guest review protection guarantee (unique in market)",
        "Hospitality-trained staff vs house cleaning staff", 
        "Emergency same-day availability",
        "Photo verification of completed work",
        "Property management integration"
      ],
      idealFor: [
        "Airbnb and VRBO hosts",
        "Property management companies",
        "Luxury vacation rental owners",
        "High-turnover properties",
        "Properties with strict guest standards",
        "Hosts focused on 5-star reviews"
      ]
    },
    {
      id: 'emergency-service',
      icon: Zap,
      title: "Emergency Same-Day Service",
      subtitle: "Unique to Volusia County",
      shortDescription: "Last-minute turnovers and disaster cleanup in 2-4 hours",
      price: "Standard rates apply",
      duration: "2-4 hours",
      guarantee: "Same response time",
      availability: "24/7 including holidays",
      badge: "Emergency Ready",
      badgeColor: "bg-red-500",
      gradient: "from-red-500 to-red-600",
      description: "Unexpected checkout mess? Last-minute booking? Guest complaint about cleanliness? We're the only service in Volusia County with guaranteed same-day emergency turnovers. When your reviews and revenue are on the line, we respond immediately.",
      detailedFeatures: [
        {
          category: "Emergency Response",
          items: [
            "2-hour guaranteed response time",
            "Available 365 days per year",
            "Holiday and weekend availability",
            "Storm damage cleanup coordination",
            "Guest complaint immediate resolution"
          ]
        },
        {
          category: "Disaster Recovery",
          items: [
            "Water damage cleanup and restoration prep",
            "Post-party intensive cleaning",
            "Pet damage remediation", 
            "Appliance malfunction cleanup",
            "HVAC and plumbing incident cleanup"
          ]
        },
        {
          category: "Last-Minute Bookings",
          items: [
            "Same-day booking preparation",
            "Rush turnover without quality compromise",
            "Immediate availability confirmation",
            "Real-time progress updates via text",
            "Photo confirmation upon completion"
          ]
        }
      ],
      competitiveAdvantages: [
        "Only 24/7 emergency service in Volusia County",
        "No rush fees or premium charges",
        "2-hour response guarantee",
        "Disaster cleanup expertise",
        "Insurance claim support and documentation",
        "Direct communication with property managers"
      ],
      idealFor: [
        "High-volume rental managers",
        "Luxury properties with strict standards",
        "Properties in hurricane-prone areas",
        "Hosts with frequent last-minute bookings",
        "Property managers with multiple units",
        "Commercial vacation rental operations"
      ]
    },
    {
      id: 'property-management',
      icon: Building,
      title: "Property Management Packages",
      subtitle: "Multi-Property Specialists",
      shortDescription: "Bulk services and dedicated support for rental portfolios",
      price: "Custom packages from $95/unit",
      duration: "Varies by portfolio",
      guarantee: "Portfolio performance tracking",
      availability: "Priority scheduling",
      badge: "Pro Service",
      badgeColor: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
      description: "Managing multiple vacation rentals requires a different approach than single-property owners. We provide dedicated account management, volume pricing, priority scheduling, and performance tracking specifically designed for property management companies and multi-unit owners.",
      detailedFeatures: [
        {
          category: "Account Management",
          items: [
            "Dedicated account manager assigned",
            "Direct communication line for urgent issues",
            "Monthly portfolio performance reviews",
            "Seasonal planning and preparation",
            "Custom service protocols per property"
          ]
        },
        {
          category: "Operational Efficiency",
          items: [
            "Priority scheduling across all properties",
            "Bulk service discounts (15-25% savings)",
            "Centralized billing and reporting",
            "Property-specific checklists and requirements",
            "Staff continuity - same teams per property"
          ]
        },
        {
          category: "Performance Tracking",
          items: [
            "Monthly cleanliness and maintenance reports",
            "Guest satisfaction tracking by property",
            "Cost per booking and ROI analysis",
            "Maintenance issue trend identification",
            "Inventory management and restocking alerts"
          ]
        }
      ],
      competitiveAdvantages: [
        "15-25% volume discounts not available elsewhere",
        "Dedicated account management (competitors don't offer)",
        "Portfolio-wide performance tracking and reporting",
        "Priority scheduling guarantees",
        "Staff continuity and property familiarity",
        "Integration with property management software"
      ],
      idealFor: [
        "Property management companies",
        "Real estate investment firms",
        "Multi-unit vacation rental owners",
        "Corporate housing providers",
        "Hotel and resort partnerships",
        "Franchise vacation rental operators"
      ]
    },
    {
      id: 'deep-clean-reset',
      icon: Sparkles,
      title: "Deep Clean & Seasonal Reset",
      subtitle: "Beyond Basic Deep Cleaning",
      shortDescription: "Complete property refresh with staging and photography prep",
      price: "Starting at $180",
      duration: "4-6 hours",
      guarantee: "Move-in ready standard",
      availability: "Scheduled in advance",
      badge: "Seasonal Special",
      badgeColor: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600",
      description: "More than deep cleaning - we completely reset and refresh your vacation rental for the new season. This includes deep cleaning, maintenance check, seasonal decor updates, guest amenity restocking, and photography-ready staging.",
      detailedFeatures: [
        {
          category: "Complete Deep Clean",
          items: [
            "Every surface cleaned and sanitized",
            "All appliances deep cleaned inside and out",
            "Windows, screens, and tracks detailed",
            "Baseboards, ceiling fans, light fixtures",
            "Carpet deep cleaning or floor refinishing prep"
          ]
        },
        {
          category: "Property Reset & Staging",
          items: [
            "Seasonal decor installation and arrangement",
            "Guest amenity complete restocking",
            "Linen and towel inventory refresh",
            "Kitchen and bathroom supply restocking",
            "Living area staging for optimal photos"
          ]
        },
        {
          category: "Maintenance Integration",
          items: [
            "Comprehensive property condition assessment",
            "Maintenance issue identification and reporting",
            "Vendor coordination for repairs if needed",
            "Safety equipment check and replacement",
            "Utility and system functionality verification"
          ]
        }
      ],
      competitiveAdvantages: [
        "Staging and photography preparation included", 
        "Seasonal decor and amenity refresh",
        "Maintenance assessment and coordination",
        "Move-in ready guarantee",
        "Guest amenity restocking service",
        "Property value enhancement focus"
      ],
      idealFor: [
        "New vacation rental setups",
        "Seasonal property refreshes",
        "Properties needing photography updates",
        "Post-renovation cleanup and staging",
        "Properties returning from long-term rentals",
        "Annual deep clean and reset service"
      ]
    }
  ];

  const [selectedService, setSelectedService] = useState(detailedServices[0]);

  const whyChooseDazzleDivas = [
    {
      icon: Award,
      title: "Vacation Rental Specialists",
      description: "Unlike general cleaners, we understand guest expectations, hospitality standards, and what creates 5-star reviews.",
      stat: "98% guest satisfaction vs 78% industry average",
      color: "text-pink-600"
    },
    {
      icon: Clock,
      title: "Fastest Turnovers in Market",
      description: "2-4 hour guaranteed turnovers vs 4-8 hours from competitors. Your property is ready when guests arrive.",
      stat: "50% faster than traditional services",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Review Protection Guarantee",
      description: "Your guest reviews are guaranteed. If cleanliness affects a review, we'll re-clean for free and work with you to address concerns.",
      stat: "Zero negative cleanliness reviews in 2024",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "24/7 Emergency Availability",
      description: "Last-minute booking? Checkout disaster? We're the only service with true emergency availability in Volusia County.",
      stat: "2-hour emergency response time",
      color: "text-red-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Revenue Impact",
      description: "Clean, well-maintained properties book for 15-20% higher rates and get more bookings. We're an investment, not an expense.",
      stat: "$2,400 average annual revenue increase",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Hospitality Industry Training",
      description: "Our team is trained in hospitality standards, not just house cleaning. We think like hotel housekeepers, not house cleaners.",
      stat: "500+ hours of specialized training per team member",
      color: "text-cyan-600"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen bg-white">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md shadow-lg z-40">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src="/images/Divas_logo-pink.jpg" alt="Dazzle Divas" className="h-10 w-10 rounded-full" />
                <div>
                  <h1 className="text-lg font-bold text-slate-900">Our Services</h1>
                  <p className="text-xs text-slate-600">Vacation Rental Cleaning Specialists</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="tel:+13863015775" className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-4 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300">
                  Call (386) 301-5775
                </a>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="flex space-x-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === 'overview' 
                    ? 'border-pink-500 text-pink-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Service Overview
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === 'comparison' 
                    ? 'border-pink-500 text-pink-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                vs Competition
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === 'details' 
                    ? 'border-pink-500 text-pink-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Service Details
              </button>
              <button
                onClick={() => setActiveTab('why-us')}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === 'why-us' 
                    ? 'border-pink-500 text-pink-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Why Choose Us
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Vacation Rental Cleaning
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
                    Done Right
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  While other services treat your rental like a regular house, we understand that <strong>your guest reviews depend on perfection.</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {detailedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${service.badgeColor} mb-4`}>
                      {service.badge}
                    </div>

                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white`}>
                        <service.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                        <p className="text-sm text-slate-500">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Price:</span>
                        <span className="font-semibold text-slate-900">{service.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Duration:</span>
                        <span className="font-semibold text-slate-900">{service.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Availability:</span>
                        <span className="font-semibold text-green-600">{service.availability}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        setSelectedService(service);
                        setActiveTab('details');
                      }}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                    >
                      View Details
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-pink-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Vacation Rental?
                </h3>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join 500+ satisfied vacation rental owners who trust Dazzle Divas for guest-ready properties.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={onClose}
                    className="bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                  >
                    Get Free Quote
                  </button>
                  <a
                    href="tel:+13863015775"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    Call (386) 301-5775
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Comparison Tab */}
          {activeTab === 'comparison' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  How We Compare to
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
                    Other Cleaning Services
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  See why vacation rental owners choose Dazzle Divas over house cleaners and corporate chains.
                </p>
              </div>

              {/* Comparison table */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Service Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Approach</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Pricing</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Availability</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Expertise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {Object.entries(competitorComparison).map(([type, details]) => (
                        <tr key={type} className={type === "Dazzle Divas" ? "bg-green-50" : ""}>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg" aria-hidden="true">{type === 'Dazzle Divas' ? '✓' : (type.startsWith('Corporate') ? '△' : '✗')}</span>
                              <span className={`font-semibold ${type === "Dazzle Divas" ? "text-green-800" : "text-slate-700"}`}>
                                {type}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">{details.approach}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{details.time}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{details.pricing}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{details.availability}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{details.expertise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key differentiators */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200">
                  <h3 className="text-xl font-bold text-pink-800 mb-4">vs House Cleaners</h3>
                  <ul className="space-y-2">
                    {[
                      "Vacation rental specialization vs general cleaning",
                      "Guest experience focus vs basic cleaning",
                      "Hospitality standards vs residential standards",
                      "Review protection guarantee vs standard service",
                      "Emergency availability vs scheduled only"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span className="text-pink-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">vs Corporate Chains</h3>
                  <ul className="space-y-2">
                    {[
                      "Local ownership and accountability",
                      "Flexible service vs rigid corporate policies",
                      "Personal relationships vs call centers", 
                      "Emergency response vs standard scheduling",
                      "Competitive pricing vs corporate overhead"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Unique Advantages</h3>
                  <ul className="space-y-2">
                    {[
                      "Only 24/7 emergency service in Volusia County",
                      "Guest review protection guarantee",
                      "Property management integration",
                      "Photo verification of completed work",
                      "Revenue impact focus vs cost focus"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-green-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* Service Details Tab */}
          {activeTab === 'details' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Service selector */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Select Service</h3>
                  <div className="space-y-2">
                    {detailedServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                          selectedService.id === service.id
                            ? 'border-pink-300 bg-pink-50 text-pink-800'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white`}>
                            <service.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{service.title}</p>
                            <p className="text-xs text-slate-500">{service.price}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service details */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedService.gradient} text-white`}>
                        <selectedService.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900">{selectedService.title}</h2>
                        <p className="text-slate-500">{selectedService.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-500">Starting Price</p>
                        <p className="text-lg font-bold text-slate-900">{selectedService.price}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-500">Duration</p>
                        <p className="text-lg font-bold text-slate-900">{selectedService.duration}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-sm text-slate-500">Availability</p>
                        <p className="text-lg font-bold text-green-600">{selectedService.availability}</p>
                      </div>
                    </div>

                    <div className="prose max-w-none mb-8">
                      <p className="text-slate-600 leading-relaxed">{selectedService.description}</p>
                    </div>

                    {/* Detailed features */}
                    <div className="space-y-6 mb-8">
                      <h4 className="text-lg font-bold text-slate-900">What's Included</h4>
                      {selectedService.detailedFeatures.map((category, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg p-4">
                          <h5 className="font-semibold text-slate-900 mb-3">{category.category}</h5>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Competitive advantages */}
                    <div className="bg-gradient-to-r from-pink-50 to-cyan-50 rounded-xl p-6 mb-8">
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Why This Service Beats Competition</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedService.competitiveAdvantages.map((advantage, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Star className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal for */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Ideal For</h4>
                      <div className="grid md:grid-cols-3 gap-2">
                        {selectedService.idealFor.map((type, index) => (
                          <div key={index} className="bg-slate-100 rounded-lg px-3 py-2">
                            <span className="text-sm font-medium text-slate-700">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Why Choose Us Tab */}
          {activeTab === 'why-us' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Why Dazzle Divas Beats
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
                    Every Other Service
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  We're not just cleaners - we're vacation rental success partners who understand the hospitality business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseDazzleDivas.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${benefit.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{benefit.description}</p>
                    <div className={`bg-slate-50 rounded-lg p-3 border-l-4 ${benefit.color.replace('text-', 'border-')}`}>
                      <p className={`font-semibold text-sm ${benefit.color}`}>{benefit.stat}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-pink-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Experience the Dazzle Divas Difference
                  </h3>
                  <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Join 500+ vacation rental owners who've transformed their properties and increased their revenue with our specialized services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={onClose}
                      className="bg-white text-pink-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                    >
                      Get Your Free Quote
                    </button>
                    <a
                      href="tel:+13863015775"
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors duration-300"
                    >
                      Call (386) 301-5775
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CompetitiveServicesPage;
