"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyIMES() {
  return (
    <section className="relative py-16 md:py-10 bg-white overflow-hidden">

      
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why <span className="text-[#0B5ED7]">iMESUSA</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We are not just a distributor of machines.
            We are curators of meaningful medical technology that truly benefits lives.
          </p>

        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >

          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">

            <Image
              src="/about/medical innovation.jpg"
              alt="medical innovation"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

          </div>

        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-[#0B5ED7] transition">
              Clinically Meaningful
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Every device we introduce is selected based on real clinical value,
              patient safety, and measurable outcomes.
            </p>

          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-[#0B5ED7] transition">
              Practical & Compliant
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Designed for real-world usability within U.S. clinics,
              wellness centers, and healthcare environments — with regulatory awareness.
            </p>

          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-[#0B5ED7] transition">
              People First Technology
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Technology should serve people — not the other way around.
              If it does not improve lives, we do not introduce it.
            </p>

          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >

          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            Bridging advanced Korean medical innovation with the evolving needs
            of U.S. healthcare providers.
          </p>

        </motion.div>

      </div>
    </section>
  );
}