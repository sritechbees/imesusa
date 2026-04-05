"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TMSHero() {

  // ✅ AOS Init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // ✅ Container Animation
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // ✅ Fade Animation
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-fuchsia-800 to-blue-900 dark:from-black dark:via-gray-900 dark:to-black text-white py-20 md:py-28">

      {/* 🔥 Glow Background */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-pink-500/20 blur-[160px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full animate-pulse"></div>

      {/* 🌌 Floating Small Background Images */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          className="absolute top-10 left-10 w-16 md:w-20 opacity-30"
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Image src="/about/tms1bg.png" alt="bg" width={80} height={80} className="object-contain blur-[1px]" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20 w-14 md:w-18 opacity-25"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image src="/about/tms1bg.png" alt="bg" width={70} height={70} className="object-contain" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 w-20 md:w-24 opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <Image src="/about/tms1bg.png" alt="bg" width={90} height={90} className="object-contain blur-[1px]" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-20 w-12 md:w-16 opacity-25"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Image src="/about/tms1bg.png" alt="bg" width={60} height={60} className="object-contain" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-1/3 w-14 md:w-20 opacity-20"
          animate={{ y: [0, -18, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Image src="/about/tms1bg.png" alt="bg" width={80} height={80} className="object-contain blur-[1px]" />
        </motion.div>

      </div>

      {/* 🌐 GRID */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🧠 IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center lg:order-2"
        >
          {/* Glow */}
          <div className="absolute w-[280px] md:w-[350px] h-[280px] md:h-[350px] bg-white/10 blur-3xl rounded-full"></div>

          {/* Image Wrapper */}
          <div className="relative w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] aspect-[4/5] overflow-hidden flex items-center justify-center">

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/product/tms1.png"
                alt="TMS Device"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.25)]"
                priority
              />
            </motion.div>

          </div>
        </motion.div>

        {/* 📝 CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:order-1"
        >
          <motion.p
            variants={fadeUp}
            data-aos="fade-up"
            className="uppercase tracking-widest text-xs md:text-sm text-white/70 mb-4"
          >
            Next-Generation Wellness Technology
          </motion.p>

          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            {["Transcranial", "Magnetic", "Stimulation (TMS)"].map((word, i) => (
              <motion.span key={i} variants={fadeUp} className="block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            A non-invasive brain wellness technology designed for MedSpa-based
            care. Expand beyond aesthetics into mental clarity, emotional balance,
            and advanced cognitive wellness.
          </motion.p>

          <motion.div
            variants={fadeUp}
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-4"
          >
            <Link href="/products/tms/tmsprogram">
              <button className="relative group bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg overflow-hidden shadow-xl">
                <span className="relative z-10">Explore Program</span>
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
    </section>
  );
}