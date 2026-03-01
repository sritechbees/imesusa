"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Next Image Full Cover */}
          <Image
            src={slides[current].image}
            alt="Hero Background"
            fill
            priority
            className="h-[450px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl"
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

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Explore Products
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Request Information
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}