"use client";

import React from "react";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp } from "lucide-react";

export default function Hero2() {
  const fadeIn = { opacity: 0, y: 20 };
  const fadeInView = { opacity: 1, y: 0 };

  return (
    <section className="w-full bg-[#f2f4f7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={fadeIn}
            whileInView={fadeInView}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#d4af37] font-semibold uppercase tracking-wide text-xs sm:text-sm mb-2">
              More About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              We Provide Best Business Solution in Town
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              We provide a broad portfolio of information technology solutions and
              business process to the clients across the board.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              Our Business Services combines human tap and high technology to haul
              extraordinary customer experiences. While technology forges new and
              agile ways of working, our interaction with experts are committed in
              creating unique connections through empathy, adaptive communication
              skills, and more significantly, a passion for making it happen.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: TrendingUp, title: "Business Growth", desc: "Innovative strategies to boost your market presence and revenue." },
                { icon: Lightbulb, title: "Creative Ideas", desc: "Tailored business ideas that make your brand stand out." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 sm:p-5 rounded-xl shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="text-[#d4af37] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <h4 className="font-semibold text-[#17223b] text-base sm:text-lg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#17223b] text-white font-medium px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base shadow-md hover:bg-[#d4af37] hover:text-[#17223b] transition-all"
            >
              Discover More
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={fadeIn}
            whileInView={fadeInView}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative px-4 sm:px-8 lg:px-0">
              {/* Main Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Business Professionals"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Overlay Small Image */}
              <div className="absolute top-4 sm:top-6 left-8 sm:left-10 lg:left-4 border-2 sm:border-4 border-[#d4af37] rounded-lg sm:rounded-xl overflow-hidden shadow-lg w-24 sm:w-32 lg:w-44">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                  alt="Team Discussion"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Blue Box */}
              <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 lg:-right-10 bg-[#17223b] text-white p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl w-40 sm:w-48 lg:w-60 shadow-xl">
                <p className="text-xs sm:text-sm lg:text-base font-medium leading-snug">
                  Driven by Innovation and Passion for Excellence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}