"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies <span className="text-[#fd5da2]">We Introduce</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500">
            iMESUSA introduces innovative and clinically valuable medical
            technologies designed to improve patient care and healthcare outcomes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {tech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >

              {/* Image */}
              <div className="relative h-[300px] md:h-[350px] w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-500">

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 text-sm mb-5">
                  {item.desc}
                </p>

                <Link href="/resources/resouceshero">
                  <button className="px-6 py-2 bg-[#fd5da2] text-white rounded-full hover:bg-pink-700 transition">
                    Learn More
                  </button>
                </Link>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}