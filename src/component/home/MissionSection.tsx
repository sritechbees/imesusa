"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function MissionSection() {

  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 bg-slate-950 text-gray-300 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#fd5da2]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meaningful{" "}
            <span className="text-[#fd5da2]">Medical Technology</span>
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            We introduce medical technologies that truly make a difference.
            Our mission is to carefully select and introduce clinically
            validated, high-quality medical devices that improve quality
            of life.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Every device we introduce is selected based on clinical value,
            safety, regulatory awareness, and real-world usability within
            U.S. healthcare and wellness settings.
          </p>

          {/* EXPAND CONTENT */}
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-gray-400 mt-4 space-y-2"
            >
              <p>
                Our focus is on technologies that deliver measurable
                clinical benefits while supporting healthcare providers
                with safe and practical solutions.
              </p>

              <p>
                We collaborate with global innovators to ensure that
                advanced medical technology becomes accessible to modern
                clinics, wellness centers, and healthcare systems.
              </p>
            </motion.div>
          )}

          {/* BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-8 px-8 py-3 rounded-lg bg-[#fd5da2] text-white font-medium hover:bg-pink-600 transition duration-300 shadow-lg hover:shadow-[#fd5da2]/50 hover:scale-105"
          >
            {open ? "Show Less" : "Read More"}
          </button>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="/about/image3.jpg"
            alt="Medical Technology"
            width={650}
            height={450}
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />

          {/* floating glow */}
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#fd5da2]/30 blur-2xl rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}