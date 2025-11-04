"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ClipboardList,
  GraduationCap,
  CheckCircle2,
  Users2,
  Award,
} from "lucide-react";

export default function Hero2Recruitment() {
  const processes = [
    {
      icon: <ClipboardList className="w-10 h-10 text-[#d4af37]" />,
      title: "Pre-Hire Assessment",
      desc: "Learn more about how Logicczo ensures linguistic excellence in every customer interaction.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#d4af37]" />,
      title: "Training & Development",
      desc: "Learn more about how Logicczo ensures linguistic excellence in every customer interaction.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />,
      title: "Quality Assurance Checks",
      desc: "Learn more about how Logicczo ensures linguistic excellence in every customer interaction.",
    },
  ];

  const steps = [
    {
      icon: <ClipboardList className="w-10 h-10 text-[#d4af37]" />,
      title: "Pre-Hire Language Assessment",
      desc: [
        "Voice agents: Listening & Speaking assessments",
        "Chat agents: Reading & Writing evaluations",
        "Minimum CEFR B2 level required across all sections",
        "Human-rated speaking & writing with feedback",
      ],
      highlight:
        "B2 Level: Interact fluently and understand complex texts, including technical discussions.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#d4af37]" />,
      title: "Training & Development",
      desc: [
        "Focused language training & immersive workshops",
        "Continuous evaluation through mock calls",
        "Regular feedback to ensure growth",
      ],
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />,
      title: "Quality Assurance & Feedback",
      desc: [
        "Live call monitoring by QA teams",
        "Instant feedback loops and progress reports",
      ],
    },
    {
      icon: <Users2 className="w-10 h-10 text-[#d4af37]" />,
      title: "Customer Insights",
      desc: [
        "Customer feedback analyzed to refine training",
        "Identify performance improvement areas",
      ],
    },
    {
      icon: <Award className="w-10 h-10 text-[#d4af37]" />,
      title: "Language Proficiency Certifications",
      desc: [
        "Top-performing agents receive official certifications",
        "Recognition to support career growth and excellence",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f6faff] py-16 px-6 md:px-20">
      {/* SECTION 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/n12-DRDlYOk9.webp"
            alt="Team"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Communication and Empathy at the{" "}
            <span className="text-[#d4af37]">Core</span>
          </h2>
          <p className="text-gray-700 font-serif leading-relaxed">
            At Logicczo, we believe that outstanding customer service relies on
            effective communication and empathy. That’s why we’ve partnered with
            Rubrica Testing, a US-based third-party testing provider, to ensure
            our agents speak the language of service excellence.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-16"></div>

      {/* Process Overview */}
      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10"
      >
        Language Testing Process <span className="text-[#d4af37]">Overview</span>
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl text-center border-t-4 border-[#d4af37] hover:bg-[#fffaf0] transition-all duration-500"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 font-serif text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* SECTION 2 - TIMELINE */}
      <div className="mt-24">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16"
        >
          Language Excellence <span className="text-[#d4af37]">Journey</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-[#d4af37]/30 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Connector Dot */}
              <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 bg-[#d4af37] w-5 h-5 rounded-full shadow-lg"></div>

              {/* Icon */}
              <div
                className={`md:w-1/2 flex ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white shadow-md rounded-full p-4 border border-[#d4af37]/50"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Card */}
              <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#d4af37] hover:shadow-xl transition-all duration-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <ul className="list-disc font-serif list-inside text-gray-700 space-y-1">
                  {step.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {step.highlight && (
                  <div className="bg-yellow-100 mt-4 text-sm p-3 rounded-md font-medium">
                    <span className="font-bold">{step.highlight}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 3 - COMMITMENT */}
      <div className="mt-10 md:mt-32 bg-[#d4af37]/10 p-6 md:p-16 rounded-2xl shadow-md text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
        >
          A Commitment to{" "}
          <span className="text-[#d4af37]">World-Class Communication</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-700 font-serif max-w-3xl mx-auto mb-8"
        >
          Our language evaluation process guarantees that our agents possess the
          skills to represent your brand with clarity and professionalism. Choose
          Logicczo as your partner in exceptional customer service.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#d4af37] hover:bg-[#b89b2f] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
        >
          Partner With Us
        </motion.button>
      </div>
    </section>
  );
}
