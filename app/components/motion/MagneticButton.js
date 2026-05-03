'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function MagneticButton({
  children,
  strength = 0.25,
  href,
  className,
  onClick,
  type,
  ariaLabel,
  ...rest
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 18, mass: 0.6 };
  const x = useSpring(mvX, springConfig);
  const y = useSpring(mvY, springConfig);

  const handleMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mvX.set((e.clientX - cx) * strength);
    mvY.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  const shared = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: { x, y },
    className,
    onClick,
    'aria-label': ariaLabel,
    ...rest,
  };

  if (href) {
    return (
      <motion.a href={href} {...shared}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type || 'button'} {...shared}>
      {children}
    </motion.button>
  );
}
