// components/QualityAssurance.js
import { CheckCircle, Users, Zap, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const QualityFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start bg-white bg-opacity-90 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <Icon size={24} className="text-diva-pink" />
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-diva-blue">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

export default function QualityAssurance() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/master_divas.jpg"
          alt="Quality background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white bg-diva-blue bg-opacity-80 py-2 rounded-lg">Our Commitment to Quality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <QualityFeature 
            icon={CheckCircle}
            title="Comprehensive Checklists"
            description="We use detailed checklists to ensure every aspect of cleaning is covered, from initial assessment to final touches."
          />
          <QualityFeature 
            icon={Users}
            title="Ongoing Training"
            description="Our team regularly undergoes training to stay updated on the latest cleaning techniques and safety protocols."
          />
          <QualityFeature 
            icon={Zap}
            title="Performance Reviews"
            description="We conduct regular performance reviews to maintain high standards and identify areas for improvement."
          />
          <QualityFeature 
            icon={TrendingUp}
            title="Continuous Improvement"
            description="We actively seek client feedback and use it to continually enhance our services and exceed expectations."
          />
        </div>
      </div>
    </section>
  );
}