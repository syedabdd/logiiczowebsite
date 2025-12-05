"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHero2: React.FC = () => {
  return (
    <section className="bg-[#f0f4ff] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">
        
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/images/hero2img2.jpg"
            alt="Business handshake"
            className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[460px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17223b] mb-6">
            Efficient Tech Private Limited
          </h2>

          <p className="text-gray-700 text-sm font-serif sm:text-base leading-relaxed mb-4">
            Efficient Tech was started in November 2022 with the mission of becoming 
            an evolution in the sector. It became certain that this perception would 
            become a reality when the company mounted new heights of success, which 
            began to be reflected in ongoing years.
          </p>

          <p className="text-gray-700 text-sm font-serif sm:text-base leading-relaxed mb-4">
            We provide a broad portfolio of information technology solutions and 
            business process services to our clients across the board.
          </p>

          <p className="text-gray-700 text-sm font-serif sm:text-base leading-relaxed mb-4">
            Our Business Services combine human touch and high technology to deliver 
            extraordinary customer experiences. While technology forges agile ways 
            of working, our expert interactions are committed to creating unique 
            connections through empathy, adaptive communication skills, and above 
            all, a passion for making it happen.
          </p>

          <p className="text-gray-700 font-serif text-sm sm:text-base leading-relaxed mb-4">
            We support you in making each interaction simpler, faster, better, safer, 
            and more cost-effective, while delivering globally leading practices.{" "}
            <span className="font-semibold text-[#17223b]">
              &quot;Efficiency, accuracy, and flexibility - powering your business success&quot;
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero2;
