"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useInView } from "../hooks/useInView";

const ImageItem = ({ src, alt, onClick, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay }}
      className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-black/40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          objectFit="cover"
          className="transition-opacity duration-500"
          priority={index < 4}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ transform: "translateZ(0)" }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ZoomIn className="w-8 h-8 mb-3" />
        </motion.div>
        <motion.h3
          className="text-lg font-semibold text-center"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {alt}
        </motion.h3>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white to-transparent" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-white to-transparent" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-white to-transparent" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-white to-transparent" />
      </motion.div>
    </motion.div>
  );
};

const Modal = ({ image, onClose, onPrev, onNext, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose, onPrev, onNext, hasNext, hasPrev]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="relative aspect-video rounded-lg overflow-hidden"
          layoutId={`image-${image.src}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          {hasPrev && (
            <motion.button
              className="p-2 rounded-full bg-diva-pink/10 hover:bg-diva-pink/20 transition-colors"
              aria-label="Previous image"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              <ChevronLeft className="w-8 h-8 text-diva-pink" />
            </motion.button>
          )}
          {hasNext && (
            <motion.button
              className="p-2 rounded-full bg-diva-pink/10 hover:bg-diva-pink/20 transition-colors"
              aria-label="Next image"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <ChevronRight className="w-8 h-8 text-diva-pink" />
            </motion.button>
          )}
        </div>
        <motion.button
          className="absolute -top-12 right-0 p-2 text-diva-pink hover:text-diva-pink transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X className="w-8 h-8" />
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-12 left-0 right-0 text-center text-white"
        >
          <p className="text-lg font-semibold">{image.alt}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function ImageShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const images = [
    { src: "/images/livingroom_divas.jpg", alt: "Pristine guest living room" },
    { src: "/images/diningRoom_divas.jpg", alt: "Inviting dining area for guests" },
    { src: "/images/bath2_divas.jpg", alt: "Sparkling guest bathroom" },
    { src: "/images/swans2_divas.jpg", alt: "Elegant guest welcome area" },
    { src: "/images/crabs_divas.jpg", alt: "Spotless kitchen for vacation rentals" },
    { src: "/images/elep_divas.jpg", alt: "Unique decor detail to impress guests" },
    { src: "/images/livingroom2_divas.jpg", alt: "Spacious guest lounge" },
    { src: "/images/smCrab_divas.jpg", alt: "Immaculate guest preparation" },
    { src: "/images/blueCrab_divas.jpg", alt: "Modern guest-friendly ambiance" },
    { src: "/images/backtard_divas.jpg", alt: "Beautifully maintained outdoor space" },
    { src: "/images/stairsOcean_divas.jpg", alt: "Scenic view from guest space" },
    { src: "/images/swansAngle_divas.jpg", alt: "Stylish guest interior details" },
  ];

  const currentIndex = selectedImage
    ? images.findIndex((img) => img.src === selectedImage.src)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-diva-sky to-gray-400 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-diva-pink rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-diva-blue rounded-full filter blur-3xl" />
      </motion.div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <Sparkles className="text-diva-pink w-12 h-12" />
          </motion.div>
          <motion.h2
            className="text-5xl font-bold text-center mb-6 text-diva-blue"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Dazzling Results
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-diva-pink to-transparent max-w-md mx-auto mb-8"
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <ImageItem
              key={image.src}
              {...image}
              index={index}
              delay={index * 0.1}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedImage && (
          <Modal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < images.length - 1}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
