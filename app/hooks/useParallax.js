// hooks/useParallax.js


import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((el) => {
        const limit = el.offsetTop + el.offsetHeight;
        if (scrolled > el.offsetTop && scrolled <= limit) {
          el.style.transform = `translateY(${(scrolled - el.offsetTop) / 4}px)`;
        } else {
          el.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}