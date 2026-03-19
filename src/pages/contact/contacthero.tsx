"use client";

import App_layout from "@/component/layout/app_layout";
import { motion } from "framer-motion";
import ContactSection from "./getintouch";

export default function ContactHero() {
  return (
    <App_layout>
    <section
      className="relative h-[90vh] mt-16 flex items-center justify-center text-center text-white overflow-hidden"
    >

      {/* 🖼️ BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/product/contact.jpeg" // 👉 replace with your image
          className="w-full h-full object-cover"
          alt="Contact Background"
        />
      </div>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 📝 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-6 max-w-3xl"
      >

        {/* SMALL TITLE */}
        <p className="uppercase tracking-widest text-sm text-[#fd5da2] mb-4 font-semibold">
          Contact Us
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Get in{" "}
          <span className="text-[#fd5da2]">Touch</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/90 text-lg leading-relaxed">
          We’re here to assist you with any questions about our medical
          technologies, services, or partnerships. Reach out to our team
          and we’ll get back to you shortly.
        </p>

      </motion.div>

    </section>
<ContactSection/>
    </App_layout>
  );
}