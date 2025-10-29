"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2Technology() {
  return (
    <section className="w-full bg-[#f5f7fb] py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full space-y-5"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3 relative inline-block">
          Telecommunications
          <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#d4af37] rounded-full"></span>
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Logicczo makes use of the state-of-the-art VoIP infrastructure that
          combines flexibility with cost competitiveness. We have adopted the
          full VoIP solution ahead of the most in the contact center industry
          because we believe that by staying ahead of our competitors, we will
          be able to offer optimum services at competitive rates.
        </p>

        <p className="text-gray-700 leading-relaxed">
          With multiple redundant IP backbones and shared IPLC network serviced
          by the three largest carriers in India, we are fully redundant with
          our data and voice connectivity, therefore providing seamless
          operation 24/7. Currently, the company is also partnered with two
          different VoIP providers with several gateways across the US,
          providing optimum voice quality and latency anywhere in the country.
          Our flexibility with our VoIP providers allows us to call anywhere in
          the world while maintaining good voice quality.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Likewise, the flexibility of our solution allows us to partner with
          VoIP providers that are localized in a specific country or zone,
          therefore providing an optimal latency and minimal hop situation.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src="/images/tele.jpg" // Replace with your actual image path
            alt="Telecommunication Team"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
