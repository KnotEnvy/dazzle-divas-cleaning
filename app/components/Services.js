// app/components/Services.js

"use client";

import { motion } from "framer-motion";
import { Home, Sparkles, Building, Recycle, Flower2, Wrench } from "lucide-react";
import { useInView } from "../hooks/useInView";

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
    >
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="mb-4"
      >
        <Icon size={48} className="text-diva-pink" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="text-xl font-bold text-diva-blue mt-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="text-gray-600 mt-2"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function Services() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const services = [
    {
      icon: Home,
      title: "Rental Cleaning",
      description:
        "Experience our meticulous cleaning tailored for vacation rentals, ensuring your property shines and creates a welcoming space for every guest.",
    },
    {
      icon: Flower2,
      title: "Vacation Rental Turnover",
      description:
        "Maximize your rental’s potential with our specialized turnover cleaning. We prepare your property to impress guests and secure top reviews.",
    },
    {
      icon: Building,
      title: "Property Management Cleaning",
      description:
        "Enhance your commercial rental spaces with our professional cleaning services designed for busy property managers and guest satisfaction.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description:
        "Our deep cleaning service goes beyond the surface, ensuring every corner is spotless and guest-ready, perfect for seasonal refreshes.",
    },
    {
      icon: Recycle,
      title: "Green Cleaning",
      description:
        "Choose our eco-friendly cleaning options that are safe for guests and sustainable for your property, without compromising on quality.",
    },
    {
      icon: Wrench,
      title: "Post-Renovation Turnover",
      description:
        "Transform your renovated property into a pristine rental ready for guests, with our thorough cleaning and setup services.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-96 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/master2_divas.jpg')" }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.85 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-diva-blue"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Our Specialized Rental Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <Sparkles className="text-diva-pink h-8 w-8" />
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.2, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-0 top-1/4 text-diva-pink"
        >
          <Sparkles size={100} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 0.2, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute right-0 bottom-1/4 text-diva-pink"
        >
          <Sparkles size={100} />
        </motion.div>
      </div>
    </section>
  );
}

