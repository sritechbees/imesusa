"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Pill, Clock, Brain, Activity, Zap } from "lucide-react";

export default function KeyBenefitsFeatures() {

  const features = [
    {
      icon: ShieldCheck,
      title: "Non-Invasive Treatment",
      desc: "TMS uses magnetic stimulation technology without surgery or invasive procedures."
    },
    {
      icon: Pill,
      title: "No Medication Required",
      desc: "Patients receive brain stimulation therapy without relying on medications."
    },
    {
      icon: Clock,
      title: "No Downtime",
      desc: "Clients can return to normal daily activities immediately after each session."
    },
    {
      icon: Brain,
      title: "Brain Wellness Support",
      desc: "Designed to support mental clarity, emotional balance, and cognitive wellness."
    },
    {
      icon: Activity,
      title: "Clinically Proven Technology",
      desc: "Backed by scientific research and used worldwide in modern wellness clinics."
    },
    {
      icon: Zap,
      title: "Quick Treatment Sessions",
      desc: "Each session typically lasts 20–30 minutes in a calm MedSpa environment."
    }
  ];

  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits &{" "}
            <span className="text-[#fd5da2]">Features</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transcranial Magnetic Stimulation offers a modern wellness
            approach designed for MedSpa environments, combining
            advanced brain stimulation technology with a calm and
            comfortable patient experience.
          </p>
        </motion.div>

        {/* 🌊 WATERFALL LAYOUT */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group break-inside-avoid mb-10"
              >

                {/* ICON + TITLE */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 group-hover:border-[#fd5da2] transition">
                    <Icon className="w-6 h-6 text-gray-700 group-hover:text-[#fd5da2] transition" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#fd5da2] transition">
                    {item.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mt-4 leading-relaxed text-sm pl-16">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="mt-4 ml-16 h-[2px] w-0 bg-[#fd5da2] group-hover:w-20 transition-all duration-300"></div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}