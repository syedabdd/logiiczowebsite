"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Upload } from "lucide-react";

export default function Careers() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-Time",
      location: "Pune, India",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0] || null);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      alert(`Uploaded: ${selectedFile.name}`);
      setSelectedFile(null);
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 overflow-hidden pt-24">
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-gray-900 overflow-hidden"
        style={{
          backgroundImage: "url('/images/14.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        {/* Animated Gold Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#7ed957]/30 to-transparent blur-3xl opacity-40"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Content */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white relative z-10 drop-shadow-lg"
        >
          Careers at <span className="text-[#7ed957]">Efficient Tech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-200 text-base font-serif sm:text-lg md:text-xl max-w-2xl relative z-10 leading-relaxed"
        >
          Be part of our team shaping the future of digital innovation.
        </motion.p>
      </div>

      {/* ================= JOB CARDS SECTION ================= */}
      <div className="px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Current <span className="text-[#7ed957]">Openings</span>
          </h2>
          <p className="mt-2 text-gray-600 font-serif text-base md:text-lg">
            Explore exciting roles where your creativity and talent shine.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group bg-white border border-gray-200 hover:border-[#00bf63] p-8 rounded-2xl shadow-lg hover:shadow-[#7ed957]/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#7ed957] transition-colors duration-300">
                {job.title}
              </h3>
              <p className="mt-3 font-serif text-gray-600 text-sm leading-relaxed">
                {job.desc}
              </p>

              <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                <span className="bg-[#7ed957]/10 px-3 py-1 rounded-full border border-[#7ed957]/30 font-medium">
                  {job.type}
                </span>
                <span>{job.location}</span>
              </div>

              <motion.button
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="mt-8 flex items-center gap-2 text-[#7ed957] group-hover:text-[#74cd4e] font-semibold transition-all duration-200"
              >
                Apply Now <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* ================= UPLOAD RESUME SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-28 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-[#222]">
            Didn’t find your perfect role?
          </h3>
          <p className="mt-3 font-serif text-gray-600 text-base md:text-lg">
            We’re always excited to meet passionate individuals. Let’s connect!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <label
              htmlFor="resume-upload"
              className="cursor-pointer flex items-center gap-2 border border-[#00bf63] text-[#7ed957] px-6 py-3 rounded-full font-medium hover:bg-[#7ed957] hover:text-white transition-all duration-300"
            >
              <Upload size={18} />
              {selectedFile ? selectedFile.name : "Choose Resume"}
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              className="px-8 py-3 bg-[#7ed957] text-white font-semibold rounded-full hover:bg-[#00bf63] transition-all duration-300"
            >
              Upload
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
