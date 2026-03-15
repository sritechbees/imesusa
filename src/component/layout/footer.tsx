"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              iMESUSA
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              International Medical Equipment Solution provides advanced
              medical technologies designed to improve healthcare outcomes
              and support modern wellness centers.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about/aboutsection"
                  className="hover:text-cyan-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products/twoproductsection"
                  className="hover:text-cyan-400 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/resources/resouceshero"
                  className="hover:text-cyan-400 transition"
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  href="/contact/getintouch"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </motion.div>

          {/* Resources */}
<motion.div
  initial={{ opacity:0, y:40 }}
  whileInView={{ opacity:1, y:0 }}
  transition={{ duration:0.8 }}
>
  <h3 className="text-lg font-semibold text-white mb-5">
    Resources
  </h3>

  <ul className="space-y-3">

    <li>
      <Link
        href="/resources/downloadcatalog"
        className="hover:text-cyan-400 transition cursor-pointer"
      >
        Catalog & Brochures
      </Link>
    </li>

    <li>
      <Link
        href="/resources/viewresourse"
        className="hover:text-cyan-400 transition cursor-pointer"
      >
        Product Videos
      </Link>
    </li>

    <li>
      <Link
        href="/resources/fdafooter"
        className="hover:text-cyan-400 transition cursor-pointer"
      >
        FDA & Compliance
      </Link>
    </li>

    <li>
      <Link
        href="/resources/techoverview"
        className="hover:text-cyan-400 transition cursor-pointer"
      >
        Technology Overview
      </Link>
    </li>

  </ul>
</motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.9 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li>
                Email: info@imesusa.com
              </li>

              <li>
                Phone: +1 (000) 000-0000
              </li>

              <li>
                United States
              </li>

            </ul>

          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} iMESUSA. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span className="hover:text-cyan-400 cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-cyan-400 cursor-pointer transition">
              Terms of Service
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}