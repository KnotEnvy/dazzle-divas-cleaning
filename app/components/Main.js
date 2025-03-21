// app/components/Main.js
import Layout from './Layout';
import Hero from './Hero';
import Services from './Services';
import CleaningProcess from './CleaningProcess';
import ImageShowcase from './ImageShowcase';
import About from './About';
import QualityAssurance from './QualityAssurance';
import ContactSection from './ContactUs';
import Testimonials from './Testimonials';

export default function Main() {
  return (
    <Layout>
      <Hero />
      <Services />
      <CleaningProcess />
      <ImageShowcase />
      <About />
      <QualityAssurance />
      <Testimonials />
      <ContactSection />

    </Layout>
  );
}