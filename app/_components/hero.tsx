"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[95vh] lg:h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        className="absolute inset-0"
      >
        <Image
          src={"/images/banner.webp"}
          alt="Outsourcing Solutions"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#17223b]/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 lg:px-16 text-white max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Empowering Businesses with{" "}
          <span className="text-[#d4af37]">Trusted Outsourcing Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-200 font-serif hover:text-white transition-colors duration-500"
        >
          From customer support to backend operations, our expert teams help you
          scale efficiently, reliably, and cost-effectively.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="contact"
            className="px-8 py-3 sm:px-10 sm:py-3 rounded-full bg-[#d4af37] text-[#17223b] font-semibold hover:bg-[#b8932d] transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/50"
          >
            Contact Us
          </Link>
          <Link
            href="contact-center"
            className="px-8 py-3 sm:px-10 sm:py-3 rounded-full border-2 border-[#d4af37] text-[#d4af37] font-semibold hover:bg-[#d4af37] hover:text-[#17223b] transition-all duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
