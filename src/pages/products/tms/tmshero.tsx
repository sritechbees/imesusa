"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TMSHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-pink-500 to-blue-700 text-white py-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
        >

          {/* Small label */}
          <p className="uppercase tracking-widest text-sm text-white/80 mb-4">
            Next-Generation Wellness Technology
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transcranial Magnetic <br />
            Stimulation (TMS)
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
            A non-invasive brain wellness technology designed for MedSpa-based
            care. TMS helps wellness centers expand beyond aesthetics into
            mental clarity, emotional balance, and focus wellness.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
<Link href="/resources/viewresourse">
            <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:scale-105 transition shadow-lg">
              Explore Program
            </button></Link>
<Link href="/resources/downloadcatalog">
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition">
              Download Brochure
            </button></Link>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:1 }}
          className="relative flex justify-center"
        >

          <Image
            src="/about/tms1bg.png"
            alt="TMS Device"
            width={420}
            height={500}
            className="object-contain drop-shadow-2xl hover:scale-105 transition"
          />

        </motion.div>

      </div>

      {/* Bottom Feature Badges */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">

        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-4 hover:scale-105 transition">
          Non-Invasive
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-4 hover:scale-105 transition">
          No Medication
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl py-4 hover:scale-105 transition col-span-2 md:col-span-1">
          No Downtime
        </div>

      </div>

    </section>
  );
}