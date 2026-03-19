"use client";

import { motion } from "framer-motion";
import { Brain, HeartPulse, Sparkles, Focus } from "lucide-react";

export default function MedSpaWellnessProgram() {

  const wellnessPoints = [
    {
      icon: Brain,
      title: "Mental Clarity",
      desc: "Helps support clear thinking and cognitive wellness."
    },
    {
      icon: HeartPulse,
      title: "Emotional Balance",
      desc: "Promotes a calm and balanced emotional state."
    },
    {
      icon: Sparkles,
      title: "Stress Resilience",
      desc: "Supports the brain's ability to manage stress more effectively."
    },
    {
      icon: Focus,
      title: "Focus Wellness",
      desc: "Encourages better concentration and mental performance."
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 TOP CENTER TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[#fd5da2] font-semibold mb-4">
            Wellness Program
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Brain & Mental Wellness <br />
            <span className="text-[#fd5da2]">
              Program for MedSpas
            </span>
          </h2>
        </motion.div>

        {/* 🔸 MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* 📝 LEFT TEXT */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="space-y-6"
>

  {/* 🔹 SMALL TITLE */}
  <div className="flex items-center gap-3 mt-20">
    <span className="w-8  h-[2px] bg-[#fd5da2]"></span>
    <p className="text-sm uppercase tracking-widest text-[#fd5da2] font-semibold">
    Wellness Overview
    </p>
  </div>

  {/* CONTENT */}
  <p className="text-gray-600 text-lg leading-relaxed">
    Transcranial Magnetic Stimulation (TMS) is introduced as a
    non-invasive brain wellness technology designed for modern
    MedSpa environments. It allows wellness centers to expand
    beyond aesthetic treatments into mental and emotional
    wellness services.
  </p>

  <p className="text-gray-600 leading-relaxed">
    This program focuses on wellness-focused, cash-based care
    delivered in a calm MedSpa environment rather than a
    traditional psychiatric clinic.
  </p>

  <p className="text-gray-600 leading-relaxed">
    In this model, TMS is positioned as a brain wellness service
    supporting clarity, emotional balance, and mental focus.
  </p>

</motion.div>

          {/* 💎 RIGHT STACK CARDS */}
          <div className="space-y-6">

            {wellnessPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-4 p-6 border-l-4 border-[#fd5da2] bg-gray-50 rounded-xl hover:bg-[#fd5da2]/5 transition"
                >

                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-[#fd5da2]/10">
                    <Icon className="text-[#fd5da2] w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* ⚠️ DISCLAIMER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            The MedSpa is responsible for determining whether TMS may be used
            for wellness purposes and assumes full responsibility for all
            related business, regulatory, and legal compliance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}