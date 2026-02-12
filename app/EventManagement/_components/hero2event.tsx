"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const cards = [
  {
    title: "Event Planning & Strategy",
    desc: "Customized event planning aligned with your business goals, audience, and budget.",
    image: "/images/event-planning.jpg",
  },
  {
    title: "Creative Design & Branding",
    desc: "Innovative themes, stage design, and branding that bring your event vision to life.",
    image: "/images/ev.jpg",
  },
  {
    title: "On-Ground Execution",
    desc: "Seamless coordination, technical management, and real-time support for flawless delivery.",
    image: "/images/event-execution.avif",
  },
];

const features = [
  "Corporate & Brand Events",
  "Virtual & Hybrid Events",
  "End-to-End Management",
  "Experienced Event Team",
  "Modern Event Technology",
  "On-Time Delivery",
];

export default function Hero2Event() {
  return (
    <section className="relative w-full bg-gray-50 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete <span className="text-[#7ed957]">Event Solutions</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            From concept to execution, we manage every detail to deliver
            impactful, engaging, and memorable events.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden group min-h-[300px] shadow-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 group-hover:from-black/90 transition-all duration-300" />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Why Choose Our <span className="text-[#7ed957]">Event Services</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="mb-6 text-lg text-gray-700">
            Planning a corporate event, product launch, or brand activation?
          </p>
          <Link href={'/contact'} className="px-10 py-3 rounded-full bg-[#7ed957] text-black font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
            Let’s Plan Your Event
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
