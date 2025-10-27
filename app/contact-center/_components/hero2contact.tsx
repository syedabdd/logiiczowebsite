"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero2Contact() {
  const services = [
    {
      title: "Chat -Support",
      desc: "Improve your online customer interactions with our professional web chat services.",
      img: "/images/n9-DOjyc0nD.webp",
    },
    {
      title: "E- Mail Support",
      desc: "Email support services provide assistance and support to customers via email communication.",
      img: "/images/n14-BRlhLB9w.webp",
    },
    {
      title: "Tele Marketing and Direct Selling",
      desc: "Promoting and selling products or services over the phone or through direct communication with potential customers.",
      img: "/images/n3-jJKdbAe6.webp",
    },
    {
      title: "Customer Care Support",
      desc: "Improve customer satisfaction with our comprehensive BPO customer care and support services.",
      img: "/images/n6-CWs7cbGn.webp",
    },
    {
      title: "Telemarketing and B2B Lead Generation",
      desc: "Maximize your business-to-business telemarketing and lead generation efforts with our BPO services.",
      img: "/images/m3-j2qMbLtF.webp",
    },
    {
      title: "Helpdesk /Technical Support Services",
      desc: "Helpdesk and technical support services involve providing assistance and support to customers with technical issues or problems.",
      img: "/images/n10-B4hKouiu.webp",
    },
  ];

  return (
    <section className="w-full px-5 py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          Contact Center Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
              }}
              className="group bg-white rounded-2xl border-2 shadow-md border-gray-100 overflow-hidden cursor-pointer transform transition-all duration-500 hover:border-[#d4af37]/70"
            >
              <div className="relative w-full h-56 md:h-60 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                  {service.desc}
                </p>

                <motion.div
                  className="w-10 h-[3px] bg-[#d4af37] mt-4 rounded-full group-hover:w-16 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
