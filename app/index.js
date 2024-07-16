// pages/index.js
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import CleaningProcess from './components/CleaningProcess';
import ImageShowcase from './components/ImageShowcase';
import About from './components/About';
import QualityAssurance from './components/QualityAssurance';
import ContactForm from './components/ContactForm';

export default function Main() {
  return (
    <Layout>
      <Hero />
      <Services />
      <CleaningProcess />
      <ImageShowcase />
      <About />
      <QualityAssurance />
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Let's Get Your Space Dazzling!</h2>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}