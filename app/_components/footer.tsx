"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
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

const WHATSAPP_NUMBER = "917030746860";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Efficient Tech Team, I want to know more about your services."
);

export default function Footer() {
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/bgre.png"
            alt="Efficient Logo"
            width={350}
            height={0}        // Auto height
            sizes="100vw"
            className=""
            priority
          />

          <p className="text-gray-300 font-serif text-sm leading-relaxed mt-2">
            Empowering businesses with scalable and cost-effective BPO,
            staffing, and tech solutions. Efficient delivers
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
          <h3 className="text-lg font-semibold text-[#00bf63] mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-[#00bf63] transition-colors duration-200"
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
                  className="text-gray-300 hover:text-[#7ed957] transition-colors duration-200"
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
          <h3 className="text-lg font-semibold text-[#00bf63] mb-4">
            Connect With Us
          </h3>

          <p className="text-gray-300 text-sm mb-3">
            Contact us on WhatsApp for quick assistance
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            className="flex items-center gap-2 bg-[#00bf63] text-[#17223b] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#029d52] transition"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          <p className="text-gray-400 text-sm mt-4">Pune, Maharashtra, India</p>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {year ? year : "----"} Efficient Tech All rights reserved.
      </div>

      {/* Contact Button */}
      <motion.div whileHover={{ scale: 1.05 }} className="fixed bottom-6 right-6">
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
