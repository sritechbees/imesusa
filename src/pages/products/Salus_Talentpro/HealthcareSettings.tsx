"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HealthcareSettings() {

  const settings = [
    {
      title: "Pain Management Clinics",
      desc: "Supports physicians specializing in chronic pain therapy.",
      img: "/images/pain-clinic.jpg",
    },
    {
      title: "Physiotherapy Centers",
      desc: "Helps therapists deliver effective rehabilitation treatment.",
      img: "/images/physio.jpg",
    },
    {
      title: "Rehabilitation Clinics",
      desc: "Used for muscle recovery and injury rehabilitation.",
      img: "/images/rehab.jpg",
    },
    {
      title: "Senior Care Facilities",
      desc: "Provides gentle therapy to help reduce pain in elderly patients.",
      img: "/images/senior-care.jpg",
    },
    {
      title: "HMO Healthcare Programs",
      desc: "Improves patient comfort and clinical satisfaction.",
      img: "/images/hmo.jpg",
    },
  ];

  const [active, setActive] = useState(settings[0]);

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <h2 className="text-4xl font-bold mb-10">
            Healthcare Settings
          </h2>

          {settings.map((item, index) => (

            <motion.div
              key={index}
              onMouseEnter={() => setActive(item)}
              whileHover={{ x: 10 }}
              className="cursor-pointer border-l-4 border-transparent pl-6 hover:border-[#007cd5] transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
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
          className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl"
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