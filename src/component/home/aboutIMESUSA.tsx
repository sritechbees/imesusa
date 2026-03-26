"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIMESUSA() {
  return (
    <section className="relative bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-16 mb-28"
        >

          {/* Text */}
          <div className="flex-1">

            {/* Trending Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight relative inline-block">

              About

              <span className="ml-3 bg-gradient-to-r from-[#003E91] to-[#4FC3F7] bg-clip-text text-transparent">
                iMESUSA
              </span>

              {/* Underline Decoration */}
              <div className="absolute -bottom-2 left-0 w-24 h-[3px] bg-[#0B5ED7] rounded-full"></div>

            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We introduce medical technologies that truly make a difference.
              Our mission is to connect proven global innovation with the
              practical needs of modern healthcare providers.
            </p>

            <p className="text-gray-600">
              Every device we introduce is selected based on clinical value,
              safety, regulatory awareness, and real-world usability within
              clinics, hospitals, and wellness environments.
            </p>

          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group"
          >

            {/* Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#003E91] to-[#4FC3F7] rounded-3xl blur opacity-30 group-hover:opacity-60 transition"></div>

            <Image
              src="/about/Medical Technology.jpg"
              alt="Medical Technology"
              width={520}
              height={420}
              className="relative rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
            />

          </motion.div>

        </motion.div>

        {/* MISSION */}
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative group"
          >

            <div className="absolute -inset-1 bg-gradient-to-r from-[#003E91] to-[#4FC3F7] rounded-3xl blur opacity-30 group-hover:opacity-60 transition"></div>

            <Image
              src="/about/mission-medical.jpg"
              alt="Mission"
              width={550}
              height={450}
              className="relative rounded-3xl shadow-xl group-hover:scale-105 transition duration-500"
            />

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#0B5ED7]">Mission</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Our mission is to introduce clinically validated,
              high-quality medical technologies that improve quality
              of life and support better healthcare outcomes.
            </p>

            {/* Cards */}
            <div className="grid gap-6">

              <div className="bg-white shadow-lg border border-blue-100 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <h4 className="text-gray-900 font-semibold mb-2">
                  Clinical Value
                </h4>
                <p className="text-gray-600 text-sm">
                  Technologies that deliver real clinical impact and
                  improve patient outcomes.
                </p>
              </div>

              <div className="bg-white shadow-lg border border-blue-100 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <h4 className="text-gray-900 font-semibold mb-2">
                  Safety First
                </h4>
                <p className="text-gray-600 text-sm">
                  Every device is selected with strict attention
                  to safety and regulatory compliance.
                </p>
              </div>

              <div className="bg-white shadow-lg border border-blue-100 p-6 rounded-xl hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <h4 className="text-gray-900 font-semibold mb-2">
                  Practical Innovation
                </h4>
                <p className="text-gray-600 text-sm">
                  We bridge advanced innovation with practical
                  healthcare applications.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}