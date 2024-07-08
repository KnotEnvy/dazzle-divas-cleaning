// pages/index.js
import Layout from './components/Layout';
import ServiceCard from './components/ServiceCard'
import ContactForm from './components/ContactForm';

import { Home, Sparkles, Office, Recycle, Star, Tool, Heart } from 'lucide-react';

export default function Main() {
  return (
    <Layout>
<section className="bg-gradient-to-r from-diva-pink to-purple-600 text-white py-20">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
      Transform Your Space with Dazzle Divas Cleaning
    </h1>
    <p className="text-xl mb-8 animate-fade-in-up">
      Let our cleaning magic make your home or office sparkle!
    </p>
    <button className="bg-white text-diva-pink font-bold py-2 px-4 rounded-full hover:bg-pink-100 transition duration-300 flex items-center justify-center mx-auto animate-bounce">
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
      {/* <ServiceCard
  title="Office Cleaning"
  description="Professional cleaning for your workplace."
  icon={<Office />}
/> */}
  {/* <ServiceCard
    title="Renovation Cleaning"
    description="Post-construction and renovation cleanup services."
    icon={<Tool />}
  /> */}
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

            {/* Add Service Cards here */}
          </div>
        </div>
      </section>

      <section id="about" className="text-diva-blue bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-diva-pink">The Dazzle Divas Difference</h2>
    <p className="text-lg text-center max-w-2xl mx-auto mb-8">
      With over 20 years of cleaning expertise, Dazzle Divas isn't just a cleaning service – we're your partners in creating healthier, brighter spaces.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div className="text-center">
        <Star className="mx-auto text-diva-pink text-4xl mb-4" />
        <h3 className="font-bold mb-2">Expert Team</h3>
        <p>Our professional cleaners are trained to deliver exceptional results.</p>
      </div>
      <div className="text-center">
        <Sparkles className="mx-auto text-diva-pink text-4xl mb-4" />
        <h3 className="font-bold mb-2">Attention to Detail</h3>
        <p>We ensure every corner of your space shines with our meticulous approach.</p>
      </div>
      <div className="text-center">
        <Heart className="mx-auto text-diva-pink text-4xl mb-4" />
        <h3 className="font-bold mb-2">Customer Satisfaction</h3>
        <p>Your happiness is our priority. We're not satisfied until you are.</p>
      </div>
    </div>
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
