"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyIMES() {
  return (
    <section className="relative py-28 bg-slate-950 text-gray-300 overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#fd5da2]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why <span className="text-[#fd5da2]">iMESUSA</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We are not just a distributor of machines.
            We are curators of meaningful medical technology that truly benefits lives.
          </p>
        </motion.div>

        {/* Top Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Image
            src="/about/medical innovation.jpg"
            alt="medical innovation"
            width={1200}
            height={600}
            className="rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-[#fd5da2]/20 p-8 rounded-3xl shadow-lg hover:shadow-[#fd5da2]/40 hover:-translate-y-3 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#fd5da2]">
              Clinically Meaningful
            </h3>

            <p className="text-gray-400">
              Every device we introduce is selected based on real clinical value,
              patient safety, and measurable outcomes.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-[#fd5da2]/20 p-8 rounded-3xl shadow-lg hover:shadow-[#fd5da2]/40 hover:-translate-y-3 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#fd5da2]">
              Practical & Compliant
            </h3>

            <p className="text-gray-400">
              Designed for real-world usability within U.S. clinics,
              wellness centers, and healthcare environments — with regulatory awareness.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-[#fd5da2]/20 p-8 rounded-3xl shadow-lg hover:shadow-[#fd5da2]/40 hover:-translate-y-3 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#fd5da2]">
              People First Technology
            </h3>

            <p className="text-gray-400">
              Technology should serve people — not the other way around.
              If it does not improve lives, we do not introduce it.
            </p>
          </motion.div>

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl font-medium text-gray-300">
            Bridging advanced Korean medical innovation with the evolving needs
            of U.S. healthcare providers.
          </p>
        </motion.div>

      </div>
    </section>
  );
}