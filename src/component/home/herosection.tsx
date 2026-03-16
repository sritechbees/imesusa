"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const slides = [
  {
    id: 1,
    title: "Advancing Meaningful Medical Innovation",
    subtitle:
      "Bridging Proven Korean Medical Technology with U.S. Healthcare Excellence.",
    image: "/about/image1.jpg",
  },
  {
    id: 2,
    title: "Brain & Mental Wellness Technology",
    subtitle:
      "Non-invasive TMS solutions designed for modern MedSpa environments.",
    image: "/about/tms.jpg",
  },
  {
    id: 3,
    title: "Advanced Electromagnetic Pain Therapy",
    subtitle:
      "Precision pain management solutions for clinics and physicians.",
    image: "/about/image3.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Head>
      <title>International Medical Equipment Solution </title>
    </Head>
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl"
            >
              {slides[current].subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap justify-center gap-5"
            >

              <Link href="/products/twoproductsection">
                <button className="bg-[#fd5da2] hover:bg-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-500/40">
                  Explore Products
                </button>
              </Link>

              <Link href="/contact/inquiryform">
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#fd5da2] transition-all duration-300 hover:scale-105">
                  Request Information
                </button>
              </Link>

            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-[#fd5da2] scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
    </>
  );
}