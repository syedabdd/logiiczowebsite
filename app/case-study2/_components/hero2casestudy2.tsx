"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Hero2CaseStudy2() {
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
      {/* ABOUT SECTION */}
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-5 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1e2a47]">
              About <span className="text-[#d4af37]">Market Central</span>
            </h2>
            <p className="text-gray-700 font-serif leading-relaxed text-[16px] md:text-[17px]">
              A telecommunications company based in the United States faced
              numerous challenges in expanding its operations and improving
              customer service. To overcome these obstacles, they partnered with
              <strong> Logicczo</strong>, a renowned business process outsourcing
              (BPO) provider. This case study explores how Logicczo’s services
              played a pivotal role in their growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BACKGROUND SECTION */}
      <section className="w-full bg-[#f9fafc] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out">
              <Image
                src="/images/m2-B3UuBSWz.webp"
                alt="Business professionals shaking hands"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-5 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1e2a47]">
              Background
            </h2>
            <p className="text-gray-700 font-serif leading-relaxed text-[16px] md:text-[17px]">
              A telecommunications company with years of experience delivering
              internet, phone, and media services faced growing operational
              challenges:
            </p>

            <ul className="text-gray-700 font-serif space-y-3 text-left">
              <li>
                <strong>📞 Customer Service Issues:</strong> Struggled to meet
                growing support demands, leading to increased complaints and
                customer churn.
              </li>
              <li>
                <strong>💼 Limited Resources:</strong> Internal teams were
                overstretched, slowing innovation and expansion.
              </li>
              <li>
                <strong>⚙️ Operational Inefficiencies:</strong> Outdated systems
                hindered agility and performance.
              </li>
            </ul>

            {/* Solution Box */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white border-l-4 border-[#d4af37] rounded-xl shadow-md p-6 mt-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-[#1e2a47] mb-2 flex items-center gap-2">
                <span>💡</span> The Solution: Logicczo’s BPO Services
              </h3>
              <p className="text-gray-700 font-serif leading-relaxed text-[15px]">
                To overcome these hurdles, the company partnered with Logicczo.
                Our tailored BPO solutions improved service quality, operational
                efficiency, and scalability—unlocking new avenues for
                sustainable growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="w-full bg-[#f8f9fb] py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-[#1e2a47] mb-10"
          >
            Challenges <span className="text-[#d4af37]">Faced</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#d4af37] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col items-start gap-2 text-left">
                  <CheckCircle2 className="text-[#d4af37] w-6 h-6" />
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

      {/* HOW LOGICCZO HELPED SECTION */}
      <section className="w-full bg-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-[#1e2a47] mb-10"
          >
            How <span className="text-[#d4af37]">Logicczo</span> Helped
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white text-left border-l-4 border-[#d4af37] p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
