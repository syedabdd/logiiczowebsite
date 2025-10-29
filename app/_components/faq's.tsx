"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What are the advantages of working with Logicczo?",
      answer:
        "We have been involved in marketing campaigns for many types of businesses. Our principals have shown us every type of campaign and we are able to use their experience to maximize your chances of success. Call centers must be able to handle sporadic or seasonal call volume. Otherwise, the company would need to hire more agents. Flexibility in how calls are handled allows a company to respond quickly and efficiently to customer needs.",
    },
    {
      question: "What is call center outsourcing?",
      answer:
        "In business, outsourcing is the process of transferring certain tasks or services to another party. Call center outsourcing is the practice of hiring a third party to effectively handle your customer support, sales, lead generation or back office processing. In fact, you can outsource to an agency which is close to home or halfway around the world. Logicczo is a company that specializes in being a third party service provider.",
    },
    {
      question: "How to reduce call center costs?",
      answer:
        "Internal call center operations can be expensive. Hiring an outsourced call center can help you manage your costs by making the cost variable rather than fixed. Outsourcing to a location like India, which has low labor costs, will save your company even more money.",
    },
    {
      question: "What are some ways to improve customer support?",
      answer:
        "In order to succeed in the long run, you need to focus on improving your customer support. One way to do that is by outsourcing your calls to a professional call center. Outsourcing improves your call handling statistics such as Abandonment Rate, Average Answer Time, and Average Handle Time. In addition, most call centers have advanced technology that will help them assist customers more.",
    },
    {
      question: "What is a Call Center Agency?",
      answer:
        "A call center agency is a company that provides customer support, sales, lead generation, or back office processing applications. These companies have smallest and newest facilities or run as cloud services, which means they can handle all types of calls for these applications. However, most clients will never know that you have hired an outside partner. Call center agencies offer a great way to minimize fixed costs, increase sales production, and maximize your flexibility.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl text-center md:text-5xl font-bold mb-12 text-gray-900"
        >
          FAQ’<span className="text-[#d4af37]">s</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-2xl hover:border-[#d4af37]/60 transition-all duration-500 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 md:px-6 py-4 md:py-5 text-base md:text-lg font-semibold text-gray-900 hover:text-[#d4af37] transition-all duration-300"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 text-[#d4af37]"
                >
                  {activeIndex === index ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-5 md:px-6 pb-4 md:pb-5 text-gray-700 text-sm md:text-base leading-relaxed bg-gray-50"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
