"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHospital, FaUserMd } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-pink-950 via-rose-900 to-pink-800 text-gray-200 pt-20 pb-10">

      {/* Animated Background Icons */}
      <motion.div
        className="absolute top-10 left-10 text-pink-300 opacity-20 text-6xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <FaHeartbeat />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-pink-300 opacity-20 text-7xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      >
        <FaHospital />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/3 text-pink-200 opacity-20 text-6xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <FaUserMd />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-pink-700 pb-16">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-wide">
              iMESUSA
            </h2>

            <p className="text-pink-300 text-sm mt-1">
              International Medical Equipment Solution
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-300">
              We introduce clinically meaningful, high-quality medical
              technologies that improve lives. Every device is selected
              based on safety, regulatory awareness, and real-world usability
              within U.S. healthcare settings.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Products
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="group cursor-pointer">
                <span className="font-semibold text-pink-300 group-hover:text-pink-400 transition">
                  TMS
                </span>

                <p className="text-gray-300 text-sm">
                  Brain & Mental Wellness for MedSpa-Based Care
                </p>
              </li>

              <li className="group cursor-pointer">
                <span className="font-semibold text-pink-300 group-hover:text-pink-400 transition">
                  SALUS TALENT PRO
                </span>

                <p className="text-gray-300 text-sm">
                  Premium Electromagnetic Pain Therapy Device
                </p>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="#"
                  className="relative inline-block hover:text-pink-300 transition"
                >
                  Catalog & Brochures
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-pink-300 transition"
                >
                  Videos (Live Demo)
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-pink-300 transition"
                >
                  FDA & Compliance
                </Link>
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact / Inquiry
            </h3>

            <p className="text-sm text-gray-300">
              Physicians • MedSpa Owners • Clinics • IPA • Health Planners
            </p>

            <button className="mt-6 w-full py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-pink-950 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-pink-500/40 transition duration-300">
              Submit Inquiry
            </button>

            <p className="text-xs text-gray-400 mt-4">
              Thank you for your submission. Our team will contact you shortly.
            </p>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt- text-center text-sm text-gray-400">
          © {new Date().getFullYear()} iMESUSA | www.imesusa.com
        </div>

      </div>
    </footer>
  );
}