// components/ContactSection.js
import ContactForm from './ContactForm';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-48 bg-gradient-to-br from-gray-700 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8 text-diva-pink">Let's Get Your Space Dazzling!</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-diva-blue">Contact Us</h3>
              <p className="mb-6 text-gray-600">
                Whether you would like us to clean your home or business, or you are
                interested in joining our team, please contact us today.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-diva-pink text-white p-8 rounded-lg ">
              <h3 className="text-2xl font-bold mb-6">Dazzle Divas Cleaning Service</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-4" />
                  <div>
                    <p>563 Live Oak Ave</p>
                    <p>Daytona Beach, FL 32114</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4" />
                  <p>info@dazzledivas.com</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4" />
                  <p>(386) 301-5775</p>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4" />
                  <div>
                    <p>Monday - Friday: 8 AM - 5 PM</p>
                    <p>Sat & Sun: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}