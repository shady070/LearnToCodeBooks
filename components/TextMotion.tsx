// Create a new file components/SimpleMotion.tsx
import React from 'react';
import { motion } from 'framer-motion';

const TextMotion = () => {
  return (
    <motion.div
      animate={{ scale: 1.5 }}
      transition={{ duration: 0.5 }}
      className="p-10 bg-blue-500"
    >
      Framer Motion Test
    </motion.div>
  );
};

export default TextMotion;
