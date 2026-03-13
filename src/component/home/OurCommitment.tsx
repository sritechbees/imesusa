"use client";

import { motion } from "framer-motion";

export function OurCommitment() {
  return (
    <section className="relative bg-slate-950 py-24 text-gray-300 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Our <span className="text-[#fd5da2]">Commitment</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-400 mb-12 leading-relaxed"
        >
          At iMESUSA, we are not simply distributors of medical devices.
          We carefully curate meaningful medical solutions that bring real
          clinical value to healthcare providers and improve the lives of
          patients.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden border border-[#fd5da2]/20 rounded-xl p-8 bg-white/5 hover:scale-105 transition duration-300"
          >

            {/* Gradient Hover Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd5da2] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-black transition">
                If it does not help people
              </h3>

              <p className="text-gray-400 group-hover:text-black transition">
                We do not introduce technologies that fail to provide meaningful
                value to healthcare professionals and patients.
              </p>
            </div>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group overflow-hidden border border-[#fd5da2]/20 rounded-xl p-8 bg-white/5 hover:scale-105 transition duration-300"
          >

            {/* Gradient Hover Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd5da2] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-black transition">
                If it truly benefits lives
              </h3>

              <p className="text-gray-400 group-hover:text-black transition">
                We proudly stand behind technologies that deliver proven clinical
                value and improve healthcare outcomes.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}