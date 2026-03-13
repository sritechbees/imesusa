"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurPhilosophy() {
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
    <section className="relative bg-slate-950 py-24 text-gray-300 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-pink-500">Philosophy</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400">
            We believe medical technology should always serve people and
            deliver real benefits to healthcare providers and patients.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {philosophy.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-pink-500/20 rounded-xl overflow-hidden hover:scale-105 transition duration-300 hover:border-pink-400"
            >

              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl italic text-pink-400">
            "Technology should serve people - not the other way around."
          </p>
        </motion.div>

      </div>
    </section>
  );
}