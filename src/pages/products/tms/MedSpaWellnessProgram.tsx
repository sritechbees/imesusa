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
    <section className="bg-gradient-to-b from-white to-gray-50 overflow-hidden py-24">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity:0, x:-40 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Brain & Mental Wellness Program for MedSpas
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Transcranial Magnetic Stimulation (TMS) is introduced as a
            non-invasive brain wellness technology designed for modern
            MedSpa environments. It allows wellness centers to expand
            beyond aesthetic treatments into mental and emotional
            wellness services.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            This program focuses on wellness-focused, cash-based care
            delivered in a calm MedSpa environment rather than a
            traditional psychiatric clinic.
          </p>

          <p className="text-gray-600 leading-relaxed">
            In this model, TMS is positioned as a brain wellness service
            supporting clarity, emotional balance, and mental focus.
          </p>

        </motion.div>

        {/* Right Wellness Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {wellnessPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 mb-4">
                  <Icon className="text-purple-600 w-6 h-6"/>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}

        </div>

      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">

        <p className="text-sm text-gray-500 leading-relaxed">
          The MedSpa is responsible for determining whether TMS may be used
          for wellness purposes and assumes full responsibility for all
          related business, regulatory, and legal compliance.
        </p>

      </div>

    </section>
  );
}