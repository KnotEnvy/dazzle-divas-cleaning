// components/CleaningProcess.js


import { ClipboardCheck, Sparkles, Bed, Bath, CookingPot, Clock } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <Icon size={48} className="text-diva-pink" />
    <h3 className="text-xl font-bold text-diva-blue mt-2">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default function CleaningProcess() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-diva-blue">Our Dazzling Cleaning Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep 
            icon={ClipboardCheck}
            title="Initial Assessment"
            description="We thoroughly check each unit for misplaced or broken items and overall condition."
          />
          <ProcessStep 
            icon={Bed}
            title="Bedding & Linens"
            description="We strip beds, manage linens efficiently, and make beds to perfection."
          />
          <ProcessStep 
            icon={Sparkles}
            title="Dusting & Surfaces"
            description="Every surface is dusted and cleaned, from ceiling to floor."
          />
          <ProcessStep 
            icon={Bath}
            title="Bathroom Brilliance"
            description="We ensure spotless, sanitized bathrooms with shining fixtures."
          />
          <ProcessStep 
            icon={CookingPot}
            title="Kitchen Detailing"
            description="Appliances, cabinets, and surfaces are thoroughly cleaned and polished."
          />
          <ProcessStep 
            icon={Clock}
            title="Final Inspection"
            description="We review our work to ensure every detail meets our high standards."
          />
        </div>
      </div>
    </section>
  );
}