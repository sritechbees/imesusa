"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function KoreanInnovationBridge() {
  return (
    <section className="relative py-20 text-gray-300 overflow-hidden">

      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about/medical innovation.jpg"
          alt="Medical Technology Korea"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0B5ED7]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4FC3F7]/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Korean Innovation <span className="text-[#0B5ED7]">Bridge</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400">
            Connecting Korea’s advanced medical technology ecosystem with
            the real-world needs of healthcare providers in the United States.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/about/medical innovation.jpg"
              alt="Korean Medical Technology"
              width={650}
              height={420}
              className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />

            {/* small glow */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0B5ED7]/40 blur-2xl rounded-full"></div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Bridging Innovation with Healthcare
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Korea is one of the most advanced medical technology ecosystems
              in the world. Our goal is to bring proven Korean innovation to
              clinics, hospitals, MedSpas, and healthcare providers in the
              United States.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We carefully curate technologies that deliver real clinical value,
              ensuring they are practical, safe, and beneficial for both
              healthcare professionals and patients.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-white/5 backdrop-blur-xl border border-[#0B5ED7]/20 rounded-xl p-4 hover:scale-105 hover:border-[#0B5ED7] transition">
                <h4 className="text-white font-semibold text-sm mb-1">
                  Advanced Innovation
                </h4>
                <p className="text-xs text-gray-400">
                  Access cutting-edge Korean medical technologies.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-[#0B5ED7]/20 rounded-xl p-4 hover:scale-105 hover:border-[#0B5ED7] transition">
                <h4 className="text-white font-semibold text-sm mb-1">
                  Clinical Value
                </h4>
                <p className="text-xs text-gray-400">
                  Solutions designed to improve real healthcare outcomes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-[#0B5ED7]/20 rounded-xl p-4 hover:scale-105 hover:border-[#0B5ED7] transition">
                <h4 className="text-white font-semibold text-sm mb-1">
                  Practical Use
                </h4>
                <p className="text-xs text-gray-400">
                  Technologies suitable for clinics and wellness centers.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-[#0B5ED7]/20 rounded-xl p-4 hover:scale-105 hover:border-[#0B5ED7] transition">
                <h4 className="text-white font-semibold text-sm mb-1">
                  Trusted Solutions
                </h4>
                <p className="text-xs text-gray-400">
                  Carefully selected devices with proven value.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}