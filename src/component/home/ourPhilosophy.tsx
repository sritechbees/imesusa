"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function OurPhilosophy() {

  const [active, setActive] = useState<number | null>(null);

  const philosophy = [
    {
      title: "Be Meaningful",
      desc: "Medical technology should provide real value and meaningful improvement to patient care and healthcare practices.",
      img: "/about/Be Meaningful.jpg",
    },
    {
      title: "Be Practical",
      desc: "Solutions should be practical and easy to integrate into real clinical and wellness environments.",
      img: "/about/practical.jpg",
    },
    {
      title: "Be Safe",
      desc: "Safety and regulatory awareness are essential when introducing advanced medical technologies.",
      img: "/about/Be Meaningful.jpg",
    },
    {
      title: "Benefit Lives",
      desc: "Every innovation should ultimately improve people’s lives and healthcare outcomes.",
      img: "/about/practical.jpg",
    },
  ];

  return (
    <section className="bg-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#fd5da2]">Philosophy</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600">
            We believe medical technology should always serve people and
            deliver real benefits to healthcare providers and patients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {philosophy.map((item, index) => (

            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}

              className={`relative rounded-2xl overflow-hidden group transition duration-500
              
              ${active !== null && active !== index
                ? "opacity-40 blur-[1px]"
                : "opacity-100"
              }

              hover:scale-105`}
            >

              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

                {/* Pink Overlay */}
                <div className="absolute inset-0 bg-[#fd5da2]/0 group-hover:bg-[#fd5da2]/20 transition duration-500"></div>

              </div>

              {/* Content */}
              <div className="bg-white p-6 border border-gray-100 shadow-lg">

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#fd5da2] transition">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <p className="text-xl italic text-[#fd5da2]">
            "Technology should serve people - not the other way around."
          </p>
        </div>

      </div>

    </section>
  );
}