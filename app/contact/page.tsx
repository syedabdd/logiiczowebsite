"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message");
      }
    } catch {
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center md:py-28 mt-20 md:mt-0 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full bg-white/90 backdrop-blur-xl shadow-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* LEFT SIDE — UNCHANGED */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:w-1/2 relative text-white md:p-10 p-6 py-10 md:py-0 flex flex-col justify-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/ContactUsForm.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#17223b]/80"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Get in <span className="text-[#7ed957]">Touch</span>
            </h2>
            <p className="text-gray-300 font-serif text-lg mb-10 leading-relaxed">
              We’d love to hear from you!
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail size={24} /> efficienttech@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={24} /> +91 98765 43210
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={24} /> Pune, India
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM (DESIGN SAME) */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:w-1/2 md:p-10 p-6 flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Contact <span className="text-[#7ed957]">Efficient</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border"
              required
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border"
              required
            />

            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full px-4 py-3 rounded-xl border"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl border"
              required
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#7ed957] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={20} />
            </motion.button>

            {status && (
              <p className="text-center text-green-600 font-medium">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
