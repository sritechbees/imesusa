"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, ShieldCheck, Settings, RefreshCw, Sparkles } from "lucide-react";

export default function TechnologyFeatures() {

  const features = [
    {
      icon: <Cpu size={28} />,
      title: "Dual Applicator System",
      desc: "Two specialized applicators allow treatment of both localized pain areas and larger body regions.",
    },
    {
      icon: <Activity size={28} />,
      title: "Precision Electromagnetic Stimulation",
      desc: "Advanced electromagnetic field technology designed to stimulate tissues and support natural recovery.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Non-Invasive Therapy",
      desc: "Provides pain relief without injections, surgery, or medication.",
    },
    {
      icon: <Settings size={28} />,
      title: "Easy Clinical Operation",
      desc: "Designed for simple operation in clinics, wellness centers, and rehabilitation facilities.",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Repeatable Treatment Sessions",
      desc: "Safe for repeated therapy sessions for ongoing pain management.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Modern Pain Management Technology",
      desc: "Supports physicians in providing advanced therapy solutions to patients.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technology & Key Features
        </motion.h2>


        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
            >

              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#007cd5]/10 to-blue-400/10"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-[#007cd5]/10 text-[#007cd5] mb-5 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-600 leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}