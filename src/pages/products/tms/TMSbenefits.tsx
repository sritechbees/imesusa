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
    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Benefits & Features
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Transcranial Magnetic Stimulation offers a modern wellness
            approach designed for MedSpa environments, combining
            advanced brain stimulation technology with a calm and
            comfortable patient experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 mb-6">
                  <Icon className="text-purple-600 w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}