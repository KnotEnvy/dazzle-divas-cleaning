// app/components/About.js

import { Star, Sparkles, Heart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <Icon size={48} className="text-diva-pink mb-4" />
    <h3 className="text-xl font-bold text-diva-blue mt-2">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

export default function About() {
  const features = [
    { 
      icon: Star, 
      title: "Expert Team", 
      description: "Our professional cleaners are more than just staff – they're cleaning artisans. Rigorously trained and passionate about their craft, each team member is committed to delivering excellence in every task, no matter how small." 
    },
    { 
      icon: Sparkles, 
      title: "Attention to Detail", 
      description: "At Dazzle Divas, we believe that true cleanliness lies in the details. Our meticulous approach ensures that every surface shines, every corner is dust-free, and every space is refreshed to perfection. Your satisfaction is in the details, and we never overlook them." 
    },
    { 
      icon: Heart, 
      title: "Customer-Centric Approach", 
      description: "Your happiness is our mission. We listen to your needs, adapt to your preferences, and go above and beyond to exceed your expectations. Our success is measured by your smile when you step into your freshly cleaned space." 
    }
  ];

  return (
    <section id="about" className="relative py-96 bg-fixed bg-cover bg-center text-white" style={{backgroundImage: "url('/images/master2_divas.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-in-up">The Dazzle Divas Difference</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-white animate-fade-in-up delay-100">
          For over two decades, Dazzle Divas Cleaning has been more than just a cleaning service – we've been your partners in creating healthier, brighter spaces. Our passion for perfection, commitment to sustainability, and dedication to customer satisfaction set us apart in the industry. We don't just clean; we transform spaces and elevate lifestyles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className={`animate-fade-in-up delay-${(index + 2) * 100}`}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}