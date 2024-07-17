// components/ImageShowcase.js
import Image from 'next/image';

const ImageItem = ({ src, alt }) => (
  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="transition-opacity duration-500 hover:opacity-90"
    />
  </div>
);

export default function ImageShowcase() {
  const images = [
    { src: "/images/livingroom_divas.jpg", alt: "Clean living room" },
    { src: "/images/cleanSink_divas.jpg", alt: "Spotless kitchen" },
    { src: "/images/kitchen_divas.jpg", alt: "Tidy bedroom" },
    { src: "/images/crabs_divas.jpg", alt: "Sparkling bathroom" },
    { src: "/images/bath_divas.jpg", alt: "Clean living room" },
    { src: "/images/bed_divas.jpg", alt: "Spotless kitchen" },
    { src: "/images/elep_divas.jpg", alt: "Tidy bedroom" },
    { src: "/images/smCrab_divas.jpg", alt: "Sparkling bathroom" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-diva-blue">Our Dazzling Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <ImageItem key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}