// app/components/CleaningProcess.js

"use client";

import { ClipboardCheck, Feather, Bed, Bath, CookingPot, Clock, Sparkles, Shield } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const ProcessStep = ({ icon: Icon, title, description, delay }) => {
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
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.6, delay: delay + 0.2, type: "spring", stiffness: 200 }}
      >
        <Icon size={48} className="text-diva-pink mb-4" />
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

export default function CleaningProcess() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Pre-Check-in Assessment",
      description:
        "We evaluate your rental space to identify guest-specific needs and areas for enhancement.",
    },
    {
      icon: Shield,
      title: "Guest-Ready Preparation",
      description:
        "Our team gears up with premium, eco-friendly supplies to protect and prepare your space.",
    },
    {
      icon: Feather,
      title: "Thorough Dusting",
      description:
        "Every surface is meticulously dusted to ensure a pristine environment for your guests.",
    },
    {
      icon: CookingPot,
      title: "Kitchen Deep Clean",
      description:
        "We sanitize and polish your kitchen, making it a safe and inviting space for culinary adventures.",
    },
    {
      icon: Bath,
      title: "Bathroom Excellence",
      description:
        "Our experts disinfect and refresh bathrooms, ensuring a sparkling, hygienic experience.",
    },
    {
      icon: Bed,
      title: "Room Refresh",
      description:
        "Bedrooms are carefully cleaned and prepared to offer a restful retreat for every guest.",
    },
    {
      icon: Sparkles,
      title: "Common Areas Revitalization",
      description:
        "Living spaces are rejuvenated with deep cleaning and stylish touches for a memorable stay.",
    },
    {
      icon: Clock,
      title: "Final Guest-Ready Inspection",
      description:
        "A final walkthrough ensures every detail is perfect, leaving your rental ready for guests.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-96 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/swans2_divas.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black"
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
            Our Comprehensive Cleaning Process
          </motion.h2>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our step-by-step process guarantees that every detail is handled, ensuring a rental space that delights every guest.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <Sparkles className="text-diva-pink h-8 w-8" />
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} {...step} delay={index * 0.1} />
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 0.2, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-10 text-diva-pink"
      >
        <Sparkles size={120} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 0.2, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-10 right-10 text-diva-pink"
      >
        <Sparkles size={120} />
      </motion.div>
    </section>
  );
}
