'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ServicesHome: React.FC = () => {
  const router = useRouter()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

 

  return (
    <div className="flex flex-col gap-5 items-center py-8 px-4 ">
      <h3 className="text-[#00bf63] font-semibold uppercase ">OUR Expertise</h3>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900  leading-tight">
        Discover Our Expertise
      </h2>
      <p className="text-gray-700 font-serif max-w-3xl mx-auto mb-4 leading-relaxed text-sm md:text-base">
        We specialize in delivering top-notch BPO consulting and contact center services designed to
        optimize your business processes and enhance customer experience. Explore the services we offer below.
      </p>

    <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full justify-center">
  {/* BPO Consulting Card */}
 <Link
      href="/bpo&consulting"
      className={`cursor-pointer bg-[#17223b] text-white rounded-xl shadow-lg p-10
        w-full md:w-1/2
        transform transition-all duration-300 ease-in-out
        ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }
        hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] hover:-translate-y-2
        focus:outline-none focus:ring-4 focus:ring-[#7ed957]/60
        flex flex-col justify-between
      `}
    >
      <h3 className="text-3xl font-bold mb-5 select-none">BPO Consulting</h3>
      <p className="text-md leading-relaxed font-serif mb-6 select-none">
        Our BPO Consulting service focuses on analyzing and transforming your business processes
        to maximize operational efficiency and reduce costs.
      </p>
      <ul className="list-disc ml-4 space-y-2 font-serif text-sm text-[#7ed957] select-none">
        <li>Process assessment and optimization strategies</li>
        <li>Cost reduction through intelligent outsourcing</li>
        <li>Implementation of technology-driven solutions</li>
        <li>Continuous performance monitoring and improvements</li>
      </ul>
    </Link>

  {/* Contact Center Services Card */}
 <Link
      href="/contact-center"
      className={`cursor-pointer bg-[#17223b] text-white rounded-xl shadow-lg p-10
        w-full md:w-1/2
        transform transition-all duration-300 ease-in-out
        ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }
        hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] hover:-translate-y-2
        focus:outline-none focus:ring-4 focus:ring-[#7ed957]/60
        flex flex-col justify-between
      `}
    >
      <h3 className="text-3xl font-bold mb-5 select-none">
        Contact Center Services
      </h3>
      <p className="text-md leading-relaxed mb-6 font-serif select-none">
        Deliver exceptional customer engagement through our multi-channel contact
        center solutions, tailored to boost satisfaction and loyalty.
      </p>
      <ul className="list-disc ml-4 space-y-2 font-serif text-sm text-[#7ed957] select-none">
        <li>Inbound and outbound call management</li>
        <li>Omnichannel support: phone, chat, email, social media</li>
        <li>Quality assurance and agent training programs</li>
        <li>Advanced CRM integration and reporting</li>
      </ul>
    </Link>
</div>

    </div>
  )
}

export default ServicesHome
