"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-blue-800 pb-16">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-wide">
              iMESUSA
            </h2>
            <p className="text-blue-400 text-sm mt-1">
              International Medical Equipment Solution
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              We introduce clinically meaningful, high-quality medical
              technologies that improve lives. Every device is selected
              based on safety, regulatory awareness, and real-world usability
              within U.S. healthcare settings.
            </p>

            <p className="mt-4 text-cyan-400 font-medium text-sm">
              Bridging Korean Medical Innovation → U.S. Healthcare
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Products
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="hover:text-cyan-400 transition cursor-pointer">
                <span className="font-semibold text-blue-300">
                  TMS
                </span>
                <p className="text-gray-400">
                  Brain & Mental Wellness for MedSpa-Based Care
                </p>
              </li>

              <li className="hover:text-cyan-400 transition cursor-pointer">
                <span className="font-semibold text-blue-300">
                  SALUS TALENT PRO
                </span>
                <p className="text-gray-400">
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
                <Link href="#" className="hover:text-cyan-400 transition">
                  Catalog & Brochures
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  Videos (Live Demo)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition">
                  FDA & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact / Inquiry
            </h3>

            <p className="text-sm text-gray-400">
              Physicians • MedSpa Owners • Clinics • IPA • Health Planners
            </p>

            <button className="mt-6 w-full py-3 bg-cyan-400 text-blue-950 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30">
              Submit Inquiry
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Thank you for your submission. Our team will contact you shortly.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-white text-xl font-semibold mb-4">
            Our Commitment
          </h3>

          <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
            If it does not help people — we do not introduce it.
            If it truly benefits lives — we stand behind it.
            We are not just distributors of machines.
            We are curators of meaningful medical solutions.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-blue-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} iMESUSA | www.imesusa.com
        </div>

      </div>
    </footer>
  );
}