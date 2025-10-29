"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-28 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left side - Company Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-1/2 bg-[#17223b] text-white p-10 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in <span className="text-[#d4af37]">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            We’d love to hear from you! Whether you have a project idea, a
            question, or just want to say hi — reach out to <span className="font-semibold text-white">Logiczo</span>.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3 group cursor-pointer transition-all">
              <Mail size={24} className="group-hover:text-[#d4af37]" />
              <span className="group-hover:text-[#d4af37] transition-colors">
                contact@logiczo.com
              </span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer transition-all">
              <Phone size={24} className="group-hover:text-[#d4af37]" />
              <span className="group-hover:text-[#d4af37] transition-colors">
                +91 98765 43210
              </span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer transition-all">
              <MapPin size={24} className="group-hover:text-[#d4af37]" />
              <span className="group-hover:text-[#d4af37] transition-colors">
                Mumbai, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:w-1/2 p-10 flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Contact <span className="text-[#d4af37]">Logiczo</span>
          </h3>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 outline-none transition-all"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-[#d4af37] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#c5a026] hover:text-white transition-all duration-300 shadow-md"
            >
              Send Message
              <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
