// app/hooks/useInView.js

import { useState, useEffect, useRef } from 'react';

export function useInView({ threshold = 0.1, rootMargin = '0px' } = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use stored reference
      }
    };
  }, [threshold]);

  return [ref, isInView];
}