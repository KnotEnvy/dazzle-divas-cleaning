// components/Services.js
import ServiceCard from './ServiceCard';
import { Home, Sparkles, Building, Recycle, Star, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Home Cleaning", description: "Thorough and reliable home cleaning services.", icon: <Home /> },
    { title: "Office Cleaning", description: "Professional cleaning for your workplace.", icon: <Building /> },
    { title: "Deep Cleaning", description: "Intensive cleaning for all those hard-to-reach places.", icon: <Sparkles /> },
    { title: "Green Cleaning", description: "Eco-friendly cleaning solutions for your peace of mind.", icon: <Recycle /> },
    { title: "Spring Cleaning", description: "Comprehensive cleaning to refresh your space.", icon: <Star /> },
    { title: "Renovation Cleaning", description: "Post-construction and renovation cleanup services.", icon: <Wrench /> }
  ];

  return (
    <section id="services" className="py-96 bg-diva-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white animate-fade-in-up">Our Dazzling Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className={`animate-fade-in-up delay-${index * 500}`}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}