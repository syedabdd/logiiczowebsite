"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/contact-center" },
    { name: "Contact", href: "/contact" },
  ],
  direct: [
    { name: "BPO Services", href: "/bpo&consulting" },
    { name: "Case Study", href: "/case-study1" },
    { name: "Recruitment", href: "/recruitment" },
    { name: "Careers", href: "/careers" },
  ],
};

const RECEIVER_EMAIL = "efficientstech@gmail.com";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleMailSend = () => {
    const subject = `New message from ${formData.name}`;
    const body = formData.message;

    const mailtoLink = `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-[#17223b] text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <div className="w-full max-w-[220px] sm:max-w-[260px]">
            <Image
              src="/images/bgre.png"
              alt="Efficient Logo"
              width={350}
              height={0}
              sizes="100vw"
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-gray-300 font-serif text-sm leading-relaxed mt-3 sm:mt-4">
            Empowering businesses with scalable and cost-effective BPO,
            staffing, and tech solutions. Efficient delivers performance-driven
            outsourcing.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-[#00bf63] mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-[#00bf63] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Direct Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-[#00bf63] mb-4">
            Direct Links
          </h3>
          <ul className="space-y-2">
            {footerLinks.direct.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-[#7ed957] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-[#00bf63] mb-4">
            Connect With Us
          </h3>

          {/* Email */}
          <a
            href={`mailto:${RECEIVER_EMAIL}`}
            className="block text-gray-300 hover:text-[#00bf63] text-sm transition mb-2"
          >
            ✉️ {RECEIVER_EMAIL}
          </a>

          {/* Location */}
          <p className="text-gray-400 text-sm mb-4">
            Pune, Maharashtra, India
          </p>

          {/* Contact Form */}
          {/* <div className="space-y-3 bg-[#1c2a48] p-4 rounded-lg border border-gray-700 shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-2 rounded bg-[#0f1628] border border-gray-600 text-white text-sm focus:ring-2 focus:ring-[#00bf63] outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-2 rounded bg-[#0f1628] border border-gray-600 text-white text-sm focus:ring-2 focus:ring-[#00bf63] outline-none"
            />

            <button
              onClick={handleMailSend}
              className="w-full bg-[#7ed957] text-[#17223b] font-semibold py-2 rounded-full hover:bg-[#00bf63] transition"
            >
              Send Message
            </button>
          </div> */}
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {year ? year : "----"} Efficient Tech. All rights reserved.
      </div>

      {/* Floating Contact Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <Link
          href="/contact"
          className="bg-[#7ed957] text-[#17223b] font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-[#00bf63] transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </footer>
  );
}
