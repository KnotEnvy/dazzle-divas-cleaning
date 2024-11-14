// app/components/Services.js

'use client';

import { motion } from 'framer-motion';
import { Home, Sparkles, Building, Recycle, Flower2, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
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

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  const services = [
    { 
      icon: Home, 
      title: "Home Cleaning", 
      description: "Experience the Dazzle Divas difference in your home. Our thorough and reliable home cleaning services are tailored to your specific needs. From daily touch-ups to deep cleans, we ensure your living space is always a sparkling sanctuary."
    },
    { 
      icon: Building, 
      title: "Office Cleaning", 
      description: "Boost productivity with a pristine workplace. Our professional office cleaning services cover everything from desk areas to conference rooms. We work around your schedule to minimize disruptions and maximize cleanliness."
    },
    { 
      icon: Sparkles, 
      title: "Deep Cleaning", 
      description: "When ordinary cleaning isn't enough, our deep cleaning service goes above and beyond. We tackle those often-overlooked areas, leaving no corner untouched. Perfect for spring cleaning or preparing for special events."
    },
    { 
      icon: Recycle, 
      title: "Green Cleaning", 
      description: "Clean conscientiously with our eco-friendly options. We use environmentally safe products and sustainable practices to give you a spotless space without harming the planet. Choose green for a healthier home and office."
    },
    { 
      icon: Flower2, 
      title: "Vacation Rental Turnover", 
      description: "Maximize your rental property's potential with our specialized turnover cleaning. We ensure every inch is spotless and welcoming for your next guests, helping you maintain top ratings and repeat bookings."
    },
    { 
      icon: Wrench, 
      title: "Post-Construction Cleaning", 
      description: "From renovation dust to new build debris, our post-construction cleaning service transforms your space from a work site to a pristine environment. We handle the tough cleaning so you can enjoy your newly finished space."
    }
  ];

  return (
    <section ref={ref} id="services" className="relative py-96 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('/images/master2_divas.jpg')"}}>
      <div className="absolute inset-0 bg-diva-blue opacity-85"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Dazzling Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}