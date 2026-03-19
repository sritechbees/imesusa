"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function TMSHero() {

  // ✅ Container (stagger animation)
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ Child animation
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-fuchsia-700 to-blue-900 text-white py-24">

      {/* 🔥 Background Glow */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pink-500/30 blur-[140px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/30 blur-[140px] rounded-full animate-pulse"></div>

      {/* 🌐 GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🧠 IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:order-2"
        >
          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

          {/* Floating Animation */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/about/tms1bg.png"
              alt="TMS Device"
              width={420}
              height={500}
              className="object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.3)]"
            />
          </motion.div>
        </motion.div>

        {/* 📝 CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:order-1"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-sm text-white/70 mb-4"
          >
            Next-Generation Wellness Technology
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            {["Transcranial", "Magnetic", "Stimulation (TMS)"].map((word, i) => (
              <motion.span key={i} variants={fadeUp} className="block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl"
          >
            A non-invasive brain wellness technology designed for MedSpa-based
            care. Expand beyond aesthetics into mental clarity, emotional balance,
            and advanced cognitive wellness.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <Link href="/resources/viewresourse">
              <button className="relative group bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg overflow-hidden shadow-lg">
                <span className="relative z-10">Explore Program</span>

                {/* Hover Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </button>
            </Link>

            <Link href="/resources/downloadcatalog">
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition duration-300">
                Download Brochure
              </button>
            </Link>
          </motion.div>
        </motion.div>

      </div>

      {/* 💎 Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">

        {["Non-Invasive", "No Medication", "No Downtime"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-xl py-4 hover:scale-105 transition shadow-lg"
          >
            {item}
          </motion.div>
        ))}

      </div>

    </section>
  );
}