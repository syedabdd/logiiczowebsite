"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-Time",
      location: "Mumbai, India",
      desc: "We’re looking for a creative developer skilled in React.js and Tailwind CSS to build elegant user interfaces.",
    },
    {
      title: "Backend Developer",
      type: "Full-Time",
      location: "Remote",
      desc: "Seeking an experienced Node.js and MongoDB developer to design scalable backend systems.",
    },
    {
      title: "UI/UX Designer",
      type: "Internship",
      location: "Pune, India",
      desc: "Join our design team to create visually stunning, user-friendly web layouts and experiences.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-white to-gray-100">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 to-transparent blur-3xl opacity-40"
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold  relative z-10 drop-shadow-sm"
        >
          Careers at Logiczo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl relative z-10"
        >
          Be part of our team shaping the future of digital innovation.
        </motion.p>
      </div>

      {/* Job Cards Section */}
      <div className="px-6 md:px-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold ">
            Current <span className="text-[#d4af37]">Openings</span> 
          </h2>
          <p className="mt-2 text-gray-600">
            Explore exciting roles where your creativity and talent shine.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-white border border-gray-200 hover:border-[#d4af37] p-8 rounded-2xl shadow-md hover:shadow-[#d4af37]/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-semibold text-[#d4af37] group-hover:text-[#b89930] transition-all duration-300">
                {job.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {job.desc}
              </p>

              <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                <span className="bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                  {job.type}
                </span>
                <span>{job.location}</span>
              </div>

              <motion.button
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-8 flex items-center gap-2 text-[#d4af37] group-hover:text-[#b89930] font-medium transition-all duration-300"
              >
                Apply Now <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-28 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-[#222]">
            Didn’t find your perfect role?
          </h3>
          <p className="mt-3 text-gray-600">
            We’re always excited to meet passionate individuals. Let’s connect!
          </p>
          <motion.a
            href="mailto:careers@logiczo.com"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#d4af37",
              color: "#fff",
            }}
            className="inline-block mt-6 px-8 py-3 border border-[#d4af37] rounded-full text-[#d4af37] font-medium transition-all duration-500"
          >
            Send Your Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
