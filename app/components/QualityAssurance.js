// app/components/QualityAssurance.js

'use client';

import { CheckCircle, Users, Zap, TrendingUp, Award, Shield, Sparkles, Clock } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

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
      description: "Our detailed, room-specific checklists ensure consistent, thorough cleaning every time. From baseboards to light fixtures, nothing is overlooked."
    },
    {
      icon: Users,
      title: "Continuous Training",
      description: "Our team undergoes regular training on the latest cleaning techniques, safety protocols, and customer service best practices to stay at the forefront of the industry."
    },
    {
      icon: Zap,
      title: "Quality Control Inspections",
      description: "Regular, unannounced quality control checks by our management team ensure our high standards are consistently met and exceeded."
    },
    {
      icon: TrendingUp,
      title: "Customer Feedback Integration",
      description: "We actively seek and incorporate client feedback into our processes, constantly evolving to meet and exceed expectations."
    },
    {
      icon: Award,
      title: "Industry-Leading Expertise",
      description: "With over 20 years of combined experience, our cleaning specialists bring unparalleled knowledge and skill to every job, big or small."
    },
    {
      icon: Shield,
      title: "Fully Insured and Bonded",
      description: "Your peace of mind is our priority. We're fully insured and bonded, providing complete protection for your property and possessions."
    },
    {
      icon: Sparkles,
      title: "Eco-Friendly Products",
      description: "We use environmentally friendly, non-toxic cleaning products that are tough on dirt but gentle on your family, pets, and the planet."
    },
    {
      icon: Clock,
      title: "Timely and Reliable Service",
      description: "We respect your time and schedule. Our team arrives promptly and completes tasks efficiently without compromising on quality."
    }
  ];

  return (
    <section ref={sectionRef} id="quality" className="relative py-96">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/master_divas.jpg"
          alt="Quality background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
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
            Our Unwavering Commitment to Quality
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Dazzle Divas Cleaning, quality isn't just a promise – it's our passion. Every clean is an opportunity to exceed expectations and redefine what clean truly means. Our rigorous quality assurance process ensures that your space doesn't just look clean, it feels clean, smells clean, and promotes a healthier environment for all who enter.
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
            <QualityFeature 
              key={feature.title} 
              {...feature} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>

      {/* Add decorative elements */}
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