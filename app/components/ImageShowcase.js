// app/components/ImageShowcase.js

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ImageItem = ({ src, alt, onClick }) => (
  <motion.div 
    className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="transition-opacity duration-500 hover:opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end justify-center">
      <p className="text-white text-lg font-semibold pb-4">{alt}</p>
    </div>
  </motion.div>
);

const Modal = ({ src, alt, onClose }) => (
  <motion.div 
    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="relative max-w-4xl max-h-[90vh] w-full">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={16}
        height={9}
        objectFit="contain"
      />
      <button 
        className="absolute top-4 right-4 text-white hover:text-diva-pink transition-colors duration-300"
        onClick={onClose}
      >
        <X size={32} />
      </button>
    </div>
  </motion.div>
);

export default function ImageShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/images/livingroom_divas.jpg", alt: "Clean living room" },
    { src: "/images/diningRoom_divas.jpg", alt: "Tidy dining room" },
    { src: "/images/bath2_divas.jpg", alt: "Sparkling bathroom" },
    { src: "/images/swans2_divas.jpg", alt: "Origami swan special" },
    { src: "/images/crabs_divas.jpg", alt: "Spotless kitchen" },
    { src: "/images/elep_divas.jpg", alt: "Origami elephant special" },
    { src: "/images/livingroom2_divas.jpg", alt: "Beautiful living room" },
    { src: "/images/smCrab_divas.jpg", alt: "Origami crab special" },
    { src: "/images/blueCrab_divas.jpg", alt: "Origami blue crab special" },
    { src: "/images/backtard_divas.jpg", alt: "Backyard touchup" },
    { src: "/images/stairsOcean_divas.jpg", alt: "Great ocean view" },
    { src: "/images/swansAngle_divas.jpg", alt: "Origami swans special" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-diva-sky to-gray-400">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-12 text-diva-blue"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Dazzling Results
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ImageItem 
                src={image.src} 
                alt={image.alt} 
                onClick={() => setSelectedImage(image)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <Modal 
          src={selectedImage.src} 
          alt={selectedImage.alt} 
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}