'use client';

import { motion } from 'framer-motion';

export default function Story() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sharp-text sharp-text-h1 font-bold text-primary tracking-normal antialiased"
      >
        IN PROGRESS
      </motion.h1>
    </div>
  );
}
