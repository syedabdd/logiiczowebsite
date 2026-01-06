"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Mumbai",
    image: "images/testim1.jpg",
    review:
      "Efficient Tech boosted our business with web development, marketing, and BPO services. Professional and supportive team.",
    stars: 5,
  },
  {
    name: "Ayesha Khan",
    city: "Delhi",
    image: "",
    review:
      "We outsourced our customer support to Efficient Tech. Smooth process, cost-effective, and reliable service.",
    stars: 4,
  },
//   {
//     name: "Vikram Patel",
//     city: "Ahmedabad",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     review:
//       "Their business development and outsourcing support helped our startup scale faster. Highly recommended.",
//     stars: 5,
//   },
 
  {
    name: "Amit Verma",
    city: "Bengaluru",
    image: "",
    review:
      "From website to outsourcing services, Efficient Tech provided complete business support with quick response.",
    stars: 5,
  },
   {
    name: "Syed Azaruddin",
    city: "Hyderabad",
    image: "images/testi3.jpg",
    review:
      "Reliable BPO outsourcing with strong understanding of business needs. Great experience with Efficient Tech.",
    stars: 4,
  },
];

const defaultAvatar = "https://www.gravatar.com/avatar/?d=mp&f=y";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Update visibleCards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1); // Mobile
      } else if (width < 1024) {
        setVisibleCards(2); // Tablet
      } else {
        setVisibleCards(3); // Desktop
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (index + visibleCards < testimonials.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted by Indian businesses across cities
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className={`grid gap-6 md:grid-cols-${visibleCards}`}>
            {testimonials
              .slice(index, index + visibleCards)
              .map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                >
                  {/* Stars */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < item.stars
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-700 mb-5">“{item.review}”</p>

                  {/* Client */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || defaultAvatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.city}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 ${
              index === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            disabled={index + visibleCards >= testimonials.length}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-100 ${
              index + visibleCards >= testimonials.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
