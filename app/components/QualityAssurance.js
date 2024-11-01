import { CheckCircle, Users, Zap, TrendingUp, Award, Shield, Sparkles, Clock } from 'lucide-react';
import Image from 'next/image';

const QualityFeature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center bg-white bg-opacity-90 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <Icon size={48} className="text-diva-pink" />
    <div className="ml-4">
      <h3 className="text-xl font-semibold text-diva-blue">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

export default function QualityAssurance() {
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
    <section id="quality" className="py-96 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/master_divas.jpg"
          alt="Quality background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white py-2 rounded-lg">Our Unwavering Commitment to Quality</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-white">
          At Dazzle Divas Cleaning, quality isn't just a promise – it's our passion. Every clean is an opportunity to exceed expectations and redefine what clean truly means. Our rigorous quality assurance process ensures that your space doesn't just look clean, it feels clean, smells clean, and promotes a healthier environment for all who enter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={feature.title} className={`animate-fade-in-up delay-${index * 100}`}>
              <QualityFeature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}