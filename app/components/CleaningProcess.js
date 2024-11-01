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
      className="flex flex-col items-center text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Icon size={48} className="text-diva-pink mb-4" />
      <h3 className="text-xl font-bold text-diva-blue mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default function CleaningProcess() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });

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
    <section ref={sectionRef} id="process" className="relative py-96 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('/images/swans2_divas.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Dazzling Cleaning Process
        </motion.h2>
        <motion.p
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Dazzle Divas Cleaning, we've perfected our cleaning process to ensure every nook and cranny of your space sparkles. Our systematic approach, combined with attention to detail, delivers consistent, outstanding results every time.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} {...step} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}