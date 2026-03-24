"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function FDACompliance() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const items = [
    {
      title: "Regulatory Awareness",
      desc: "Devices are evaluated under strict healthcare compliance frameworks.",
    },
    {
      title: "Clinical Validation",
      desc: "Backed by clinical research and real-world therapeutic results.",
    },
    {
      title: "Safety Standards",
      desc: "Focused on patient safety, usability, and risk mitigation.",
    },
    {
      title: "Responsible Implementation",
      desc: "Ensuring proper usage aligned with medical guidelines.",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <p
            data-aos="fade-up"
            className="text-[#fd5da2] uppercase tracking-widest text-sm mb-3"
          >
            Regulatory Transparency
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            FDA & Compliance
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-400 leading-relaxed max-w-md"
          >
            We follow a structured approach to ensure every technology meets
            modern healthcare standards, safety requirements, and real-world usability.
          </p>

        </div>

        {/* RIGHT TIMELINE */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-white/10"></div>

          {items.map((item, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              whileHover={{ x: 10 }}
              className="relative flex items-start gap-6 mb-12 group"
            >

              {/* Dot */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#fd5da2]/20 flex items-center justify-center border border-[#fd5da2]/40">
                  <span className="text-[#fd5da2] font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 w-full transition group-hover:border-[#fd5da2]/50">

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#fd5da2] transition">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}