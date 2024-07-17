import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Full-page background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/swans2_divas.jpg"
          alt="Dazzle Divas Best Work - Swan Origami"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in-down">
          Transform Your Space with Dazzle Divas Cleaning
        </h1>
        <p className="text-xl mb-8 text-white animate-fade-in-up delay-100">
          Let our cleaning magic make your home or office sparkle!
        </p>
        <button className="bg-diva-pink text-white font-bold py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center mx-auto animate-bounce ">
          <Sparkles className="mr-2" /> Get Your Free Estimate
        </button>
      </div>
    </section>
  );
}