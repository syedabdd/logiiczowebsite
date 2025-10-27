import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: 'Expertise',
    description:
      'Our company specializes in providing high-quality business process outsourcing services to clients in various industries.',
    imgSrc: '/images/growth1.webp', // replace with your images path
    alt: 'Expertise Illustration',
    link: '#',
  },
  {
    title: 'Efficiency',
    description:
      'Logiczo Outsourcing Pvt Ltd is known for its efficiency in delivering cost-effective business process outsourcing solutions.',
    imgSrc: '/images/growth2.webp',
    alt: 'Efficiency Illustration',
    link: '#',
  },
  {
    title: 'People First',
    description:
      'Our BPO company prides itself on being highly flexible and able to adapt to the unique needs and requirements of our clients.',
    imgSrc: '/images/growth3.webp',
    alt: 'People First Illustration',
    link: '#',
  },
  {
    title: 'Quality Driven',
    description:
      'We deliver exceptional value to clients by providing cost-effective solutions and a high level of service.',
    imgSrc: '/images/growth4.webp',
    alt: 'Quality Driven Illustration',
    link: '#',
  },
];

const stats = [
  { value: '25+', label: 'Happy Clients' },
  { value: '25+', label: 'Projects Delivered' },
  { value: '2', label: 'Years In Industry' },
  { value: '98%', label: 'Client Satisfaction' },
];

const GrowthMission: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          YOUR GROWTH, OUR MISSION
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          We are a results-driven BPO & IT services company, helping businesses scale with cost-effective
          outsourcing, staffing, VoIP, and custom development solutions. Partner with us for process excellence
          and operational freedom.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {features.map(({ title, description, imgSrc, alt, link }) => (
          <Link
            key={title}
            href={link}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={imgSrc}
                alt={alt}
                layout="fill"
                objectFit="contain"
                className="transform transition-transform duration-300 hover:scale-110"
                priority
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 hover:text-[#d4af37] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </Link>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-gray-900">
            <p className="text-3xl font-bold text-[#d4af37]">{value}</p>
            <p className="text-sm font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthMission;
