"use client";

import App_layout from "@/component/layout/app_layout";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {

  const [showToast, setShowToast] = useState(false);

  const initialForm = {
    name: "",
    clinic: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setShowToast(true);
    setFormData(initialForm);

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div>
      <Head>
        <title>International Medical Equipment Solution | Contact</title>
      </Head>

      {/* ⚪ WHITE BACKGROUND */}
      <section className="relative py-28 bg-white overflow-hidden font-[Poppins]">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* 🔹 LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            {/* TITLE */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#fd5da2] mb-3 font-semibold">
                Contact Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Let’s <span className="text-[#fd5da2]">Connect</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                We welcome inquiries from physicians, clinics, MedSpas,
                and healthcare organizations seeking advanced,
                meaningful medical technologies.
              </p>
            </div>

            {/* STRONG CONTENT (instead of cards) */}
            <div className="space-y-4">
              {[
                "Professional consultation tailored to your practice",
                "Fast response from our expert team",
                "Advanced medical technology guidance",
                "Support for partnerships and distribution",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#fd5da2] rounded-full"></span>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/about/contact.jpg"
                alt="Medical Consultation"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

          </motion.div>

          {/* 🔸 RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white shadow-lg rounded-3xl p-10 border border-gray-200">

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#fd5da2] outline-none"
                />

                <input
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  required
                  placeholder="Clinic / Organization"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#fd5da2] outline-none"
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#fd5da2] outline-none"
                >
                  <option value="">Select Role</option>
                  <option>Physician (MD / DO)</option>
                  <option>Nurse Practitioner / PA</option>
                  <option>Clinic Administrator</option>
                  <option>MedSpa Owner</option>
                  <option>IPA / Health Planner</option>
                  <option>Other</option>
                </select>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#fd5da2] outline-none"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#fd5da2] outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#fd5da2] outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#fd5da2] text-white rounded-xl hover:scale-105 transition"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>
          </motion.div>

        </div>

        {/* 🎉 SUCCESS POPUP */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -50, x: 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-6 right-6 bg-white border border-[#fd5da2] shadow-lg px-6 py-4 rounded-xl z-50"
            >
              <p className="text-sm font-medium text-gray-800">
                ✅ Thank you! Your message has been sent.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
  </div>

  );
}