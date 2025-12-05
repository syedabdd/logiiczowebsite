'use client';

import React from 'react';
import { FaBriefcase, FaShieldAlt, FaGlobe, FaStream } from 'react-icons/fa';

const features = [
  {
    icon: <FaBriefcase size={20} />,
    title: 'Business Process Experts',
    description: 'Top-tier tendering services in electrical and IT domains with reliability and value.',
  },
  {
    icon: <FaStream size={20} />,
    title: 'BPO Consulting Excellence',
    description: 'Cost-cutting and efficient strategies to streamline business operations.',
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: 'Tailored Solutions',
    description: 'We craft custom-fit services aligned with your specific goals.',
  },
  {
    icon: <FaGlobe size={20} />,
    title: 'Industry Knowledge',
    description: 'Experience across sectors ensures effective, innovative outcomes.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/bgrgirl.webp" // Replace with actual path
            alt="Professional woman"
            className="rounded-lg w-72 sm:w-80 md:w-96 object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h3 className="text-[#00bf63] font-semibold uppercase mb-2">Why Choose Us</h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Empowering Businesses with Strategic Solutions
          </h2>
          <p className="text-gray-600 font-serif mb-8">
            Our mission is to advance your business through expert consulting, efficient processes, and tech-driven solutions that truly deliver results.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="bg-[#7ed957] text-black rounded-full p-3">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-sm text-gray-600 font-serif">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
