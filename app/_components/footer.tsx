"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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

export default function Footer() {
  // ✅ Fix for hydration mismatch caused by new Date() (runs only on client)
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#17223b] text-white">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // ✅ Prevents re-triggering
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logiczoLogoBr.webp"
            alt="Logiczo Logo"
            width={160}
            height={60}
            className="mb-4"
          />
          <p className="text-gray-300 font-serif text-sm leading-relaxed">
            Empowering businesses with scalable and cost-effective BPO,
            staffing, and tech solutions. Logiczo delivers
            performance-driven outsourcing.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-[#d4af37] mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-200"
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
          <h3 className="text-lg font-semibold text-[#d4af37] mb-4">
            Direct Links
          </h3>
          <ul className="space-y-2">
            {footerLinks.direct.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-[#d4af37] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-[#d4af37] mb-4">
            Connect With Us
          </h3>
          <p className="text-gray-300 text-sm mb-3">
            Subscribe for updates and insights
          </p>

          {/* ✅ No browser extensions attributes here */}
          <div className="flex items-center bg-[#1e2a47] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent px-4 py-2 text-sm text-white focus:outline-none"
              autoComplete="off"
            />
            <button
              type="button"
              className="bg-[#d4af37] p-2 rounded-full hover:bg-[#c29d32] transition"
            >
              <Mail className="w-5 h-5 text-[#17223b]" />
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Pune, Maharashtra, India
          </p>
        </motion.div>
      </div>

      {/* ✅ Use client-safe year rendering */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {year ? year : "----"} Logiczo Outsourcing Pvt. Ltd. All rights reserved.
      </div>

      {/* Floating Contact Button */}
      <motion.div whileHover={{ scale: 1.05 }} className="fixed bottom-6 right-6">
        <Link
          href="/contact"
          className="bg-[#d4af37] text-[#17223b] font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-[#c29d32] transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </footer>
  );
}
