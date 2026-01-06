// app/components/AboutHero1.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero1contact: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/8.jpg')" }} 
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6  transition-colors duration-500">
          Contact Center <span className="text-[#7ed957]">Services</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-serif hover:text-white transition-colors duration-500">
          Smart, scalable outsourcing built around your business.
        </p>
      </motion.div>

      {/* Optional background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-[#7ed957]/20 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#7ed957]/10 rounded-full blur-3xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
    </section>
  );
};

export default Hero1contact;
