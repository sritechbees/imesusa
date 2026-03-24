"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const conditions = [
  {
    title: "Tennis Elbow",
    desc: "Targeted therapy reduces inflammation and improves recovery speed.",
    img: "/product/Tennis Elbow1.jpg",
  },
  {
    title: "Golfer’s Elbow",
    desc: "Relieves repetitive strain and enhances muscle healing.",
    img: "/product/Golfer’s Elbow.jpg",
  },
  {
    title: "Shoulder Pain",
    desc: "Improves joint flexibility and reduces stiffness effectively.",
    img: "/product/Shoulder_Pain1.jpg",
  },
  {
    title: "Joint Pain",
    desc: "Supports long-term joint relief and mobility improvement.",
    img: "/product/joint pain.jpg",
  },
  {
    title: "Muscle Pain",
    desc: "Accelerates muscle recovery and reduces fatigue.",
    img: "/product/Muscle Pain.jpg",
  },
  {
    title: "Strain Injuries",
    desc: "Speeds up healing and reduces discomfort quickly.",
    img: "/product/Strain Injuries.jpg",
  },
];

export default function PainManagement() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16"
>
  <span className="text-gray-900 dark:text-white">
    Pain Management
  </span>{" "}
  <span className="bg-gradient-to-r from-[#fd5da2] to-pink-400 bg-clip-text text-transparent">
    Applications
  </span>
</motion.h2>

        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="flex flex-wrap lg:flex-col gap-3 md:gap-4 justify-center lg:justify-start w-full lg:w-1/3">

            {conditions.map((item, idx) => (
              <motion.button
                key={item.title}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300
                  ${
                    active === idx
                      ? "bg-[#fd5da2] text-white shadow-lg shadow-[#fd5da2]/30"
                      : "bg-gray-100 text-gray-700 hover:bg-[#fd5da2]/10"
                  }`}
              >
                {item.title}
              </motion.button>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 w-full">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >

                {/* IMAGE */}
                <div className="relative w-full max-w-2xl h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] mb-6">

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#fd5da2]/10 blur-3xl rounded-full"></div>

                  {/* Image Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-gray-200"
                  >
                    <Image
                      src={conditions[active].img}
                      alt={conditions[active].title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </motion.div>

                </div>

                {/* TEXT */}
                <div className="text-center px-2 sm:px-6">

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-[#fd5da2]"
                  >
                    {conditions[active].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
                  >
                    {conditions[active].desc}
                  </motion.p>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}