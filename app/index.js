// pages/index.js
import Layout from './components/Layout';
import ServiceCard from './components/ServiceCard'
import ContactForm from './components/ContactForm';

import { Home, Sparkles, Office } from 'lucide-react';

export default function Main() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-diva-pink to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Space with Dazzle Divas Cleaning</h1>
          <p className="text-xl mb-8">Let our cleaning magic make your home or office sparkle!</p>
          <button className="bg-white text-diva-pink font-bold py-2 px-4 rounded-full hover:bg-pink-100 transition duration-300 flex items-center">
            <Sparkles className="mr-2" /> Get Your Free Estimate
          </button>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Dazzling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
        title="Home Cleaning"
        description="Thorough and reliable home cleaning services."
        icon={<Home />}
      />
            <ServiceCard
        title="Deep Cleaning"
        description="Intensive cleaning for all those hard-to-reach places."
        icon={<Sparkles />}
      />
            {/* Add Service Cards here */}
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-400 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">The Dazzle Divas Difference</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            With over 20 years of cleaning expertise, Dazzle Divas isn't just a cleaning service – we're your partners in creating healthier, brighter spaces.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Let's Get Your Space Dazzling!</h2>
          {/* Add Contact Form here */}
          <ContactForm />

          
        </div>
      </section>
    </Layout>
  );
}
