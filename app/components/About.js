// components/About.js
import { Star, Sparkles, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="text-diva-blue bg-gray-300 py-16">
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
  );
}