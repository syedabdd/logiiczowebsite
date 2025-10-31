"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, BarChart3, Database, Users } from "lucide-react";

export default function Hero2BPOConsulting() {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Expert-Led Efficiency",
      description:
        "Our seasoned professionals guide businesses toward increased operational efficiency, using proven BPO strategies.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Focus on Core Strengths",
      description:
        "Outsource non-core activities and focus on what truly matters — your company’s growth and core competencies.",
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "End-to-End Services",
      description:
        "From customer service to HR, finance, and data entry — we cover the full spectrum of BPO needs under one roof.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Tailored Consulting Solutions",
      description:
        "Our consultants work closely with your team to craft customized strategies that boost revenue and reduce costs.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-10 xl:px-16 py-10 gap-12 max-w-7xl mx-auto">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/2 space-y-6"
      >
        <p className="text-[#d4af37] font-semibold uppercase tracking-wide">
          BPO Consulting
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Smart Outsourcing. Strategic Consulting.
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Business Process Outsourcing is more than a cost-cutting strategy — it's a
          transformation lever. At Logiczo, we empower businesses with flexible,
          scalable solutions tailored to optimize operations and enhance performance.
        </p>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div className="bg-[#d4af37] p-3 rounded-full shadow-md group-hover:bg-orange-600 transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-snug">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative md:w-1/2 w-full flex justify-center"
      >
        <div className="relative p-3 bg-[#d4af37] rounded-2xl -rotate-3 md:-rotate-6 overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500">
          <div className="rotate-3 md:rotate-0">
            <Image
              src="/images/b11-5IpsECIx.webp"
              alt="BPO Consulting Team"
              width={800}
              height={500}
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
