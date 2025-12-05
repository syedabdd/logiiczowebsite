"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  if (!mounted) return null;

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "BPO Consulting", href: "/bpo&consulting" },
        { name: "Contact Center Service", href: "/contact-center" },
      ],
    },
    {
      name: "Case Study",
      dropdown: [
        { name: "Case Study 1", href: "/case-study1" },
        { name: "Case Study 2", href: "/case-study2" },
      ],
    },
    {
      name: "System",
      dropdown: [
        { name: "Technology", href: "/technology" },
        { name: "Recruitment", href: "/recruitment" },
      ],
    },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#17223b]/80 backdrop-blur-lg shadow-md"
          : "bg-[#17223b]"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={"/images/logoET5re.png"}
                height={0}
                width={290}
                alt="Efficient Tech"
                className=" pt-6"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 space-x-6 text-[15px] font-medium">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 hover:text-[#7ed957] transition cursor-pointer"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-0 mt-3 flex flex-col bg-[#17223b] border border-[#00bf63]/40 rounded-lg shadow-xl min-w-[210px] overflow-hidden z-50"
                      >
                        {item.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            href={drop.href}
                            className="px-5 py-2 hover:bg-[#00bf63] hover:text-black cursor-pointer transition-all duration-300"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href ?? "#"}
                  className="relative hover:text-[#7ed957] transition duration-300 group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#7ed957] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden text-[#7ed957]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black px-6 pb-4 border-t border-[#00bf63]/30"
          >
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div key={idx} className="py-2">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.name)}
                    className="flex justify-between w-full text-left text-white hover:text-[#7ed957] transition"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="pl-4 mt-2 space-y-2 border-l border-[#00bf63]/30"
                      >
                        {item.dropdown.map((drop, i) => (
                          <Link
                            key={i}
                            href={drop.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-white/90 hover:text-[#7ed957] transition"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={idx}
                  href={item.href ?? "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-white hover:text-[#7ed957] transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
