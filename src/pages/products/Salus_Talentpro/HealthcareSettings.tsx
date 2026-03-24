"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HealthcareSettings() {

  const settings = [
    {
      title: "Pain Management Clinics",
      desc: "Supports physicians specializing in chronic pain therapy.",
      img: "/product/Pain Management Clinics1.jpg",
    },
    {
      title: "Physiotherapy Centers",
      desc: "Helps therapists deliver effective rehabilitation treatment.",
      img: "/product/Physiotherapy Centers.jpg",
    },
    {
      title: "Rehabilitation Clinics",
      desc: "Used for muscle recovery and injury rehabilitation.",
      img: "/product/Rehabilitation Clinics.jpg",
    },
    {
      title: "Senior Care Facilities",
      desc: "Provides gentle therapy to help reduce pain in elderly patients.",
      img: "/product/Senior Care Facilities1.jpg",
    },
    {
      title: "HMO Healthcare Programs",
      desc: "Improves patient comfort and clinical satisfaction.",
      img: "/product/HMO Healthcare Programs.jpg",
    },
  ];

  const [active, setActive] = useState(settings[0]);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          {/* 🔥 HALF COLOR TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
            <span className="text-gray-900 dark:text-white">
              Healthcare
            </span>{" "}
            <span className="bg-gradient-to-r from-[#fd5da2] to-pink-400 bg-clip-text text-transparent">
              Settings
            </span>
          </h2>

          {settings.map((item, index) => (

            <motion.div
              key={index}
              onMouseEnter={() => setActive(item)}
              whileHover={{ x: 10 }}
              className="cursor-pointer border-l-4 border-transparent pl-6 
              hover:border-[#fd5da2] transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={active.img}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
        >

          <Image
            src={active.img}
            alt={active.title}
            fill
            className="object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}