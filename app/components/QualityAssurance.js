// app/components/QualityAssurance.js

"use client";

import { CheckCircle, Users, Zap, TrendingUp, Award, Shield, Sparkles, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const QualityFeature = ({ icon: Icon, title, description, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center bg-white bg-opacity-90 p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
    >
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <Icon size={48} className="text-diva-pink mb-4" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="ml-4"
      >
        <h3 className="text-xl font-semibold text-diva-blue">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default function QualityAssurance() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const qualityFeatures = [
    {
      icon: CheckCircle,
      title: "Comprehensive Checklists",
      description: "Every guest space is prepared with detailed checklists ensuring cleanliness, comfort, and a welcoming atmosphere.",
    },
    {
      icon: Users,
      title: "Specialized Training",
      description: "Our team receives ongoing training in hospitality standards, ensuring every guest experience exceeds expectations.",
    },
    {
      icon: Zap,
      title: "Quality Control Inspections",
      description: "Regular inspections guarantee that each rental is guest-ready, maintaining high standards with every visit.",
    },
    {
      icon: TrendingUp,
      title: "Guest Feedback Integration",
      description: "We actively incorporate host and guest feedback to continually enhance our services and guest satisfaction.",
    },
    {
      icon: Award,
      title: "Hospitality Expertise",
      description: "With years of experience in the hospitality industry, our experts know how to create a memorable guest experience.",
    },
    {
      icon: Shield,
      title: "Fully Insured & Bonded",
      description: "Rest easy knowing your property is protected by our comprehensive insurance, designed for high-turnover rental environments.",
    },
    {
      icon: Sparkles,
      title: "Eco-Friendly Solutions",
      description: "We use green cleaning products that are safe for guests, families, and the environment.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Our prompt and reliable service ensures your rental is always ready for guest check-in.",
    },
  ];

  return (
    <section ref={sectionRef} id="quality" className="relative py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/master_divas.jpg"
          alt="Quality background"
          fill
          quality={100}
          sizes="100vw"
          priority={true}
          className="transition-opacity duration-300"
          style={{ objectFit: "cover" }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black z-5"
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
            Our Commitment to Guest-Ready Quality
          </motion.h2>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Dazzle Divas, we understand that every detail matters. Our rigorous quality checks ensure your rental is always guest-ready.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <Sparkles className="text-diva-pink h-8 w-8" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <QualityFeature key={feature.title} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-10 right-10 text-diva-pink opacity-20"
      >
        <Sparkles size={120} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-10 left-10 text-diva-pink opacity-20"
      >
        <Sparkles size={120} />
      </motion.div>
    </section>
  );
}