// app/components/About.js

"use client";

import { Star, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <Icon size={48} className="text-diva-pink mb-4" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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

export default function About() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const features = [
    {
      icon: Star,
      title: "Expert Team",
      description:
        "Our professional cleaners are experts in hospitality, dedicated to creating exceptional guest experiences in every rental.",
    },
    {
      icon: Sparkles,
      title: "Unmatched Attention to Detail",
      description:
        "Every corner, surface, and amenity is meticulously cared for, ensuring your guests feel right at home from the moment they arrive.",
    },
    {
      icon: Heart,
      title: "Guest-Centric Approach",
      description:
        "We prioritize your guests' comfort and satisfaction, tailoring our services to meet the unique needs of rental properties.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-96 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/master2_divas.jpg')" }}
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
          className="text-center"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            The Dazzle Divas Difference
          </motion.h2>
          <motion.p
            className="text-xl text-center max-w-3xl mx-auto mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With decades of experience in hospitality cleaning, we transform rental properties into inviting, guest-ready spaces that leave a lasting impression.
          </motion.p>
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
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
