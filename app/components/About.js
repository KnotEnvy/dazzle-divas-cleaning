// components/About.js
import { Star, Sparkles, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-96 bg-fixed bg-cover bg-center text-white " style={{backgroundImage: "url('/images/master2_divas.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl font-bold text-center mb-8 text-diva-pink">The Dazzle Divas Difference</h2>
        <p className="text-xl text-center max-w-2xl mx-auto mb-8">
          With over 20 years of cleaning expertise, Dazzle Divas isn't just a cleaning service – we're your partners in creating healthier, brighter spaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 ">
          <div className="text-center bg-white bg-opacity-90 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Star className="mx-auto text-diva-pink text-4xl mb-4" />
            <h3 className="font-bold mb-2 text-diva-blue">Expert Team</h3>
            <p className="text-gray-700">Our professional cleaners are trained to deliver exceptional results.</p>
          </div>
          <div className="text-center bg-white bg-opacity-90 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Sparkles className="mx-auto text-diva-pink text-4xl mb-4" />
            <h3 className="font-bold mb-2 text-diva-blue">Attention to Detail</h3>
            <p className="text-gray-700">We ensure every corner of your space shines with our meticulous approach.</p>
          </div>
          <div className="text-center bg-white bg-opacity-90 p-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Heart className="mx-auto text-diva-pink text-4xl mb-4" />
            <h3 className="font-bold mb-2 text-diva-blue">Customer Satisfaction</h3>
            <p className="text-gray-700">Your happiness is our priority. We're not satisfied until you are.</p>
          </div>
        </div>
      </div>
    </section>
  );
}