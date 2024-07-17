// components/CleaningProcess.js
'use client';


import { ClipboardCheck, Sparkles, Bed, Bath, CookingPot, Clock } from 'lucide-react';
import Image from 'next/image';

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white bg-opacity-90 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <Icon size={48} className="text-diva-pink mb-2" />
    <h3 className="text-xl font-bold text-diva-blue mt-2">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default function CleaningProcess() {
    const steps = [
      { icon: ClipboardCheck, title: "Initial Assessment", description: "We thoroughly check each unit for misplaced items and overall condition." },
      { icon: Bed, title: "Bedding & Linens", description: "We strip beds, manage linens efficiently, and make beds to perfection." },
      { icon: Sparkles, title: "Dusting & Surfaces", description: "Every surface is dusted and cleaned, from ceiling to floor." },
      { icon: Bath, title: "Bathroom Brilliance", description: "We ensure spotless, sanitized bathrooms with shining fixtures." },
      { icon: CookingPot, title: "Kitchen Detailing", description: "Appliances, cabinets, and surfaces are thoroughly cleaned and polished." },
      { icon: Clock, title: "Final Inspection", description: "We review our work to ensure every detail meets our high standards." }
    ];
  
    return (
      <section className="relative py-96 bg-fixed bg-cover bg-center" style={{backgroundImage: "url('/images/swans_divas.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in-up">Our Dazzling Cleaning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className={`animate-fade-in-up delay-${index * 100}`}>
                <ProcessStep {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }