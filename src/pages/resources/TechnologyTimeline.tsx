"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const timeline = [
  {
    year: "2016",
    title: "Research & Development",
    desc: "Initial development and medical research began for advanced treatment systems.",
  },
  {
    year: "2018",
    title: "Clinical Testing",
    desc: "Device successfully completed clinical testing with high patient success rates.",
  },
  {
    year: "2020",
    title: "FDA Compliance",
    desc: "Device passed regulatory safety and compliance procedures.",
  },
  {
    year: "2023",
    title: "Global Deployment",
    desc: "Adopted by hospitals and medical institutions worldwide.",
  },
];

export default function TechnologyTimeline() {
  return (
    <section className="relative bg-white py-24 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* 🔥 LEFT SIDE - TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-gray-200"></div>

          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-16">
            Technology <span className="text-[#fd5da2]">Evolution</span>
          </h2>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 mb-14 group"
            >

              {/* Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-[#fd5da2]/10 border border-[#fd5da2]/30 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#fd5da2] rounded-full"></div>
              </div>

              {/* Content */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition group-hover:border-[#fd5da2]/50">

                <h3 className="text-[#fd5da2] font-semibold mb-1">
                  {item.year}
                </h3>

                <h4 className="text-gray-900 text-xl font-semibold mb-2 group-hover:text-[#fd5da2] transition">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* 🎯 RIGHT SIDE - STICKY IMAGE */}
        <div className="hidden lg:block">

          <div className="sticky top-28">

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >

              <Image
                src="/about/product2.png"
                alt="Technology Evolution"
                width={600}
                height={700}
                className="rounded-2xl object-cover w-full h-[500px]"
              />

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Border */}
              <div className="absolute inset-0 border border-gray-200 rounded-2xl"></div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}