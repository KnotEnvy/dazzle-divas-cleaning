// app/components/CleaningProcess.js

'use client';

import { ClipboardCheck, Feather, Bed, Bath, CookingPot, Clock, Sparkles, Shield } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const ProcessStep = ({ icon: Icon, title, description, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? 
        { opacity: 1, y: 0, scale: 1 } : 
        { opacity: 0, y: 20, scale: 0.95 }
      }
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ 
          duration: 0.6, 
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200
        }}
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

      {/* Step number indicator */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="absolute -top-3 -right-3 w-8 h-8 bg-diva-pink rounded-full flex items-center justify-center text-white font-bold"
      >
        {Math.floor(delay * 10) + 1}
      </motion.div> */}
    </motion.div>
  );
};

export default function CleaningProcess() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const steps = [
    { 
      icon: ClipboardCheck, 
      title: "Initial Assessment", 
      description: "We begin with a thorough evaluation of your space, noting specific areas of concern and any special requests. This personalized approach ensures we meet your unique cleaning needs." 
    },
    { 
      icon: Shield, 
      title: "Preparation", 
      description: "Our team arrives equipped with eco-friendly, high-grade cleaning supplies. We take care to protect your belongings and surfaces before beginning the cleaning process." 
    },
    { 
      icon: Feather, 
      title: "Top-to-Bottom Dusting", 
      description: "Using microfiber cloths and extendable dusters, we remove dust and cobwebs from ceiling to floor, including often-overlooked areas like ceiling fans, door frames, and baseboards." 
    },
    { 
      icon: CookingPot, 
      title: "Kitchen Deep Clean", 
      description: "We tackle your kitchen with precision, sanitizing countertops, scrubbing appliances inside and out, and ensuring your cooking space is spotless and ready for your culinary adventures." 
    },
    { 
      icon: Bath, 
      title: "Bathroom Brilliance", 
      description: "Our bathroom cleaning process is meticulous. We disinfect all surfaces, polish fixtures to a shine, and ensure your bathrooms are hygienic and fresh." 
    },
    { 
      icon: Bed, 
      title: "Bedroom Refresh", 
      description: "We create a tranquil sleeping environment by dusting surfaces, vacuuming carpets, changing linens (upon request), and ensuring your personal spaces are clean and inviting." 
    },
    { 
      icon: Sparkles, 
      title: "Living Areas Revitalization", 
      description: "From vacuuming and mopping floors to cleaning windows and organizing common areas, we breathe new life into your living spaces, making them perfect for relaxation or entertaining." 
    },
    { 
      icon: Clock, 
      title: "Final Inspection", 
      description: "Before we leave, our team conducts a final walk-through to ensure every task is completed to our high standards. We're not satisfied until your space is dazzling!" 
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="process" 
      className="relative py-96 bg-fixed bg-cover bg-center" 
      style={{backgroundImage: "url('/images/swans2_divas.jpg')"}}
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
            Our Dazzling Cleaning Process
          </motion.h2>

          <motion.p
            className="text-xl text-center max-w-3xl mx-auto mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Dazzle Divas Cleaning, We&apos;ve perfected our cleaning process to ensure every nook and cranny of your space sparkles. Our systematic approach, combined with attention to detail, delivers consistent, outstanding results every time.
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
            <ProcessStep 
              key={step.title} 
              {...step} 
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Connecting lines between steps */}
        {/* <div className="hidden lg:block absolute inset-0 z-0">
          <motion.svg
            className="w-full h-full"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <path
              d="M100 50 L300 50 L500 50 L700 50"
              stroke="var(--diva-pink)"
              strokeWidth="2"
              fill="none"
            />
          </motion.svg>
        </div> */}
      </div>

      {/* Decorative elements */}
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