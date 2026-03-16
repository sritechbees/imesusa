"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="relative  bg-slate-950 text-gray-300 py-20 mb-10 text-white overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Partner With iMESUSA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-10 text-pink-100"
        >
          If you are interested in bringing innovative medical technologies to
          your clinic, hospital, or wellness center, our team would be happy to
          connect with you.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
<Link href="/contact/getintouch">
          <button className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:scale-105 transition shadow-lg">
            Contact Us
          </button></Link>
<Link href="/contact/inquiryform">
          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-pink-600 transition">
            Request Information
          </button></Link>

        </div>

      </div>
    </section>
  );
}