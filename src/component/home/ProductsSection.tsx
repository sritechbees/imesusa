"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Technologies() {
  const tech = [
    {
      title: "TMS Therapy",
      desc: "Transcranial Magnetic Stimulation (TMS) is a non-invasive brain wellness technology designed to support mental clarity, emotional balance, and stress resilience.",
      img: "/about/tms.jpg",
    },
    {
      title: "Electromagnetic Stimulation",
      desc: "Advanced electromagnetic stimulation devices provide effective pain relief and rehabilitation support for joints, muscles, and chronic pain conditions.",
      img: "/about/home-2.png",
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
            Technologies <span className="text-pink-500">We Introduce</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400">
            iMESUSA introduces innovative and clinically valuable medical
            technologies designed to improve patient care and healthcare
            outcomes.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {tech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-pink-500/20 rounded-xl overflow-hidden hover:scale-105 transition duration-300 hover:border-pink-400 shadow-lg"
            >

              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* Button */}
                <button className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:scale-105 transition shadow-lg hover:shadow-pink-500/40">
                  Learn More
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}