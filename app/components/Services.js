// components/Services.js
import ServiceCard from './ServiceCard';
import { Home, Sparkles, Building, Recycle, Star, Wrench } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-16 bg-diva-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Dazzling Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Home Cleaning"
            description="Thorough and reliable home cleaning services."
            icon={<Home />}
          />
          <ServiceCard
            title="Office Cleaning"
            description="Professional cleaning for your workplace."
            icon={<Building />}
          />
          <ServiceCard
            title="Deep Cleaning"
            description="Intensive cleaning for all those hard-to-reach places."
            icon={<Sparkles />}
          />
          <ServiceCard
            title="Green Cleaning"
            description="Eco-friendly cleaning solutions for your peace of mind."
            icon={<Recycle />}
          />
          <ServiceCard
            title="Spring Cleaning"
            description="Comprehensive cleaning to refresh your space."
            icon={<Star />}
          />
          <ServiceCard
            title="Renovation Cleaning"
            description="Post-construction and renovation cleanup services."
            icon={<Wrench />}
          />
        </div>
      </div>
    </section>
  );
}