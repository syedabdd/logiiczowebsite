"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, BadgeCheck } from "lucide-react";

export default function Hero1Technology() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-9 h-9 md:w-10 md:h-10 text-[#7ed957]" />,
      title: "Reduce operating costs",
    },
    {
      icon: <Globe className="w-9 h-9 md:w-10 md:h-10 text-[#7ed957]" />,
      title: "Improve efficiency and productivity",
    },
    {
      icon: <Users className="w-9 h-9 md:w-10 md:h-10 text-[#7ed957]" />,
      title: "Enhance customer service",
    },
    {
      icon: <BadgeCheck className="w-9 h-9 md:w-10 md:h-10 text-[#7ed957]" />,
      title: "Increase revenue",
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] mt-9 md:my-0 pt-20 md:pt-28 pb-12 md:pb-16 px-4 sm:px-8 md:px-20">
      {/* Heading */}
      <h3 className="text-[#00bf63] text-center font-semibold uppercase mb-1">Technology</h3>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12"
      >
        Technology
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-10 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden transition-all duration-500 border border-[#7ed957]/30 hover:shadow-2xl hover:border-[#7ed957]/80">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 p-4 sm:p-8 md:p-12"
        >
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-5"
            style={{ color: "#7ed957" }}
          >
            Network Infrastructure:
          </h3>
          <p className="text-gray-700 font-serif text-sm sm:text-base leading-relaxed mb-3 md:mb-4">
            Our call center infrastructure is highly scalable with open source
            architecture for some of our PBX and IP gateway requirements using
            the latest in Asterisk and Digium technology. We are also fully
            redundant with our Cisco Router, Firewalls, and the entire LAN
            connectivity.
          </p>
          <p className="text-gray-700 text-sm font-serif sm:text-base leading-relaxed">
            logicczo is utilizing software-based PaBX / Dialler system from
            Asterisk. The software is built on an open architecture, Windows
            2003 Server and Microsoft SQL Server platform, and state-of-the-art
            Dialogic SCSA telephony components. Asterisk provides robust
            predictive dialling and blended inbound/outbound, ACD, and IVR
            features that were previously affordable to only large companies.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="relative overflow-hidden">
            <Image
              src="/images/m7-DlQ0CJqN.webp"
              alt="Technology team working together"
              width={700}
              height={500}
              className="rounded-none md:rounded-l-none md:rounded-r-3xl w-full h-[230px] sm:h-[320px] md:h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00000040] to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-900 font-semibold mt-8 md:mt-10 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-10"
      >
        These new systems provide an innovative, all-in-one, contact center
        communications infrastructure that provides the best ROI, and an easy
        solution to the growing demands of the contact center services.
      </motion.p>

      {/* Last Line */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center font-bold mt-4 md:mt-6 text-base sm:text-lg md:text-xl"
        style={{ color: "#7ed957" }}
      >
        Our BPO and consulting services can help your business:
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "110px" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-1 mx-auto mt-3 md:mt-4 rounded-full"
        style={{ backgroundColor: "#00bf63" }}
      />

      {/* Benefit Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 md:mt-12"
      >
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0c1445] text-white flex flex-col items-center justify-center rounded-xl shadow-md py-8 sm:py-10 px-4 sm:px-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-3">{item.icon}</div>
            <h4 className="text-center font-semibold text-sm sm:text-base md:text-lg leading-snug">
              {item.title}
            </h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
