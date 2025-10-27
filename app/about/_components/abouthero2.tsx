// app/components/AboutHero2.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHero2: React.FC = () => {
  return (
    <section className="bg-[#f0f4ff] py-16 px-4 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/hero2img2.jpg" // replace with your actual image path
            alt="Business handshake"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#17223b]  mb-6">
            Logiczo Outsourcing Private Limited
          </h2>
          <p className="text-gray-700 mb-4">
            Logiczo outsourcing Pvt Ltd was started in November 2022 with the
            mission of becoming an evolution in the sector. It became certain
            that this perception would become a reality when the company mounted
            new heights of success, which began to be reflected in ongoing years.
          </p>
          <p className="text-gray-700 mb-4">
            We provide a broad portfolio of information technology solutions and
            business process to its clients across the board.
          </p>
          <p className="text-gray-700 mb-4">
            Our Business Services combines human tap and high technology to haul
            extraordinary customer experiences. While technology forges new and
            agile ways of working, our interaction with experts are committed in
            creating unique connections through empathy, adaptive communication
            skills, and more significantly, a passion for making it happen. It
            is all about tapping the sentiments and building an emotional
            connection that keeps customers and staff passionate about your
            brand.
          </p>
          <p className="text-gray-700 mb-4">
            We will support you in making each interaction simpler, faster,
            better, safer, more cost-effective, deliver proven globally leading
            practices.{" "}
            <span className="font-semibold text-[#17223b]">
              "Efficiency, accuracy, and flexibility - powering your business
              success"
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero2;
