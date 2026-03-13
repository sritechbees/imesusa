"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIMESUSA() {
  return (
    <section className="relative bg-slate-950 text-gray-300 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#fd5da2]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-28"
        >

          {/* Text */}
          <div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">

              About{" "}
              <span className="bg-gradient-to-r from-[#fd5da2] to-pink-400 bg-clip-text text-transparent">
                iMESUSA
              </span>

            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              We introduce medical technologies that truly make a difference.
              Our mission is to connect proven global innovation with the
              practical needs of modern healthcare providers.
            </p>

            <p className="text-gray-400">
              We carefully evaluate every device to ensure it delivers
              meaningful clinical value, safety, and real-world usability
              across clinics, hospitals, and wellness environments.
            </p>

          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/about/Medical Technology.jpg"
              alt="Medical Technology"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />

            {/* floating glow */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#fd5da2]/30 blur-2xl rounded-full"></div>

          </motion.div>

        </motion.div>

        {/* MISSION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/about/mission-medical.jpg"
              alt="Mission"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-[#fd5da2]">Mission</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-10">
              Our mission is to carefully introduce clinically validated,
              high-quality medical devices that improve quality of life
              and support better healthcare outcomes.
            </p>

            {/* Cards */}
            <div className="grid gap-6">

              <div className="bg-white/5 backdrop-blur-md border border-[#fd5da2]/20 p-6 rounded-xl hover:scale-105 hover:border-[#fd5da2] transition duration-300">
                <h4 className="text-white font-semibold mb-2">
                  Clinical Value
                </h4>
                <p className="text-gray-400 text-sm">
                  We prioritize technologies that deliver real clinical
                  impact and improve patient outcomes.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-[#fd5da2]/20 p-6 rounded-xl hover:scale-105 hover:border-[#fd5da2] transition duration-300">
                <h4 className="text-white font-semibold mb-2">
                  Safety First
                </h4>
                <p className="text-gray-400 text-sm">
                  Every technology is selected with strict attention to
                  safety, compliance, and regulatory standards.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-[#fd5da2]/20 p-6 rounded-xl hover:scale-105 hover:border-[#fd5da2] transition duration-300">
                <h4 className="text-white font-semibold mb-2">
                  Practical Innovation
                </h4>
                <p className="text-gray-400 text-sm">
                  We bridge advanced medical innovation with practical
                  solutions used in real healthcare environments.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}