"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Hero2CaseStudy1() {
  const challenges = [
    {
      title: "Operational Overload",
      desc: "Surge in users strained support and logistics.",
    },
    {
      title: "Delayed Customer Response",
      desc: "Backlogs impacted satisfaction and trust.",
    },
    {
      title: "Manual Bottlenecks",
      desc: "Data entry and inventory processes slowed scalability.",
    },
  ];

  const solutions = [
    {
      title: "Dedicated 24/7 Customer Support",
      desc: "A trained global team delivered consistent, round-the-clock support for Market Central customers.",
    },
    {
      title: "Back-Office Automation",
      desc: "Streamlined operations using AI-powered tools, improving order processing and reducing errors.",
    },
    {
      title: "Scalable Staffing",
      desc: "Dynamic workforce solutions helped Market Central adapt quickly to seasonal spikes.",
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous performance monitoring ensured high service standards across all functions.",
    },
  ];

  return (
    <>
      {/* About Section */}
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out">
              <Image
                src="/images/m5-Cdmu7PMR.webp"
                alt="Team working at Market Central"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-5 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1e2a47]">
              About <span className="text-[#7ed957]">Market Central</span>
            </h2>

            <p className="text-gray-700 font-serif leading-relaxed text-[16px] md:text-[17px]">
              Market Central is a fast-growing e-commerce platform that connects
              buyers and sellers in the global marketplace. Founded in 2015, the
              company faced challenges in scaling operations, managing customer
              support, and streamlining back-office tasks.
            </p>

            <p className="text-gray-700 font-serif leading-relaxed text-[16px] md:text-[17px]">
              In 2020, Efficient Tech came in as a strategic BPO partner to enable
              substantial growth and operational excellence.
            </p>

            <div className="pt-4">
              <button className="bg-[#7ed957] text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#68b548] hover:shadow-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="w-full bg-[#f8f9fb] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-[#1e2a47] mb-10"
          >
            Challenges <span className="text-[#7ed957]">Faced</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#00bf63] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col items-start gap-2 text-left">
                  <CheckCircle2 className="text-[#7ed957] w-6 h-6" />
                  <h3 className="text-lg font-semibold text-[#1e2a47]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-serif text-[15px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Efficient Tech Helped Section */}
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-[#1e2a47] mb-10"
          >
            How <span className="text-[#7ed957]">Efficient Tech</span> Helped
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="bg-white text-left border-l-4 border-[#00bf63] p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#1e2a47] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-serif text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
