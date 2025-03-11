//app/components/Testimonials.js

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Vacation Rental Owner",
    feedback:
      "Dazzle Divas transformed my property! Guests consistently comment on the immaculate, welcoming space.",
    image: "/images/client1.jpg",
    rating: 5,
  },
  {
    name: "Property Manager",
    feedback:
      "Their attention to detail and guest-focused service have made our rentals stand out. Highly recommended!",
    image: "/images/client2.jpg",
    rating: 5,
  },
  {
    name: "Airbnb Host",
    feedback:
      "Our guests love the fresh, vibrant feel of our space. Dazzle Divas truly elevates our rental experience.",
    image: "/images/client4.jpg",
    rating: 5,
  },
  {
    name: "Rental Owner",
    feedback:
      "Reliable, efficient, and always guest-ready. Their service has boosted our reviews significantly.",
    image: "/images/client3.jpg",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-diva-pink" : "text-gray-300"}`}
        fill={i < rating ? "currentColor" : "none"}
      />
    ))}
  </div>
);

export default function Testimonials() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const direction = useState(1);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    direction.current = 1;
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    direction.current = -1;
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 bg-gradient-to-br from-diva-sky to-gray-400 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-diva-blue mb-12"
        >
          What Our Clients Say...
        </motion.h2>
        <div className="relative md:hidden overflow-hidden">
          <div className="flex justify-center items-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-diva-pink text-white rounded-full p-2 hover:bg-pink-600 transition"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <div className="w-3/4 mx-auto relative h-72">
              <AnimatePresence custom={direction.current} mode="popLayout">
                <motion.div
                  key={current}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={direction.current}
                  transition={{
                    x: { type: "spring", stiffness: 200, damping: 15 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 text-center"
                >
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full mb-4 shadow-md"
                  />
                  <StarRating rating={testimonials[current].rating} />
                  <p className="text-gray-600 italic mb-4">
                    {testimonials[current].feedback}
                  </p>
                  <h3 className="text-lg font-bold text-diva-blue">
                    {testimonials[current].name}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-diva-pink text-white rounded-full p-2 hover:bg-pink-600 transition"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 shadow-md"
              />
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-600 italic mb-4">{testimonial.feedback}</p>
              <h3 className="text-lg font-bold text-diva-blue">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <motion.button
            onClick={scrollToContact}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-diva-pink text-white font-bold py-4 px-8 rounded-full hover:bg-pink-600 transition-transform"
          >
            Connect with Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}
