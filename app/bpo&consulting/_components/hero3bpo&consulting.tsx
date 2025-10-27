"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Hero3BpoConsulting() {
  const offers = [
    "Customer Service, HR, Finance & Accounting, and Data Entry",
    "Strategic Consulting to optimize business processes",
    "Tailored BPO solutions for your organization",
  ];

  const benefits = [
    "Reduce operating costs",
    "Improve efficiency and productivity",
    "Enhance customer service",
    "Increase revenue",
  ];

  return (
    <>
      {/* What We Offer Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-16 py-20 bg-[#f9fafb]">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:w-1/2"
        >
          <div className="relative group">
            <Image
              src="/images/m11-R-183RRJ.webp"
              alt="BPO Consulting"
              width={500}
              height={500}
              className="rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-6">
            What We Offer
          </h2>
          <ul className="space-y-5">
            {offers.map((offer, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-3 group rounded-xl p-4 transition-all duration-300 hover:bg-[#d4af37]/10"
              >
                <CheckCircle2 className="text-[#d4af37] w-6 h-6 flex-shrink-0 group-hover:text-[#d4af37]" />
                <p className="text-gray-700 text-lg group-hover:text-[#0a2540] transition-colors duration-300">
                  {offer}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f5f9ff] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#0e2446] mb-10 text-center md:text-left"
          >
            Benefits of Our BPO & Consulting Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 md:gap-x-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
