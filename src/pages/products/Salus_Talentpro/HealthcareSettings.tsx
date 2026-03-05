"use client";

import { motion } from "framer-motion";

export default function HealthcareSettings() {
  const settings = [
    {
      title: "Pain Management Clinics",
      desc: "Supports physicians specializing in chronic pain therapy.",
    },
    {
      title: "Physiotherapy Centers",
      desc: "Helps therapists deliver effective rehabilitation treatment.",
    },
    {
      title: "Rehabilitation Clinics",
      desc: "Used for muscle recovery and injury rehabilitation.",
    },
    {
      title: "Senior Care Facilities",
      desc: "Provides gentle therapy to help reduce pain in elderly patients.",
    },
    {
      title: "HMO Healthcare Programs",
      desc: "Improves patient comfort and clinical satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Healthcare Settings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {settings.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}