// app/components/AboutHero1.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero1event: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/event.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transition-colors duration-500">
          Event Management{" "}
          <span className="text-[#7ed957]">Services</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 font-serif hover:text-white transition-colors duration-500">
          Seamless planning, flawless execution, and unforgettable event
          experiences tailored to your brand.
        </p>
      </motion.div>

      {/* Background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-[#7ed957]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#7ed957]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero1event;
