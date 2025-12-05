"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full pt-8 h-screen flex items-center justify-center overflow-hidden bg-[#17223b]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(#7ed957_1px,transparent_1px),linear-gradient(90deg,#7ed957_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-5 md:top-20 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-[#00bf63]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-[#7ed957]/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6">
            Empowering Businesses with{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#7ed957]">
                Trusted Outsourcing Solutions
              </span>
              <motion.span
                className="absolute inset-0 bg-[#7ed957]/20 blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 font-light px-2"
        >
          From customer support to backend operations, our expert teams help you
          scale efficiently, reliably, and cost-effectively.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
        >
          <button className="group relative px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#00bf63] text-[#17223b] font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00bf63]/50">
            <span className="relative z-10">Contact Us</span>
            <motion.div
              className="absolute inset-0 bg-[#7ed957]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Contact Us</span>
          </button>

          <button className="group px-8 sm:px-10 py-3 sm:py-4 rounded-full border-2 border-[#00bf63] text-[#7ed957] font-bold text-base md:text-lg relative overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10 group-hover:text-[#17223b] transition-colors duration-300">
              Explore Services
            </span>
            <motion.div
              className="absolute inset-0 bg-[#00bf63]"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 group-hover:text-[#17223b] transition-colors duration-300">
              Explore Services
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#7ed957] rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 md:h-3 bg-[#7ed957] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}