'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function ParallaxLayer({
  children,
  speed = 0.3,
  className,
  style: styleProp,
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const distance = Math.max(0, Math.min(1, speed)) * 50;
  const y = useTransform(scrollYProgress, [0, 1], [`${distance}%`, `${-distance}%`]);

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? styleProp : { ...styleProp, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
