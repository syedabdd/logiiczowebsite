"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  Cog,
  Database,
  Briefcase,
  DollarSign,
  ClipboardList,
  TrendingUp,
  Target,
  Lightbulb,
  Scale,
  Leaf,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const servicesTop = [
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    desc: "Analyzing employees metrics. Monitoring random agent recordings, doing live call barging, assessing e-mails or webchat.",
  },
  {
    icon: Users,
    title: "Team Motivation",
    desc: "Motivating respective teams through bonding activities and incentive programs.",
  },
  {
    icon: Cog,
    title: "System Development",
    desc: "Implementing improvement measures and monitoring CRM insights to align with quality targets.",
  },
  {
    icon: Database,
    title: "CRM & Metrics",
    desc: "Using CRM systems to monitor operations and performance metrics tied to service quality and goals.",
  },
];

const servicesBottom = [
  {
    icon: Briefcase,
    title: "Business Solution Model",
    desc: "We build structured solutions tailored to your business goals and market dynamics.",
  },
  {
    icon: DollarSign,
    title: "Finbiz Company Solution",
    desc: "Customized strategies for financial growth and optimized company performance.",
  },
  {
    icon: ClipboardList,
    title: "Management Process",
    desc: "Efficient and scalable management workflows to streamline operations.",
  },
  {
    icon: TrendingUp,
    title: "Managing Investment",
    desc: "Strategic insights and tools for maximizing investment returns.",
  },
];

const missionPoints = [
  {
    icon: Target,
    title: "Client-Centered Service",
    desc: "Understanding and exceeding client expectations through customized solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Excellence",
    desc: "Adopting cutting-edge technologies to foster continuous improvement.",
  },
  {
    icon: Scale,
    title: "Integrity & Accountability",
    desc: "Delivering transparency and responsibility in every interaction.",
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    desc: "Creating long-term value for clients and communities.",
  },
];

export default function AboutHero3() {
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleClick = (service: string) => {
    router.push("/bpo&consulting");
  };

  return (
    <section className="w-full bg-[#f8fbff]">
      <div className=" max-w-7xl mx-auto px-3 py-20">
        {/* ---------- SECTION 1: Powering Your Business Success ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-10 text-center"
        >
          Powering your business success
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {servicesTop.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col  items-center text-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <service.icon className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="font-semibold text-[#17223b] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 font-serif">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ---------- SECTION 2: Our Vision ---------- */}
        <div className="text-left mb-16">
          <p className="text-[#d4af37] font-semibold uppercase text-sm mb-2">
            Our Vision
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-[#17223b] mb-4">
            Making Easy <span className="text-[#d4af37]">Business Growth</span>
          </h3>
          <p className="text-gray-600 font-serif mb-10">
            From digital transformation to process excellence, Logiczzo offers:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {servicesBottom.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-[#d4af37]"
            >
              <service.icon className="w-8 h-8 text-[#d4af37] mb-4" />
              <h4 className="font-semibold text-[#17223b] mb-2">
                {service.title}
              </h4>
              <p className="text-sm font-serif text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ---------- SECTION 3: Our Mission ---------- */}
        <div className="relative bg-[#eaf3ff] rounded-3xl overflow-hidden py-16 px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <p className="text-[#17223b] font-semibold text-sm mb-2 uppercase">
              Our Mission
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#17223b] mb-6">
              We aim to deliver real value with our high-performance services,
              innovative ideas, and a passion for client success.
            </h3>

            <div className="space-y-5 mb-8">
              {missionPoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <item.icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#17223b]">
                      {item.title}
                    </h4>
                    <p className="text-sm font-serif text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-sm font-serif text-gray-700">
              We believe in{" "}
              <span className="text-[#d4af37] font-semibold">
                partnership, progress, and performance
              </span>{" "}
              to transform your vision into success.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative z-10"
          >
            <div className="bg-[#17223b] rotate-2 rounded-3xl p-2">
              <Image
                src="/images/mission.jpg"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          <div className="absolute top-0 right-0 w-full h-full bg-[#1e3a8a] opacity-5 rotate-2"></div>
        </div>
      </div>

      {/* ---------- SECTION 4: Services We Offer ---------- */}
      <div className="flex bg-white flex-col gap-5 items-center py-8 px-4">
         <p className="text-[#d4af37] font-semibold uppercase text-sm ">
            Services 
          </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Services We Offer
        </h2>

        <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full justify-center flex-wrap">
          {/* Card 1 */}
          <div
            onClick={() => handleClick("contact")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick("contact")}
            className={`cursor-pointer bg-[url('/images/servicesimgabout.webp')] bg-cover bg-center bg-no-repeat text-white rounded-xl shadow-lg p-10
    w-full md:w-[30%]
    transform transition-all duration-300 ease-in-out
    ${
      animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
    } hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] hover:-translate-y-2
    focus:outline-none focus:ring-4 focus:ring-[#d4af37]/60 flex flex-col justify-between relative overflow-hidden`}
          >
            {/* Gradient + dark overlay for text clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-0"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-5 select-none text-[#d4af37] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                BPO Consulting
              </h3>
              <p className="text-md font-serif leading-relaxed pt-6 select-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                Our company specializes in providing high-quality business
                process outsourcing services to clients in various industries.
              </p>
            </div>
          </div>

          {/* Card 2 */}
        <Link
      href="/contact-center"
      className={`block cursor-pointer bg-[url('/images/m6-Cd-SZjov.webp')] bg-cover bg-center bg-no-repeat text-white rounded-xl shadow-lg p-10
        w-full md:w-[30%]
        transform transition-all duration-300 ease-in-out
        ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] hover:-translate-y-2
        focus:outline-none focus:ring-4 focus:ring-[#d4af37]/60 flex flex-col justify-between relative overflow-hidden`}
    >
      {/* Dark + Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-0"></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-5 select-none text-[#d4af37] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
          Contact Center Services
        </h3>
        <p className="text-md font-serif leading-relaxed select-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
          Logiczo Outsourcing Pvt Ltd is known for its efficiency in delivering
          cost-effective business process outsourcing solutions.
        </p>
      </div>
    </Link>
  

          {/* Card 3 */}
          <div
            onClick={() => handleClick("contact")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick("contact")}
            className={`cursor-pointer bg-[url('/images/b8-BFDpi2L3.webp')] bg-cover bg-center bg-no-repeat text-white rounded-xl shadow-lg p-10
    w-full md:w-[30%]
    transform transition-all duration-300 ease-in-out
    ${
      animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
    } hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] hover:-translate-y-2
    focus:outline-none focus:ring-4 focus:ring-[#d4af37]/60 flex flex-col justify-between relative overflow-hidden`}
          >
            {/* Gradient + dark overlay for clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-0"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-5 select-none text-[#d4af37] drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                Lead Generation
              </h3>
              <p className="text-md font-serif leading-relaxed pt-2 select-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                Our BPO company prides itself on being highly flexible and able
                to adapt to the unique needs and requirements of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
