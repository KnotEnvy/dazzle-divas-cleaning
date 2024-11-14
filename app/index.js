// app/index.js
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import CleaningProcess from './components/CleaningProcess';
import ImageShowcase from './components/ImageShowcase';
import About from './components/About';
import QualityAssurance from './components/QualityAssurance';
import ContactSection from './components/ContactUs';

export default function Main() {
  return (
    <Layout>
      <Hero />
      <Services />
      <CleaningProcess />
      <ImageShowcase />
      <About />
      <QualityAssurance />
      <ContactSection />

    </Layout>
  );
}