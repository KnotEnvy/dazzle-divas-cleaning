'use client';

import { MotionConfig as FMConfig } from 'framer-motion';

export const springs = {
  gentle: { type: 'spring', stiffness: 120, damping: 20, mass: 1 },
  snappy: { type: 'spring', stiffness: 300, damping: 28, mass: 0.8 },
  soft: { type: 'spring', stiffness: 80, damping: 18, mass: 1.1 },
};

export default function MotionConfig({ children }) {
  return (
    <FMConfig reducedMotion="user" transition={springs.gentle}>
      {children}
    </FMConfig>
  );
}
