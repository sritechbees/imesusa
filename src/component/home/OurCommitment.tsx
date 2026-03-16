"use client";

import { motion } from "framer-motion";

export function OurCommitment() {
  return (
    <section className="py-10 bg-white text-gray-700">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Our <span className="text-[#fd5da2]">Commitment</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-500 mb-12 leading-relaxed"
        >
          At iMESUSA, we are not simply distributors of medical devices.
          We carefully curate meaningful medical solutions that bring real
          clinical value to healthcare providers and improve the lives of
          patients.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden border border-[#fd5da2]/30 rounded-xl p-8 bg-white shadow-md hover:scale-105 transition duration-300"
          >

            {/* Gradient Hover Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd5da2] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-black transition">
                If it does not help people
              </h3>

              <p className="text-gray-600 group-hover:text-black transition">
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
            className="relative group overflow-hidden border border-[#fd5da2]/30 rounded-xl p-8 bg-white shadow-md hover:scale-105 transition duration-300"
          >

            {/* Gradient Hover Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd5da2] to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-xl" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-black transition">
                If it truly benefits lives
              </h3>

              <p className="text-gray-600 group-hover:text-black transition">
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